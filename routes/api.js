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

// router.post('/car/create', async (req, res) => {
//   const { name, photo, color, type, description } = req.body;
//   await Car.create({
//     name,
//     photo,
//     description,
//     color,
//     type,
//     createdAt: new Date(),
//     updatedAt: new Date(),
//   });
//   res.redirect('/admin');
// });

// router.post('/car/edit/:carId', async (req, res) => {
//   const { name, photo, color, type, description } = req.body;

//   await Car.update(
//     { name, photo, color, type, description },
//     { where: { id: req.params.carId } },
//   );

//   res.redirect('/admin');
// });

// router.get('/car/delete/:carId', async (req, res) => {
//   await Car.destroy({
//     where: {
//       id: req.params.carId,
//     },
//   });
//   res.redirect('/admin');
// });

// router.post('/feedback', async (req, res) => {
//   const { name, email, website, message } = req.body;

//   try {
//     await Feedback.create({
//       name,
//       email,
//       website,
//       message,
//       UserId: req.user?.id || null,
//     });
//     res.redirect('/');
//   } catch {
//     res.render('error', { message: 'Server error', error: {} });
//   }
// });

module.exports = router;
