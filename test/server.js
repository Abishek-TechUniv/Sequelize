const server = require('./server');
const Routes = require('../routes');


describe('Testing the Hapi server that processes the requests', () => {
  it('Should contain correct number of routes', () => {
    expect(Routes.length).toBe(server.table('localhost')[0].table.length);
  });

  it('Should return 200 status code for sucessful GET request', (done) => {
    const request = {
      method: 'GET',
      url: '/users',
    };
    server.inject(request, (response) => {
      expect(response.statusCode).toBe(200);
      done();
    });
  });
});

