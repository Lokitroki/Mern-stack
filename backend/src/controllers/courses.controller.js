const coursesCtrl = {};

const Course  = require('../models/Course');

coursesCtrl.getCourses = async (req, res) =>{
    const courses = await Course.find();
    res.json(courses);
} 

coursesCtrl.createCourse = async (req, res) => {
    const {title, content, date, author} = req.body;
    const newCourse = new Course({
        title,
        content,
        date,
        author
    });
    await newCourse.save();
    res.json({message: 'Course saved'})
};

coursesCtrl.getCourse = async (req, res) => {
    const course = await Course.findById(req.params.id);
    res.json(course);
};

coursesCtrl.updateCourses = async (req, res) => {
    const {title, content, author} = req.body;
    await Course.findByIdAndUpdate({_id: req.params.id},{
        title,
        author,
        content
      
    });
    console.log(req.params.id, req.body);
    res.json({message: 'Courses update'});
};
    
coursesCtrl.deleteCourses = async (req, res) => {
    await Course.findByIdAndDelete (req.params.id)
    res.json({message: 'Note deleted'});
};

module.exports = coursesCtrl;
