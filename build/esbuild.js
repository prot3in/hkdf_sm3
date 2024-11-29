const esbuild = require("esbuild");
const configList = [
    {
        entryPoints: ["src/index.ts"],
        outfile: "dist/index.cjs",
        format: "cjs",
    },
    {
        entryPoints: ["src/index.ts"],
        outfile: "dist/index.mjs",
        format: "esm",
    },
];

configList.forEach((config) => {
    esbuild.build({
        bundle: true,
        minify: true,
        target: ["esnext"],
        ...config,
    });
});