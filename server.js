const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

// Charger les variables d'environnement
dotenv.config();

// Créer une instance d'Express
const app = express();

// Connexion à MongoDB

mongoose.connect('mongodb://localhost:27017/ton_base_de_données')
  .then(() => {
    console.log('Connexion à MongoDB réussie !');
  })
  .catch(err => {
    console.log('Erreur de connexion à MongoDB :', err);
  });


// Middleware pour analyser les requêtes JSON
app.use(express.json()); 

// Route de base pour vérifier que le serveur fonctionne
app.get('/', (req, res) => {
    res.send('Bienvenue sur l\'API de la bibliothèque !');
});

// Démarrer le serveur
const PORT = process.env.PORT || 5002;
app.listen(5002, () => {
    console.log('Server running on port 5002');
  });
  
  
