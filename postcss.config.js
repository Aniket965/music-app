const purgecss = require('@fullhuman/postcss-purgecss')

module.exports = {
    plugins: [
      require('tailwindcss'),
      require('autoprefixer'),
      purgecss({
        content: ['./src/**/*.js',
        './src/**/*.ts',
        './src/**/*.tsx',
        './src/components/**/*.tsx',
        './src/pages/*.tsx'],
        defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
      })
    ]
  }