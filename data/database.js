

const mongoose = require('mongoose');
const Student    = require('../model/studentModel.js');

const uri = 'mongodb+srv://web450937:jeEJDa3mC3KeHzPw@cluster0.pjualhm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

async function connectToDatabase()
{

    await mongoose.connect(uri,{useNewUrlParser:true,useUnifiedTopology:true});
    console.log('Connect to Mongo');
}


// Function to add a new student using Mongoose model
async function addStudent(name, age, studentClass) {
    try {
        // Create a new student document
        const newStudent = new Student({
            name: name,
            age: age,
            class: studentClass
        });

        // Save the new student document to the database
        await newStudent.save();
        console.log('Student saved successfully');
    } catch (err) {
        console.error('Error saving student:', err);
        throw err; // Propagate the error
    }
}


connectToDatabase();
module.exports = {
     addStudent
};


  