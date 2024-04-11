const mob = require('../models/mob')

exports.getAllMobs = (req, res, next) => {
    mob.findAll()
        .then((mob) => res.status(200).json(mob))
        .catch((error) => res.status(400).json({ error }))
}

exports.getOneMob = (req, res, next) => {
    mob.findOne({ where: { idMob: req.params.id } })
        .then((mob) => res.status(200).json(mob))
        .catch((error) => res.status(400).json({ error }))
}

exports.createMob = (req, res, next) => {
    mob.create({
        nameMob: req.body.nameMob,
        strMob : req.body.strMob,
        dexMob : req.body.dexMob,
        sagMob : req.body.sagMob,
        conMob : req.body.conMob,
        intMob : req.body.intMob,
    })
        .then((mob) => res.status(200).json(mob))
        .catch((error) => res.status(400).json({ error }))
}

exports.editMob = (req, res, next) => {
    mob.update({
        nameMob: req.body.nameMob,
        strMob : req.body.strMob,
        dexMob : req.body.dexMob,
        sagMob : req.body.sagMob,
        conMob : req.body.conMob,
        intMob : req.body.intMob,
    }, { where: { idMob: req.params.id } })
        .then((mob) => res.status(200).json(mob))
        .catch((error) => res.status(400).json({ error }))
}

exports.deleteMob = (req, res, next) => {
    mob.destroy({ where: { idMob: req.params.id } })
        .then((mob) => res.status(200).json(mob))
        .catch((error) => res.status(400).json({ error }))
}