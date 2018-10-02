let config = {};

/**
 * Localhost web server configurations
 */
config.web = {};
config.web.port = process.env.PORT || '3000';
config.web.secret = 'topsecret';


/**
 * Development database configurations
 *
 */
config.database = {};
config.database.username = 'gjvance';
config.database.password = 'password1';
config.database.port = '15753';
config.database.url = 'ds115753.mlab.com';
config.database.name = 'nodequiz';


module.exports = config;
