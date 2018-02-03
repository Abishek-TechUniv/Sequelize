const Models = require('../models');

const routes = [{
  method: 'GET',
  path: '/',
  handler: (request, reply) => {
    Models.users.findAll()
      .then((table) => {
        reply({
          users: table,
          status: 200,
        });
      });
  },
}];

module.exports = routes;
