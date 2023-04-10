import Post from './post.js'

class PostController {
    async createPost(req, res) { // Добавление поста
            try {
                const {author, title, content} = req.body // из тела запроса получаем данные в соответствии со схемой Post
                const post = await Post.create({author, title, content}) // создаем пост в базе данных

                res.status(200).json(post) // возвращает тот же пост
            } catch (error) {
                res.status(500).json(error)
            }
    }


    async getPost(req, res) { // Получение всех постов
        try {

        } catch (error) {
            res.status(500).json(error)
        }
    }


    async getPosts(req, res) { // Получение отдельного поста
        try {
            res.status(200).json('посты')
        } catch (error) {
            res.status(500).json(error)
        }
    }
}

export default new PostController()