const express = require("express");
const app = express();
const cors = require("cors");

// Models
const sequelize = require('./database/database');
const Boss = require('./models/bossController');
const Weapon = require('./models/weaponController');
const Mob = require('./models/mobController');

app.use(cors());
app.use(express.json());

// Synchroniser les modèles avec la base de données
sequelize.sync()
  .then(() => {
    console.log('Database & tables synchronisées !');
  })
  .catch(err => {
    console.error('Erreur de synchronisation :', err);
  });

// Routes
// Vous pouvez définir vos routes ici

app.listen(3000, () => {
    console.log("Serveur démarré sur le port 3000");
});
