const Course = require('../models/Course');
const { mongooseToObject} = require('../../util/mongoose');
class CourseControllers{
    
  
    // [GET] /course/:slug
    show(req,res,next) {
        Course.findOne({ slug: req.params.slug})
        .then(course => {
            res.render('courses/show',{course: mongooseToObject(course)});
        })
        .catch(next);
    }
    // [GET] /courses/create
    create(req, res, next) {
        res.render('courses/create')
    }
    // [GET] /courses/store
    store(req, res, next) {
        const formData = req.body;
        formData.image = `https://img.youtube.com/vi/${req.body.videoId}/sddefault.jpg`;
        const course = new Course(formData)
        course.save()
            .then(() => res.redirect('/'))
            .catch(error => {
                
            })
    }

}
module.exports = new CourseControllers;