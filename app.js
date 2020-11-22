const express = require('express')
const birds = require('./birds')

const app = express()
const port = 3000

// app.get('/', (req, res) => res.send('Hello World!'))
app.use('/birds', birds)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))