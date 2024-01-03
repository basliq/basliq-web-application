module.exports = {
  trailingComma: "all",
  tabWidth: 2,
  semi: false,
  singleQuote: true,
  printWidth: 120,
  bracketSpacing: true,
  endOfLine: "crlf",
  plugins: [require.resolve("@trivago/prettier-plugin-sort-imports")],
  importOrder: ["^react(.*)", "<THIRD_PARTY_MODULES>", "@/(.*)", "PUBLIC/(.*)", "./*"],
  importOrderSeparation: false
};