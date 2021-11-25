const { v4: uuidv4 } = require('uuid');

//Data store
var students = {};

//Handlers
const getAllStudents = async (req, reply) => {
  return students;
};

const getStudent = async (req, reply) => {
  var id = req.params.id;
  var objKey = '';
  Object.keys(students).forEach((key) => {
    if (students[key]['id'] == id) {
      objKey = key;
    }
  });

  if (objKey != '') {
    return students[objKey];
  } else {
    return 'Incorrect Key';
  }
};

const addStudent = async (req, reply) => {
  const id = uuidv4();
  students[id] = {
    name: req.body.name,
    id: req.body.id,
    subject1: req.body.subject1,
    subject2: req.body.subject2,
    subject3: req.body.subject3,
    subject4: req.body.subject4,
    subject5: req.body.subject5,
  };

  return students[id];
};

const updateStudent = async (req, reply) => {
  var id = req.params.id;
  var objKey = '';
  Object.keys(students).forEach((key) => {
    if (students[key]['id'] == id) {
      objKey = key;
    }
  });

  if (objKey != '') {
    students[objKey].subject1 = req.body.subject1;
    students[objKey].subject2 = req.body.subject2;
    students[objKey].subject3 = req.body.subject3;
    students[objKey].subject4 = req.body.subject4;
    students[objKey].subject5 = req.body.subject5;

    return students[objKey];
  } else {
    return 'Incorrect Key';
  }
};

const deleteStudent = async (req, reply) => {
  var id = req.params.id;
  var objKey = '';
  Object.keys(students).forEach((key) => {
    if (students[key]['id'] == id) {
      objKey = key;
    }
  });

  if (objKey != '') {
    delete students[objKey];
    return 'Deleted Successfully';
  } else {
    return 'Incorrect Key';
  }
};

module.exports = {
  getAllStudents,
  getStudent,
  addStudent,
  updateStudent,
  deleteStudent,
};
