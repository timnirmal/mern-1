//All routes in Students
import  express from "express";
//import {getStudents, createStudents} from "../controllers/student";
import student from "../models/student";

const getStudents = require('../controllers/student');

const router = express.Router();

//path, call back func
router.get('/', getStudents);
router.post('/', createStudents);

export default router;