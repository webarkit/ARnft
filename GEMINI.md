# Gemini instructions

The full guidance for AI agents in this repository lives in **[AGENTS.md](AGENTS.md)**.
Read it before making changes: it is the canonical source and this file is only a pointer.

## The rules most often got wrong

- **Open pull requests against `dev`**, never `master`. `master` is reserved for stable
  releases. See [CONTRIBUTING.md](CONTRIBUTING.md).
- **Conventional Commits**, with types limited to
  `feat`, `fix`, `perf`, `doc`, `refactor`, `test`, `style`, `chore`.
  There is no `ci` or `build` type (rebuilding `dist/` is `chore`), and documentation is `doc`,
  not `docs`. Pull requests are usually merged by rebase, so every commit message counts.
- **`dist/` and `types/` are committed** and are what the examples and `package.json` load.
  After changing `src/`, run `npm run build-ts` and commit the result.
- **Mirror every change in the SIMD twin**: `ARnft.ts`, `NFTWorker.ts`, `Worker.ts` and
  `index.ts` each have a `.simd.ts` copy that differs only in the imports.
- **A green build proves very little.** There is no test suite; check tracking and overlay
  changes on a real device, serving the repository with `npx http-server -c-1` so the device
  doesn't use cached files.
