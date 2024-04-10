const express = require("express");
const app = express();
const cors = require("cors");

// Models
const sequelize = require('./database/database');
const Boss = require('./models/boss');
const Weapon = require('./models/weapon');
const Mob = require('./models/mob');

app.use(cors());
app.use(express.json());

// Synchroniser les modèles avec la base de données
/*sequelize.sync()
  .then(() => {
    console.log('Database & tables synchronisées !');
  })
  .catch(err => {
    console.error('Erreur de synchronisation :', err);
  });
*/

// Routes
app.use('/boss', require('./routes/bossRoute'))
app.use('/mob', require('./routes/mobRoute'))
app.use('/weapon', require('./routes/weaponRoute'))

app.listen(3000, () => {
    console.log("Serveur démarré sur le port 3000");
});
