const weapon = require('../models/weapon')

exports.getAllWeapons = (req, res, next) => {
    weapon.findAll()
        .then((weapon) => res.status(200).json(weapon))
        .catch((error) => res.status(400).json({ error }))
}

exports.getOneWeapon = (req, res, next) => {
    weapon.findOne({ where: { idWeapon: req.params.id } })
        .then((weapon) => res.status(200).json(weapon))
        .catch((error) => res.status(400).json({ error }))
}

exports.createWeapon = (req, res, next) => {
    weapon.create({
        nameWeapon: req.body.nameWeapon,
        dmgRangeWeapon : req.body.dmgRangeWeapon,
        dmgCDWeapon : req.body.dmgCDWeapon
    })
        .then((weapon) => res.status(200).json(weapon))
        .catch((error) => res.status(400).json({ error }))
}

exports.editWeapon = (req, res, next) => {
    weapon.update({
        nameWeapon: req.body.nameWeapon,
        dmgRangeWeapon : req.body.dmgRangeWeapon,
        dmgCDWeapon : req.body.dmgCDWeapon
    }, { where: { idWeapon: req.params.id } })
        .then((weapon) => res.status(200).json(weapon))
        .catch((error) => res.status(400).json({ error }))
}

exports.deleteWeapon = (req, res, next) => {
    weapon.destroy({ where: { idWeapon: req.params.id } })
        .then((weapon) => res.status(200).json(weapon))
        .catch((error) => res.status(400).json({ error }))
}