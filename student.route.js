const studentController = require('../controller/student.controller');

const routes = [
  {
    method: 'GET',
    url: '/api/report',
    handler: studentController.getAllStudents,
  },
  {
    method: 'GET',
    url: '/api/report/:id',
    handler: studentController.getStudent,
  },
  {
    method: 'POST',
    url: '/api/add',
    handler: studentController.addStudent,
  },
  {
    method: 'POST',
    url: '/api/update/:id',
    handler: studentController.updateStudent,
  },
  {
    method: 'DELETE',
    url: '/api/delete/:id',
    handler: studentController.deleteStudent,
  },
];
module.exports = routes;
