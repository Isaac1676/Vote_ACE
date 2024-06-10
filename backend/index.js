require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 2013;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Importer les routes
const voteRoutes = require('./routes/vote');
const candidateRoutes = require('./routes/candidate');  // Importer les routes des candidats
const personRoutes = require('./routes/person');  // Importer les routes des personnes

// Utiliser les routes
app.use('/api/votes', voteRoutes);
app.use('/api/candidates', candidateRoutes);  // Utiliser les routes des candidats
app.use('/api/persons', personRoutes);  // Utiliser les routes des personnes

// Démarrer le serveur
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
