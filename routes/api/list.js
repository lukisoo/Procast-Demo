const express = require('express');
const router = express.router();

const List = require('../../models/List');

router.get('/', (_req, res) => {
    List.find()
    .then((lists) => res.json(lists) + res.send(lists))
    .catch((_err) => res.status(404).json({ noitemfound: 'No item found'}));
})