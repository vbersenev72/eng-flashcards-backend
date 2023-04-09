const { Router } = require('express')


const router = new Router()

router.get('/', (req, res) => {
    res.status(200).send('homepage')
})

module.exports = router