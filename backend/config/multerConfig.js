const multer = require('multer');
const path = require('path');

// Configuration de stockage de multer
const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, 'uploads/');  // Répertoire de destination pour les fichiers téléchargés
  },
  filename: function(req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));  // Nom du fichier
  }
});

// Filtrage des types de fichiers (facultatif)
const fileFilter = function(req, file, cb) {
  const allowedTypes = /jpeg|jpg|png/;
  const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype = allowedTypes.test(file.mimetype);

  if (extname && mimetype) {
    return cb(null, true);
  } else {
    cb('Error: Images Only!');
  }
};

const upload = multer({
  storage: storage,
  limits: { fileSize: 1024 * 1024 * 5 },  // Limite de taille de fichier: 5MB
  fileFilter: fileFilter
});

module.exports = upload;
