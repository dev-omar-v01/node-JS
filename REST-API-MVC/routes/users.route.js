//import controller
const { getUser,createUser, updateUser,deleteUser} = require('../controllers/users.controller');
const router = require('express').Router();



//user all route write
router.get('/',getUser);
router.post('/',createUser);
router.put('/:id',updateUser);
router.delete('/:id',deleteUser);




module.exports = router;