const express = require('express');
let { salonCars } = require('../db/models');
const router = express.Router();
var faker = require('faker');

router.get('/', async function (req, res) {
  res.render('index');
});

router.get('/cars', async function (req, res) {
  let car = await salonCars.findOne({ order: [['id']] });
  if (!car) {
    return res.sendStatus(404);
  } else res.json(car);
});

router.get('/cars/new', async function (req, res) {
  let newCar = await salonCars.create({
    brand: faker.vehicle.manufacturer(),
    model: faker.vehicle.model(),
    color: faker.commerce.color(),
    horsepower: faker.finance.creditCardCVV(),
    price: faker.datatype.number(),
  });

  res.json(newCar);
});

router.post('/cars/:id', async function (req, res) {
  console.log(req.params.id);
  let nextCar = await salonCars.findAll({
    order: [['id']],
    offset: req.body.count,
    limit: 1,
  });
  if (!nextCar.length) {
    return res.sendStatus(404);
  } else {
    res.json(nextCar);
  }
});
router.delete('/cars/:id/del', async function (req, res) {
  await salonCars.destroy({ where: { id: req.params.id } });
  res.sendStatus(200).end();
});

module.exports = router;
