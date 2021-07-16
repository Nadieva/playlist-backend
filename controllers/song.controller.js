const db = require("../models");
const Song = db.songs;


exports.create = (req, res) => {
    if (!req.body.title) {
      res.status(400).send({ message: "Title is missing!" });
      return;
    } else  if (!req.body.artist) {
      res.status(400).send({ message: "Artist is missing!" });
      return;
    } else  if (!req.body.gender) {
      res.status(400).send({ message: "Gender is missing!" });
      return;
    } 
  
    const song = new Song({
      title: req.body.title,
      artist: req.body.artist,
      gender: req.body.gender,
    });

      song.save()
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Error occurred while creating song."
        });
      });
  };

exports.findAll = (req, res) => {

    Song.find()
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Error occurred while retrieving songs."
        });
      });
  };

  exports.findOne = (req, res) => {
    const id = req.params.id;
  
    Song.findById(id)
      .then(data => {
        if (!data)
          res.status(404).send({ message: `Song #${id} not found` });
        else res.send(data);
      })
      .catch(err => {
        res
          .status(500)
          .send({ message: `Error while retrieving the song #${id}`});
      });
  };

exports.update = (req, res) => {
    if (!req.body) {
      return res.status(400).send({
        message: "Data to update can not be empty!"
      });
    }
  
    const id = req.params.id;
  
    Song.findByIdAndUpdate(id, req.body)
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot update the song #${id}! It may not be found.`
          });
        } else res.send({ message: "Song was updated successfully." });
      })
      .catch(err => {
        res.status(500).send({
          message: `Error while updating the song #${id}`
        });
      });
  };

exports.delete = (req, res) => {
    const id = req.params.id;
  
    Song.findByIdAndRemove(id)
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot delete the song #${id}! It may not be found.`
          });
        } else {
          res.send({
            message: "Song was deleted successfully!"
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: `Cannot update the song #${id}!`
        });
      });
  };