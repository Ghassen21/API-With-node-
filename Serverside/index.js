const express = require('express')
const app = express()
const parkings = require("./Parking")

/*app.get('/parkings', (req,res) => {
    res.send("Liste des parkings")
})*/
app.get('/parkings', (req,res) => {
    res.status(200).send(parkings)
})

app.get('/parkings/:id', (req,res) => {
    const id = parseInt(req.params.id)
    console.log("id",id)
    const parking = parkings.find(parking => parking.id === id)
    console.log("parking:",parking)
    res.status(200).json(parking)
})

app.listen(8080, () => {
    console.log('Server is listening on  port 8080.. ')
  })