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


  it('Should return 201 status code for sucessful POST request', (done) => {
    const request = {
      method: 'POST',
      url: '/users/',
      payload: JSON.stringify({ firstName: 'Abishek', lastName: 'Aditya' }),
    };
    server.inject(request, (response) => {
      expect(response.result.statusCode).toBe(201);
      done();
    });
  });

  it('Should return success or failure of deleted record on sucessful POST request', (done) => {
    const request = {
      method: 'POST',
      url: '/users/delete',
      payload: JSON.stringify({ firstName: 'Abishek', lastName: 'Aditya' }),
    };
    server.inject(request, (response) => {
      expect(response.result.result).toBe(1);
      done();
    });
  });
});

