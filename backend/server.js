const express = require('express')
const Connection = require('./Config/db')
const productRouter = require('./Routes/product.route')
const app = express()
const PORT = process.env.PORT || 3005
app.use(express.json())

app.use('/api/products', productRouter)

// homepage route
app.get('/', (req, res)=>{
    res.status(200).send("Welcome to Backend API")
})

app.use((req, res)=>{
    res.status(404).send("404 Not Found")
})

app.listen(PORT, async ()=>{
    try {
        await Connection
        console.log(`server is running on Port : ${PORT} : and connected to database`)
    } catch (error) {
        console.log(error)
    }
})