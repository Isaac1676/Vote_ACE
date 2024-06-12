const mongoose = require('mongoose');

const candidateSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    photo: {
        type: String,
        required: true // Vous pouvez ajuster cela en fonction de vos besoins, par exemple, vous pouvez le rendre facultatif
    },
    voteCount: {
        type: Number,
        default: 0 // Initialise le nombre de votes à 0 pour un nouveau candidat
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // Vous pouvez ajuster cela en fonction de votre modèle utilisateur, si nécessaire
        required: true
    }
});

const Candidate = mongoose.model('Candidate', candidateSchema);

module.exports = Candidate;
