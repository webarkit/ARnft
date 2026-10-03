# AGENTS.md

Guidance for AI coding agents working in this repository. This is the canonical file;
`CLAUDE.md`, `GEMINI.md` and `.github/copilot-instructions.md` point here.

ARnft is a WebAR library for markerless NFT (Natural Feature Tracking) image tracking. It
wraps [`@webarkit/jsartoolkit-nft`](https://github.com/webarkit/jsartoolkitNFT): the camera
frames are drawn on a small process canvas, tracked in a Web Worker, and the resulting pose
and projection matrices are dispatched as DOM events. Rendering is left to the app; the
examples use [ARnft-threejs](https://github.com/webarkit/ARnft-threejs).

Human contributor process lives in [CONTRIBUTING.md](CONTRIBUTING.md) and takes precedence
over this file. The sections below summarise it and add the operational details that are
easy to get wrong.

---

## Branching and pull requests

**Open pull requests against `dev`.** `master` is reserved for stable releases.

```bash
git checkout dev && git pull origin dev
git checkout -b your-branch-name
```

Tooling may report `master` as the "main branch" because it is the repository's default
branch on GitHub. That reflects a repository setting, not this project's workflow. Use `dev`.

An already-open pull request can be retargeted with:

```bash
gh api -X PATCH repos/webarkit/ARnft/pulls/<n> -f base=dev
```

## Commit messages

[Conventional Commits](https://www.conventionalcommits.org/):

```
<type>(<optional scope>): <description>
```

**Allowed types**: `feat`, `fix`, `perf`, `doc`, `refactor`, `test`, `style`, `chore`.

There is no `ci` or `build` type: build, CI and dependency changes, including commits that
only rebuild `dist/` and `types/`, are `chore`. The documentation type is `doc`, not `docs`.

Scopes are optional; use one when it helps, e.g. `fix(examples): ...` or `perf(simd): ...`.

Breaking changes take a `!` after the type/scope, or a `BREAKING CHANGE:` footer.

Pull requests are usually merged by rebase, so every commit lands on `dev` as it is: each
commit message must follow the format, not only the PR title.

---

## Build and committed artifacts

CI installs with **yarn** (`yarn.lock` is the lock file); `npm run <script>` works locally.

| Script | Does |
|---|---|
| `build-ts` | `rimraf ./dist && tsc --emitDeclarationOnly && vite build && vite build --mode simd`: type-checks and emits `types/`, then Vite (`vite.config.mjs`) bundles `dist/ARnft.js` (UMD) and `dist/ARnft.mjs` (ES module), and their `.simd` versions |
| `dev-ts` | declarations, then the standard bundles in development mode and watch |
| `format-check` / `format` | `prettier --check .` / `prettier --write .` |
| `docs` | `typedoc` (output in `docs/`, not committed) |

### `dist/` and `types/` are committed

- The examples load `dist/ARnft.mjs` / `dist/ARnft.simd.mjs`, and `package.json` points
  `main`, `module` and `types` at `dist/` and `types/`. **After changing `src/`, run
  `npm run build-ts` and commit the result**, preferably in its own `chore` commit.
- When two open pull requests both ship a rebuilt `dist/`, the one merged second conflicts
  on the generated files: rebase it on `dev` and rebuild instead of resolving those conflicts
  by hand.
- On `master`, `build.yml` rebuilds and commits `dist/` on every push; on a tag it attaches
  `dist/ARnft.js` and `dist/ARnft.mjs` to the GitHub release. Publishing to npm is not
  automated.
- The bundles contain a local `file:///` path coming from the published
  `@webarkit/jsartoolkit-nft` build (webarkit/jsartoolkitNFT#684). It is expected until a
  fixed release is used; do not try to strip it here.

---

## Code layout

| Path | Role |
|---|---|
| `src/ARnft.ts` | public API: `init`, `initWithEntities`, `initWithConfig`, `initializeRaw`, `dispose*`; drives the update loop |
| `src/NFTWorker.ts` | main-thread side of one tracker: starts the worker, scales the projection, dispatches events |
| `src/Worker.ts` | Web Worker code: `ARControllerNFT`, marker loading, tracking, OneEuroFilter |
| `src/renderers/CameraViewRenderer.ts` | camera selection, `getUserMedia`, draws frames on the process canvas; `ICameraViewRenderer` |
| `src/utils/ARnftUtils.ts` | `getProcessGeometry`, `getWindowSize`, `getConfig`, `isMobile` |
| `src/config/ConfigData.ts` | types of `config.json` |
| `src/utils/html/Container.ts` | creates the `#app` container, video, canvas, loading screen |
| `examples/` | HTML examples, `config*.json`, vendored `js/ARnftThreejs.mjs` and `js/cameraViewRenderer.js` |

**SIMD twins.** `ARnft.ts`, `NFTWorker.ts`, `Worker.ts` and `index.ts` each have a
`.simd.ts` twin that should differ only in the imports (SIMD build of jsartoolkit-nft).
**Every change must be mirrored in the twin.** To check, compare the two files with the `simd`
names stripped. `ARnft.ts` / `ARnft.simd.ts` already drift slightly: a JSDoc wording, blank
lines, and `throw "..."` vs `throw new Error(...)` in `initWithConfig`. Don't add new drift;
aligning them belongs in a separate change.

**Example renderer.** `examples/js/cameraViewRenderer.js` is a copy of the internal renderer,
used by `arNFT_initialize_raw_example.html` through `initializeRaw`. Changes to the
`ICameraViewRenderer` contract must be reflected there (see #353).

The worker is inlined in the bundles with Vite's `import Worker from "./Worker?worker&inline"`
and started from a `blob:` URL. Keep it inlined: ARnft is also loaded from CDNs, and a page
cannot start a worker from a cross-origin file (#347).

---

## How the pieces talk to each other

Components communicate through **global DOM events on `window`**, not through references:

| Event | Dispatched by | Used by |
|---|---|---|
| `getWindowSize` `{ sw, sh }` | `NFTWorker` | renderer size (ARnft-threejs) |
| `getProjectionMatrix` `{ proj }` | `NFTWorker` | camera projection (ARnft-threejs) |
| `getMatrixGL_RH-<uuid>-<name>`, `nftTrackingLost-<uuid>-<name>`, `getNFTData-<uuid>-<name>` | `NFTWorker` | per-marker pose, lost, marker size |
| `videoResize` `{ width, height, rotated }` | `CameraViewRenderer` | `NFTWorker`, on stream size changes (device rotation) |
| `nftLoaded-<uuid>`, `ARnftIsReady`, `initARnft`, `containerEvent` (on `document`) | `NFTWorker` / `ARnft` | lifecycle |
| `terminateWorker-<name>`, `stopVideoStreaming` | `ARnft.dispose*` | teardown |

Rules that follow from this:

- **Remove what you add.** A new listener on `window` or on the video element must be removed
  on dispose (`terminateWorker-<name>` / `CameraViewRenderer.destroy()`). Pre-existing leaks
  are tracked in #349.
- **One geometry.** The process canvas is 320x240; `getProcessGeometry()` computes how the
  video is fitted into it. The renderer (drawing) and `NFTWorker` (projection ratios, worker
  size) must use the same values; a rounding mismatch is tracked in #350.
- **Rotation.** With `videoSettings.rotatePortrait`, portrait frames are drawn rotated 90°
  clockwise and `NFTWorker` rotates the projection back. The renderer is the source of truth
  for the `rotated` state, sent with `videoResize`.

## Configuration

`config.json` is fetched at startup and **unknown keys are silently ignored**: double-check
option names (e.g. `rotatePortrait`, not `rotatedCamera`). Camera options live in
`videoSettings`: `width`/`height` (`min`/`max`), `facingMode`, `targetFrameRate`,
`rotatePortrait`, `cameraLabel`. The `width`/`height` passed to `ARnft.init()` are currently
ignored in the default path (#352).

---

## Verification

There is **no automated test suite**. CI runs `yarn format-check` and `yarn docs`, and
`build.yml` runs `yarn build-ts` (which type-checks). Before pushing:

```bash
npm run build-ts
npm run format-check
```

A green build proves only that the code compiles. **Tracking and overlay changes must be
checked in a browser, on a real device**, with a printed or on-screen marker
(`examples/DataNFT/pinball`):

- always serve the repository root with `-c-1`, which disables caching; without it a phone
  can keep using an old `dist/` or `config.json` for an hour;
- on desktop, `npx http-server -c-1` and `http://localhost:8080/examples/...` are enough;
- **on a phone the page must be served over HTTPS**, because browsers only allow the camera
  on HTTPS or `localhost`. Create a self-signed certificate once (`openssl` is included in
  Git for Windows) and start `http-server` with it:

  ```bash
  openssl req -x509 -newkey rsa:2048 -nodes -keyout key.pem -out cert.pem -days 365 -subj "/CN=localhost"
  npx http-server -c-1 -S -C cert.pem -K key.pem
  ```

  On the phone, open the **`https://`** address that `http-server` prints for the computer's
  network interface, e.g. `https://192.168.1.10:8080/examples/arNFT_example.html` (it moves to
  the next port if 8080 is busy), and accept the certificate warning. `cert.pem` and
  `key.pem` are git-ignored: never commit them;
- on Android, Chrome's port forwarding is an alternative without certificates. Connect the
  phone over USB, open `chrome://inspect` on the computer, forward port `8080` to
  `localhost:8080`, and open `http://localhost:8080/examples/...` on the phone;
- test `arNFT_example.html` and `arNFT_simd_example.html`, and `arNFT_initialize_raw_example.html`
  when touching the renderer contract;
- for camera geometry changes, start in portrait and in landscape, rotate the device both
  ways, and repeat with `rotatePortrait` on and off.

For pure logic (geometry, projection, camera selection), the sources can be loaded in Node with
TypeScript's `transpileModule` and fake `window`/video/canvas/worker objects; write such a check
first and make it fail before fixing.

---

## Gotchas

- **Prettier on Windows.** With `core.autocrlf=true` the working tree has CRLF line endings and
  `prettier --check` reports every file. Use `npx prettier --check --end-of-line auto <files>`
  locally; CI (Linux) checks LF files.
- **Rebuild noise on Windows.** A rebuild rewrites `types/` with LF endings, so `git status`
  lists the files as modified even when nothing changed. `git add` normalises them; there is
  no content change to commit.
- **Build with a real `node_modules`.** A `node_modules` symlinked or junctioned from another
  checkout, which is common in git worktrees, changes the module paths the bundler sees; with
  the former webpack build this changed the bundles (#357). Run `yarn install` in the checkout
  you build from.
- **jsartoolkit-nft imports.** `tsconfig.json` uses `moduleResolution: "bundler"`, which honours
  the package's `exports`: import from `@webarkit/jsartoolkit-nft` or its `./simd` entry, never
  from deep `types/src/...` or `dist/...` paths.
- **TypeScript 7.** Stay on 6.0.x until `typedoc`, which CI runs, supports TypeScript 7.
- **Camera choice.** On smartphones the last listed camera is used unless `cameraLabel` matches;
  that rule currently ignores `facingMode: "user"` (#351).

---

## Maintaining this file

`AGENTS.md` is the canonical guidance. Thin pointer files exist so that tools which look for a
specific filename still find it:

| File | Read by |
|---|---|
| `AGENTS.md` | the cross-tool convention: OpenAI Codex, Antigravity and others |
| `CLAUDE.md` | Claude Code |
| `GEMINI.md` | Gemini CLI; Antigravity also loads it, together with `AGENTS.md` |
| `.github/copilot-instructions.md` | GitHub Copilot |

The pointers repeat only the handful of rules that are most often got wrong, so that a tool
which injects the file without following links still gets the essentials. **Everything else
belongs here.** When updating guidance, edit `AGENTS.md`; touch a pointer only if one of those
few headline rules changes.

To support another tool, add a pointer file rather than copying this content.
