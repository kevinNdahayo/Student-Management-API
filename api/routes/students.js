const express = require('express')
const router = express.Router()

// Import controllers
const {
  getStudentController,
  getIndividualStudentController,
  postStudentController,
  updateIndividualStudentController,
  deleteIndividualStudent,
} = require('../controllers/students.controller')

// Routes
router.get('/', getStudentController)
router.get('/:studentId', getIndividualStudentController)
router.post('/', postStudentController)
router.patch('/:studentId', updateIndividualStudentController)
router.delete('/:studentId', deleteIndividualStudent)

module.exports = router
