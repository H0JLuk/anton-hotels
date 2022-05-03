var express = require('express');
var router = express.Router();
// const { Article, Member, Car } = require('../models');

router.get('/', async function (req, res, next) {
  res.render('index', {});
});

router.get('/cars', async (req, res, next) => {
  res.render('cars', {});
});

router.get('/contact', async (req, res, next) => {
  res.render('contact', {});
});

router.get('/rooms', async (req, res, next) => {
  res.render('rooms', {});
});

router.get('/services', async (req, res, next) => {
  res.render('services', {});
});

router.get('/about-us', async (req, res, next) => {
  res.render('about-us', {});
});

router.get('/admin', async (req, res, next) => {
  res.render('admin', {});
});

router.get('/blog', async (req, res, next) => {
  res.render('blog', {});
});

module.exports = router;
