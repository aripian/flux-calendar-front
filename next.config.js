const withPlugins = require('next-compose-plugins');
const withCSS = require('@zeit/next-css');
const withSass = require('@zeit/next-sass');
const withESLint = require('next-eslint');

module.exports = withPlugins([
  [withCSS(withSass(withESLint()))], {
  	exportPathMap: async function (defaultPathMap) {
	    return {
	      '/': { page: '/' },
	      '/bank-info': { page: '/bank-info' },
	      '/summary': { page: '/summary' },
	    }
	}
  }
]);
