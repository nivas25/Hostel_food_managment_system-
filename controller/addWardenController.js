const addWarden = require('../models/addWarden');

const addWardens = async (req, res) => {
    const { name, email, phone, address, password } = req.body;

    try {
        const existingEmail = await addWarden.findOne({ email });
        if (existingEmail) {
            return res.status(400).json({ message: 'Email already exists' });
        }

        const existingNumber = await addWarden.findOne({ phone });
        if (existingNumber) {
            return res.status(400).json({ message: 'Contact number has been registered' });
        }

        const data = new addWarden({ name, email, phone, address, password });
        await data.save();
        return res.status(200).json({ message: 'Account successfully created!' });

    } catch (error) {
        return res.status(500).json({ message: 'Something went wrong!', error: error.message });
    }
}

module.exports = { addWardens };

