const AddStudent = require('../models/resident'); // Ensure the path is correct

const generateResidentID = async () => {
    const lastStudent = await AddStudent.findOne().sort({ residentID: -1 }); 
    let newID;

    if (lastStudent) {
        const lastIDNumber = parseInt(lastStudent.residentID.slice(2)); 
        newID = 'HR' + String(lastIDNumber + 1).padStart(2, '0'); 
    } else {
        newID = 'HR01'; 
    }

    return newID;
};

const AddAllStudents = async (req, res) => {
    try {
        const { residentname, username, password, phoneNo, address } = req.body;
        
        const existingStudent = await AddStudent.findById(username);
        const existingNumber =await AddStudent.findOne({phoneNo});
        if (existingStudent) {
            return res.status(400).json({ message: 'Email already registered...!' });
        }
        if (existingNumber){
            return res.status(400).json({ message: 'Mobils already registered...!' });

        }
        const residentID = await generateResidentID();

        const newStudent = new AddStudent({
            residentname,
            username, 
            password,
            phoneNo,
            address,
            residentID,
        });

        await newStudent.save();
        res.status(200).json({ message: 'Added Successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Something went wrong!', error: error.message });
    }
};

module.exports = { AddAllStudents };
