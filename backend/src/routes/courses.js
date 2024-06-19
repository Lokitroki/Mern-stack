const { Router } = require('express');
const router = Router();
const {getCourses, createCourse, getCourse, updateCourses, deleteCourses, getcourse} = require('../controllers/courses.controller')

router.route('/')
    .get(getCourses)
    .post(createCourse)
    
router.route('/:id')
    .get(getCourse)
    .put(updateCourses)
    .delete(deleteCourses)
module.exports = router;