const express = require('express');

const router = express.Router();

const Note = require('../../models/Note');

// @route GET api/note
// @description get all note
// @access public
router.get('/', (_req, res) => {
    Note.find()
        .then((notes) => res.json(notes) + res.send(notes))
        .catch((_err) => res.status(404).json({ nonotefound: 'No Note found' }));
});


// @route GET api/notes/:id
// @description get single Note by id
// @access public
router.get('/:id', (req, res) => {
    Note.findById(req.params.id)
        .then((notes) => res.send(notes))
        .catch((_err) => res.status(404).json({ nonotefound: 'No Note found' }));
});

// @route GET api/notes
// @description add/save Note
// @access public
router.post('/', (req, res) => {
    Note.create(req.body)
        .then((_notes) => res.json({ msg: 'Note added successfully' }))
        .catch((_err) => res.status(404).json({ error: 'unable to add this Note' }));
});

// @route GET api/Note/:id
// @description update book
// @access public
router.put('/:id', (req, res) => {
    Note.findByIdAndUpdate(req.params.id, req.body)
        .then((_notes) => res.json({ msg: 'updated successfully' }))
        .catch((_err) => res.status(404).json({ error: 'No Note found' }));
});

// @route GET api/Note/:id
// @description delete by id
// @access public
router.delete('/:id', (req, res) => {
    Note.findByIdAndRemove(req.params.id, req.body)
        .then((_notes) => res.json({ msg: 'Evidence entry deleted successfully' }))
        .catch((_err) => res.status(404).json({ nonotefound: 'No evidence found' }));
});

module.exports = router;