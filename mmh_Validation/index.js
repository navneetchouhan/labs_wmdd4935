let Hapi = require('hapi');
let Joi = require('joi');
let server = new Hapi.Server();
server.connection({
    host: 'localhost',
    port: Number(process.argv[2] || 8080)
});
server.route({
    method: 'GET',
    path: '/chickens/{breed}',
    config: {
        handler: (request, reply) => {
            reply('You asked for the chicken ' + request.params.breed);
        },
        validate: {
            params: {
                breed: Joi.string().required()
            }
        }
    }
});
server.start((err) => {
    if (err) throw err;
});