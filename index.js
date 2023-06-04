const express = require('express')
	
const app = express()

app.get('/', (req, res)=> {
    res.send('Hello World 1234')
})

const PORT = 3000
app.listen(PORT,()=>{
    console.log('Server is running at port 3000')
})