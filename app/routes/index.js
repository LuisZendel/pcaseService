const express = require('express')
const router = express.Router()
const fs = require('fs')

const PathRouter = `${__dirname}`

const removeExtension = (filename) =>{
    return filename.split('.').shift()
}

fs.readdirSync(PathRouter).filter(file => {
    const fileWithoutEx = removeExtension(file)
    const skip  = ['index'].includes(fileWithoutEx)
    if(!skip){
        router.use(`/${fileWithoutEx}`, require(`./${fileWithoutEx}`))
        console.log('---->cargar ', fileWithoutEx)
    }
    console.log(file)
})


module.exports = router