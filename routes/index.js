var express = require('express');
var router = express.Router();
const { Service, Award, Room, Rooms_photos, Orders } = require('../models');

router.get('/', function (req, res, next) {
  res.render('index', {});
});

router.get('/reservation/:roomId', async (req, res, next) => {
  const { roomId } = req.params;
  const room = await Room.findByPk(roomId);
  if (!room) {
    res.redirect('/rooms');
  }
  res.render('reservation', { room });
});

router.get('/rooms', async (req, res, next) => {
  const rooms = await Room.findAll({
    include: [
      { model: Rooms_photos, as: 'photos', attributes: ['photo'] },
      { model: Service, as: 'services', attributes: ['name', 'icon'] },
    ],
  });
  res.render('rooms', { rooms });
});

router.get('/services', async (req, res, next) => {
  const services = await Service.findAll();
  res.render('services', { services });
});

router.get('/about-us', async (req, res, next) => {
  const awards = await Award.findAll();
  res.render('about-us', { awards });
});

router.get('/orders', async (req, res, next) => {
  try {
    const orders = await Orders.findAll({
      include: {
        model: Room,
        // as: 'room',
        // attributes: ['id'],
      },
    });
    res.render('orders', { orders });
  } catch (e) {
    console.log('e', e);
    res.sendStatus(200);
  }
});

module.exports = router;
