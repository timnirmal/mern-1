//Routes function
//Move from router to controller
//export here and import in router and use it.
//Create function

//Since database has lots of data and it takes time
// We use async and await
const student = require("../models/student");

const getStudents = async (req, res) => {
    //res.send('Router is working')
    try {
        const allStudents = await student.find();
        res.status(200).json(allStudents);

    } catch (error) {
        res.status(404).json({message : error.message})
    }
}

//If request come from client side
const createStudents = async (req, res) => {
    //res.send('Router is working')

        const student = req.body;
                            //model(variable)
        const newStudent = new student(student);

        try {
            await newStudent.save();
            res.status(201).json(new student);
        }catch (error){
            res.status(409).json({message : error.message})
        }
}
module.exports = getStudents;
module.exports = createStudents;