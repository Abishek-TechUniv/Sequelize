const Models = require('../models');

const routes = [
  { // READ ALL
    method: 'GET',
    path: '/users',
    handler: (request, reply) => {
      Models.users.findAll()
        .then((table) => {
          reply({
            users: table,
            status: 200,
          });
        });
    },
  },

];

module.exports = routes;
