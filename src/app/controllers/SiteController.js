const Course = require('../models/Course');
const { mutilpleMongooseToObject} = require('../../util/mongoose');
class SiteControllers{
    //[GET] /

    index(req, res, next) {
        Course.find({})
            .then(courses =>{        
                res.render('home', {
                    courses: mutilpleMongooseToObject(courses)
                });
            })
            .catch(next);
    }
  
    // [GET] /search
    search(req,res) {
        res.render('search');
    }

}
module.exports = new SiteControllers;