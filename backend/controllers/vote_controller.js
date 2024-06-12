const Vote = require("../models/vote_model");
const User = require("../models/user_model");
const Candidat = require("../models/candidat_model");

const castVote = async (req, res) => {
    const { userId, candidateId } = req.body;

    try {
        // Vérifier si l'utilisateur existe et s'il a un token de vote
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: "Utilisateur non trouvé" });
        }
        if (user.voteToken < 1) {
            return res.status(400).json({ message: "L'utilisateur n'a plus de token de vote" });
        }

        // Vérifier si le candidat existe
        const candidate = await Candidat.findById(candidateId);
        if (!candidate) {
            return res.status(404).json({ message: "Candidat non trouvé" });
        }

        // Créer un nouveau vote
        const vote = new Vote({
            user: userId,
            candidate: candidateId
        });
        await vote.save();

        // Réduire le token de vote de l'utilisateur
        user.voteToken -= 1;
        await user.save();

        // Augmenter le compteur de votes du candidat
        candidate.voteCount += 1;
        await candidate.save();

        res.status(201).json({ message: "Vote réussi", vote });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

const getVotes = async (req, res) => {
    try {
        const votes = await Vote.find({});
        res.status(200).json(votes);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const getVote = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await Vote.findById(id);
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = {
    castVote,
    getVotes,
    getVote
}