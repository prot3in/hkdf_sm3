const esbuild = require("esbuild");
esbuild.build({
    entryPoints: ["src/index.ts"],
    outfile: "dist/index.cjs",
    bundle: true,
    minify: true,
    format: "cjs",
    legalComments: "none",
    target: ["esnext"],
});
esbuild.build({
    entryPoints: ["src/index.ts"],
    outfile: "dist/index.mjs",
    bundle: true,
    minify: true,
    format: "esm",
    target: ["esnext"],
});
