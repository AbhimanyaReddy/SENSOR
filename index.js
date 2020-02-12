const express = require('express')
const app = express()
const port = process.env.PORT || 3000
app.use(express.static('frontend'))
app.get('/', (req, res) => res.sendFile(__dirname+"/frontend/HTML/home.html"))
var student = {}
student.name = "Being Zero"
student.college="VNRVJIET"
student.regno="112323232"
app.get('/data', (req, res)=> res.json(student));


app.listen(port, () => console.log(`Example app listening on port ${port}!`))
