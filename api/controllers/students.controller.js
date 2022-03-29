const studentModel = require('../models/students.model')

function getStudentController(req, res) {
  res.status(200).json({
    message: 'Fetching Student Data',
    students: studentModel,
  })
}

function getIndividualStudentController(req, res) {
  const studentId = req.params.studentId
  const individualStudent = studentModel[studentId]
  res.status(200).json({
    message: `Student With ID ${studentId} Information`,
    studentInfo: individualStudent,
  })
}

function postStudentController(req, res) {
  const students = {
    studentId: req.body.studentId,
    name: req.body.name,
  }
  studentModel.push(students)
  res.status(201).json({
    message: 'student was created',
    request: {
      type: 'GET',
      studentID: students.studentId,
      studentName: students.name,
      url: `https: localhost:8080/students/${students.studentId}`,
    },
  })
}

function updateIndividualStudentController(req, res) {
  const studentId = req.params.studentId
  res.status(200).json({
    message: 'Update Student Info with ID ${studentId}',
  })
}

function deleteIndividualStudent(req, res) {
  const studentId = req.params.studentId
  res.status(200).json({
    message: 'Student with ID ${studentId} was deleted',
  })
}

module.exports = {
  getStudentController,
  getIndividualStudentController,
  postStudentController,
  updateIndividualStudentController,
  deleteIndividualStudent,
}
