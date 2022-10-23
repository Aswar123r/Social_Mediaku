const router = require('express').Router()
const Users = require('../controllers/UsersController')
const authenticationMiddleware = require('../middlewares/AuthenticationMiddleware')

router.post('/register', Users.Register)
router.post('/login', Users.Login)
router.use(authenticationMiddleware)
router.put('/', Users.Update)
router.delete('/', Users.Delete)

module.exports = router