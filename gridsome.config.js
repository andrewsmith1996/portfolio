// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Andrew Smith Developer',
  'titleTemplate': "Portfolio - %s",
  siteUrl: 'https://andrewsmith1996.github.io',
  plugins: [{
    use: 'gridsome-plugin-typescript'
  }]
}
