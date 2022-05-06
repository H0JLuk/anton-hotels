var express = require('express');
var router = express.Router();
const { Orders } = require('../models');

router.post('/reservation', async (req, res) => {
  const { client_name, client_email, RoomId, member_count, message } = req.body;

  await Orders.create({
    client_name,
    client_email,
    RoomId,
    member_count,
    message: message || null,
  });
  res.redirect('/');
});

router.get('/reservation/:orderId/delete', async (req, res) => {
  await Orders.destroy({
    where: {
      id: req.params.orderId,
    },
  });
  res.redirect('/orders');
});

module.exports = router;
