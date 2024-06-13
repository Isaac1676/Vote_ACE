const Candidat = require("../models/candidat_model");
const upload = require('../mutler');

const getCandidats = async (req, res) => {
    try {
        const candidats = await Candidat.find({});
        res.status(200).json(candidats);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const getCandidat = async (req, res) => {
    try {
        const { id } = req.params;
        const candidat = await Candidat.findById(id);
        res.status(200).json(candidat);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const createCandidat = async (req, res) => {
    try {
        const { name } = req.body;
        const photoUrl = req.file.filename; // Nom du fichier téléchargé

        // Créer un nouveau candidat
        const newCandidat = new Candidat({
            name,
            photo: `images/${photoUrl}`
        });

        // Enregistrer le candidat dans la base de données
        const savedCandidat = await newCandidat.save();

        res.status(201).json(savedCandidat);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const deleteCandidats = async (req, res) => {
    try {
        await Candidat.deleteMany({});
        res.status(200).json({ message: 'Tous les candidats ont été supprimés.' });
    } catch (error) {
        res.status(500).json({ message: 'Erreur lors de la suppression des candidats.', error });
    }
}

module.exports = {
    getCandidats,
    getCandidat,
    deleteCandidats,
    createCandidat
}