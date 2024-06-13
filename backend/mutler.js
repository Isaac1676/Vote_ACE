const multer = require('multer');

// Définir le stockage des fichiers avec Multer
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'backend/public/images'); // Dossier où les fichiers seront enregistrés
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname); // Nom du fichier original
    }
});

// Définir le filtre pour les types de fichiers acceptés (JPEG et PNG)
const fileFilter = function (req, file, cb) {
    // Vérifier le type MIME du fichier
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
        cb(null, true); // Accepter le fichier
    } else {
        cb(new Error('Only JPEG and PNG images are allowed'), false); // Refuser le fichier
    }
};

// Initialiser Multer avec la configuration de stockage et de filtre
const upload = multer({ storage: storage, fileFilter: fileFilter });

module.exports = upload;
