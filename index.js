const express = require('express')
	
const app = express()

app.get('/', (req, res)=> {
    res.send('<h1>Hello World 1234</h1>')
})

app.get('/about', (req, res)=> {
    res.send('<h1>about</h1>')
})

const PORT = 3000
app.listen(PORT,()=>{
    console.log('Server is running at port 3000')
})