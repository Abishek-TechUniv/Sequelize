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
  { // READ ONE
    method: 'GET',
    path: '/users/{id}',
    handler: (request, reply) => {
      Models.users.findAll({ where: { id: request.params.id } })
        .then((table) => {
          reply({
            users: table,
            status: 200,
          });
        });
    },
  },
  { // CREATE
    method: 'POST',
    path: '/users',
    handler: (request, reply) => {
      Models.users.create({
        firstName: request.payload.firstName,
        lastName: request.payload.lastName,
      }).then(result => reply({
        status: 201,
        result,
      }));
    },
  },
  { // UPDATE
    method: 'PATCH',
    path: '/users/{id}',
    handler: (request, reply) => {
      Models.users.update(
        {
          firstName: request.payload.firstName,
          lastName: request.payload.lastName,
        },
        { where: { id: request.params.id } },
      ).then(() => reply({ status: 201 }));
    },
  },
  { // DELETE
    method: 'DELETE',
    path: '/users/{id}',
    handler: (request, reply) => {
      Models.users.destroy({ where: { id: request.params.id } })
        .then((result) => {
          reply({
            status: 200,
            result,
          });
        });
    },
  },
];

module.exports = routes;
