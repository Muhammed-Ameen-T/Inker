import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";


/** @type {import('eslint').Linter.Config[]} */
export default [
    {files: ["**/*.{js,mjs,cjs,ts}"]},
    pluginJs.configs.recommended,
    {languageOptions: {globals: globals.browser}},
    ...tseslint.configs.recommended,
    {
        "rules": {
            "@typescript-eslint/no-unused-vars": ["warn"],
        }
    }
];