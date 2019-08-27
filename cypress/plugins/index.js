const dotenv = require('dotenv');

dotenv.config();


// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

module.exports = (on, config) => {
  // modify config values
  config.baseUrl = process.env.SERVER_URL;

  config.env.ENVIRONMENT = process.env.NODE_ENV;

  return config;
};
