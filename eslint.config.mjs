import globals from "globals";
import pluginJs from "@eslint/js";

export default [
  { files: ["**/*.js"], languageOptions: { sourceType: "commonjs" } },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  {
    // Configuração das regras
    rules: {
      // Ponto e vírgula obrigatório
      semi: ["error", "always"],
      // Aspas simples obrigatórias
      quotes: ["error", "off"],
      "no-unused-vars": "warn",
    },
  },
];
