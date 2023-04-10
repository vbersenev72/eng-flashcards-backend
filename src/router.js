import Router from 'express'


const router = new Router()

router.post('/posts') // изменение списка постов
router.get('/posts') // получение всех постов
router.get('/post/:id') // получение конкретного поста по его id
router.delete('/post/:id') // удаление конкретного поста по его id
router.put('/posts') // обновление списка постов


module.exports = router