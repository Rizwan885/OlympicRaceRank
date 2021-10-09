const express = require('express');
require('../db/conn');
const MensRanking = require('../models/mens');

// Creating ROuter//
const router = new express.Router();
// Creating ROuter//

//Defining ROuter//

router.post('/mens', async (req, res) => {
  try {
    const addingMensRecords = new MensRanking(req.body);
    console.log(addingMensRecords);
    const result = await addingMensRecords.save();

    res.status(201).send(result);
  } catch (error) {
    res.status(400).send(error);
  }
});

//-----------------POst---------------//

//-----------------GET---------------//
router.get('/mens', async (req, res) => {
  try {
    const getMensRecords = await MensRanking.find().sort({ ranking: 1 });
    console.log(getMensRecords);

    res.status(200).send(getMensRecords);
  } catch (error) {
    res.status(400).send(error);
  }
});

//-----------------GET---------------//

//-----------------GET Individual---------------//
router.get('/mens/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const getMenRecord = await MensRanking.findById({ _id: id });
    console.log(getMenRecord);
    if (!getMenRecord) {
      res.status(404).send();
    } else {
      res.status(200).send(getMenRecord);
    }
  } catch (error) {
    res.status(500).send(error);
  }
});

//-----------------GET Individual---------------//

//-----------------GET Individual Patch ---------------//
router.patch('/mens/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const updateMenRecord = await MensRanking.findByIdAndUpdate(
      { _id: id },
      req.body,
      { new: true }
    );
    console.log(updateMenRecord);
    res.send(updateMenRecord);
  } catch (error) {
    res.send(error);
  }
});

//-----------------GET Individual Patch---------------//

//-----------------GET Individual Delete ---------------//
router.delete('/mens/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const deleteMenRecord = await MensRanking.findByIdAndDelete({ _id: id });
    console.log(deleteMenRecord);
    res.send(deleteMenRecord);
  } catch (error) {
    res.send(error);
  }
});

//-----------------GET Individual Delete---------------//

//Defining ROuter//

//Exporting ROuter//

module.exports = router;
//Exporting ROuter//
