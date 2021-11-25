//import fastify
const fastify = require('fastify');

//initialized Fastify App
const app = fastify();

//handle root route
app.get('/', (request, reply) => {
  try {
    reply.send('Hello world!');
  } catch (e) {
    console.error(e);
  }
});

//Register Routes
const studentRoutes = require('./routes/student.route');
studentRoutes.forEach((route, index) => {
  app.route(route);
});

//set application listening on port 5000 of localhost
app.listen(5000, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server running on ${address}`);
});
