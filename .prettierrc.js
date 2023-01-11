module.exports = {
  arrowParens: "avoid",
  semi: false,
  tabWidth: 2,
  plugins: [require.resolve("prettier-plugin-astro")],
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
}
