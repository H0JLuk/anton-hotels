var express = require('express');
var router = express.Router();
const { Service, Award, Room, Rooms_photos } = require('../models');

router.get('/', async function (req, res, next) {
  res.render('index', {});
});

router.get('/reservation/:roomId', async (req, res, next) => {
  const { roomId } = req.params;
  res.render('contact', { roomId });
});

router.get('/rooms', async (req, res, next) => {
  try {
    const rooms = await Room.findAll({
      include: [{ model: Rooms_photos, as: 'photos', attributes: ['photo'] }],
    });
    console.log('rooms', rooms);
    res.render('rooms', { rooms });
  } catch (e) {
    console.log('e', e);
    res.sendStatus(200);
  }
});

router.get('/services', async (req, res, next) => {
  const services = await Service.findAll();
  res.render('services', { services });
});

router.get('/about-us', async (req, res, next) => {
  const awards = await Award.findAll();
  res.render('about-us', { awards });
});

router.get('/admin', async (req, res, next) => {
  res.render('admin', {});
});

module.exports = router;
