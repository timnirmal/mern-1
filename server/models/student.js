import mongoose from "mongoose";

const studentSchema = mongoose.Schema({
    //Object
    registrationNumber : Number,
    name : String,
    grade : String,
    section: {
        type: String,
        default: 'A'   //Value by Default
    },
    subject: [String]   //Array of Strings
});

const student = mongoose.model('students', studentSchema)

export default student;


# dependencies
/server/node_modules
/server/.pnp
/server/.pnp.js

# testing
/server/coverage

# production
/server/build

# misc
/server/.DS_Store
/server/.env.local
/server/.env.development.local
/server/.env.test.local
/server/.env.production.local

npm-debug.log*
yarn-debug.log*
yarn-error.log*
