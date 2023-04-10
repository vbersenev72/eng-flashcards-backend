import Post from './models/post.js'
import express from 'express'
import mongoose from 'mongoose'
import roter from './router.js'
import router from './router.js'

const app = express()
const PORT = 5000
const dataBase = 'mongodb+srv://user:user@dbengflashcards.rtlggrj.mongodb.net/test'


app.use(express.json()) // обязательная штучка для обработки json
app.use('/api', router)






const StartServer = async () => {
    try {
        await mongoose.connect(dataBase)
        app.listen(PORT, () => console.log(`Server run on port : ${PORT}`))
    } catch (error) {
        console.log(error)
    }
}
StartServer() // закуриваем сервер

