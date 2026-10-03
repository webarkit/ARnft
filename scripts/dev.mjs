// Development watch (`npm run dev-ts`): keeps types/ and the standard and SIMD bundles in
// dist/ up to date while editing src/. Runs tsc and both Vite builds in watch mode and stops
// them together: when one exits (or Ctrl+C), the others are stopped too.
import { spawn } from "node:child_process";
import { createRequire } from "node:module";
import path from "node:path";

const require = createRequire(import.meta.url);

// path of a package's executable, from the "bin" field of its package.json
function bin(pkg, name) {
    const pkgJson = require.resolve(`${pkg}/package.json`);
    const { bin } = require(pkgJson);
    return path.join(path.dirname(pkgJson), typeof bin === "string" ? bin : bin[name]);
}

const tsc = bin("typescript", "tsc");
const vite = bin("vite", "vite");

const tasks = [
    ["types", tsc, ["--emitDeclarationOnly", "--watch", "--preserveWatchOutput"]],
    ["bundles", vite, ["build", "--watch"]],
    ["simd bundles", vite, ["build", "--mode", "simd", "--watch"]],
];

let stopping = false;
const children = tasks.map(([name, bin, args]) => {
    const child = spawn(process.execPath, [bin, ...args], { stdio: "inherit" });
    child.on("exit", (code) => {
        if (!stopping) {
            console.error(`[dev] ${name} watcher exited (code ${code}), stopping the others`);
            stop(Number.isInteger(code) && code > 0 && code < 256 ? code : 1);
        }
    });
    return child;
});

function stop(code) {
    stopping = true;
    for (const child of children) {
        if (child.exitCode === null) child.kill();
    }
    process.exitCode = code;
}

process.on("SIGINT", () => stop(0));
process.on("SIGTERM", () => stop(0));
