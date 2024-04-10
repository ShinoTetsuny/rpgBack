const express = require('express');
const router = express.Router();
const mobController = require('../controllers/mobController');

router.get('/', mobController.getAllMobs);
router.get('/:id', mobController.getOneMob);

router.post('/', mobController.createMob);

router.put('/:id', mobController.editMob);

router.delete('/:id', mobController.deleteMob);

module.exports = router;