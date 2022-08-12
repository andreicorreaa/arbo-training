'use strict';

module.exports = function(app) {
  app.dataSources.postgres.automigrate();
  console.log('Performed automigration.');
};
