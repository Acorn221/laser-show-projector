/* eslint-disable import/no-extraneous-dependencies, global-require */

module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  compilerOptions: {
    baseUrl: 'src/',
  },
  theme: {},
  plugins: [],
  include: [
    'src',
    'types',
  ],
};
