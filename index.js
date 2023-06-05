const express = require('express')
	
const app = express()

app.get('/', (req, res)=> {
    res.send('Hello World abcd')
})

app.get('/contact', (req, res)=> {
    res.send('<h1>Contact</h1>')
})

const PORT = 3000
app.listen(PORT,()=>{
    console.log('Server is running at port 3000')
})