const express = require('express');
const router = express.router();

const Item = require('../../models/Item');

router.get('/', (_req, res) => {
    Item.find()
    .then((items) => res.json(items) + res.send(items))
    .catch((_err) => res.status(404).json({ noitemfound: 'No item found'}));
})