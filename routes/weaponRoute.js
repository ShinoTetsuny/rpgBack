const express = require('express');
const router = express.Router();
const weaponController = require('../controllers/weaponController');

router.get('/', weaponController.getAllWeapons);
router.get('/:id', weaponController.getOneWeapon);

router.post('/', weaponController.createWeapon);

router.put('/:id', weaponController.editWeapon);

router.delete('/:id', weaponController.deleteWeapon);

module.exports = router;