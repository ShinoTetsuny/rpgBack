const express = require('express');
const router = express.Router();
const bossController = require('../controllers/bossController');

router.get('/', bossController.getAllBoss);
router.get('/:id', bossController.getOneBoss);

router.post('/', bossController.createBoss);

router.put('/:id', bossController.editBoss);

router.delete('/:id', bossController.deleteBoss);

module.exports = router;