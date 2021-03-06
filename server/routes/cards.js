/*jshint esversion:6 */

const express = require('express');
const router = express.Router();
const db = require('../models');
let Cards = db.Card;

router.route('/')
  .get ( (req, res) =>{ 
    Cards.findAll()
      .then( cards =>{
        console.log(cards);
        res.send(cards);
        // res.json(cards);
      });
  })

  .post( (req, res) =>{
    Cards.create({
      title : req.body.Title,
      priority: req.body.Priority,
      created_by: req.body.Created_by, 
      assigned_to: req.body.Assigned_by, 
      status: req.body.Status
    })
    .then((cards) =>{
      res.json(cards);
    });
})

router.route('/:id')
  .put((req,res) =>{
    Cards.update({
      title : req.body.title,
      priority: req.body.priority,
      created_by: req.body.created_by, 
      assigned_to: req.body.assigned_to,
      status: req.body.status
    },{
      where : {id:req.params.id}
    })
    .then((cards) =>{
      res.send('your card has been updated');
    })
  })
  .delete((req, res) =>{
    Cards.destroy({
      where: {id: req.params.id}
    })
    .then((cards) =>{
      res.send('you finished your task');
    })
  })


module.exports = router;