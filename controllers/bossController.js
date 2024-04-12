const boss = require('../models/boss')

exports.getAllBoss = (req, res, next) => {
    boss.findAll()
        .then((boss) => res.status(200).json(boss))
        .catch((error) => res.status(400).json({ error }))
}

exports.getOneBoss = (req, res, next) => {
    boss.findOne({ where: { idBoss: req.params.id } })
        .then((boss) => res.status(200).json(boss))
        .catch((error) => res.status(400).json({ error }))
}

exports.createBoss = (req, res, next) => {
    boss.create({
        nameBoss: req.body.nameBoss,
        strBoss : req.body.strBoss,
        dexBoss : req.body.dexBoss,
        sagBoss : req.body.sagBoss,
        conBoss : req.body.conBoss,
        intBoss : req.body.intBoss,
        dmgRangeBoss : req.body.dmgRangeBoss,
        dmgCDBoss : req.body.dmgCDBoss,
    })
        .then((boss) => res.status(200).json(boss))
        .catch((error) => res.status(400).json({ error }))
}

exports.editBoss = (req, res, next) => {
    boss.update({
        nameBoss: req.body.nameBoss,
        strBoss : req.body.strBoss,
        dexBoss : req.body.dexBoss,
        sagBoss : req.body.sagBoss,
        conBoss : req.body.conBoss,
        intBoss : req.body.intBoss,
        dmgRangeBoss : req.body.dmgRangeBoss,
        dmgCDBoss : req.body.dmgCDBoss,
    }, { where: { idBoss: req.params.id } })
        .then((boss) => res.status(200).json(boss))
        .catch((error) => res.status(400).json({ error }))
}

exports.deleteBoss = (req, res, next) => {
    boss.destroy({ where: { idBoss: req.params.id } })
        .then((boss) => res.status(200).json(boss))
        .catch((error) => res.status(400).json({ error }))
}