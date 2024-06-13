const User = require("../models/user_model");

const getUsers = async (req, res) => {
    try {
        const users = await User.find({});
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const getUser = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findById(id);
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const getAce = async (req, res) => {
    const affiliation = 'ACE';

    try {
        const users = await User.find({ appartenance: affiliation });
        res.json(users);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

const getUserByPhone = async (req, res) => {
    const phoneNumber = req.params.phoneNumber;

    try {
        // Recherche de l'utilisateur par numéro de téléphone
        const user = await User.findOne({ phone: phoneNumber });

        if (!user) {
            return res.status(404).json({ message: "Aucun utilisateur trouvé avec ce numéro de téléphone." });
        }

        // Si l'utilisateur est trouvé, retournez-le
        res.json(user);
    } catch (error) {
        console.error('Erreur:', error.message);
        res.status(500).json({ message: "Une erreur est survenue lors de la recherche de l'utilisateur." });
    }
}

const createUser = async (req, res) => {
    const { email, phone } = req.body;

    try {
        const existingEmailUser = await User.findOne({ email });
        if (existingEmailUser) {
            return res.status(409).json({ message: 'Vous êtes déjà enregistré' });
        }

        // Check if phone number already exists
        const existingPhoneUser = await User.findOne({ phone });
        if (existingPhoneUser) {
            return res.status(409).json({ message: 'Vous êtes déjà enregistré' });
        }

        const user = await User.create(req.body);
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = {
    getUsers,
    getUser,
    getUserByPhone,
    getAce,
    createUser
}