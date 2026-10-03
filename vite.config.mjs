// Library build of ARnft: `vite build` writes the standard bundles and
// `vite build --mode simd` the SIMD ones, each as UMD (.js) and ES module (.mjs).
// The tracking worker is inlined in the bundles (`?worker&inline`), so ARnft also
// works when it is loaded from a CDN.
import { defineConfig } from "vite";

export default defineConfig(({ mode }) => {
    const simd = mode === "simd";
    const fileBase = simd ? "ARnft.simd" : "ARnft";
    return {
        publicDir: false,
        worker: { format: "iife" },
        build: {
            outDir: "dist",
            // the standard and SIMD builds write into the same folder
            emptyOutDir: false,
            lib: {
                entry: simd ? "src/index.simd.ts" : "src/index.ts",
                name: "ARnft",
                formats: ["es", "umd"],
                fileName: (format) => (format === "es" ? `${fileBase}.mjs` : `${fileBase}.js`),
            },
            rollupOptions: {
                // window.ARnft (UMD) and the default export are the { ARnft } object
                output: { exports: "default" },
            },
        },
    };
});
