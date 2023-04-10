import Router from 'express'
import PostController from './models/postController.js' // Контроллер для функций всех эндпоинтов


const router = new Router()

// Ниже описаны все эндпоинты приложения

router.post('/posts', PostController.createPost) // изменение списка постов

router.get('/posts', PostController.getPosts) // получение всех постов

router.get('/post/:id', PostController.getPost) // получение конкретного поста по его id

router.delete('/post/:id') // удаление конкретного поста по его id

router.put('/posts') // обновление списка постов


export default router