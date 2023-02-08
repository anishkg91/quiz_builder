const express=require('express')
const router = express.Router()



router.use('/question',require('./question'))
router.use('/quiz',require('./quiz'))
router.use('/answer',require('./answer'))


module.exports=router