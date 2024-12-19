import * as path from "path";
import {defineConfig} from "vite";
import dts from "vite-plugin-dts";


export default defineConfig({
    plugins: [
        dts(),
    ],
    build: {
        lib: {
            entry: path.resolve("./src/index.ts"),
            name: "@vaie/drag-listener",
            fileName: format => `index.${format}.js`,
        },
    },
});