import Post from './models/post.js'
import express from 'express'
import mongoose from 'mongoose'


const app = express()
const PORT = 5000
const dataBase = 'mongodb+srv://user:user@dbengflashcards.rtlggrj.mongodb.net/test'


app.use(express.json()) // обязательная штучка для обработки json

app.post('/post', async (req, res) => {
    try {
        const {author, title, content} = req.body // из тела запроса получаем данные в соответствии со схемой Post
        const post = await Post.create({author, title, content}) // создаем пост в базе данных

        res.status(200).json(post) // возвращает тот же пост
    } catch (error) {
        res.status(500).json(error)
    }
})


app.get('/', (req, res) => {
    res.status(200).json('text')
})



const StartServer = async () => {
    try {
        await mongoose.connect(dataBase)
        app.listen(PORT, () => console.log(`Server run on port : ${PORT}`))
    } catch (error) {
        console.log(error)
    }
}
StartServer() // закуриваем сервер

