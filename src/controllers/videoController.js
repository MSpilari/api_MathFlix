const Video = require('../models/Video')
const Category = require('../models/Category')

module.exports = {
    async index(req, res){
        const allVideos = await Video.findAll()

        return res.json(allVideos)
    },
    async store(req, res) {
        const { 
            videoName, 
            videoDescription, 
            videoLink,
            videoImgLink,
            categoryId 
        } = req.body

        const soughtCategory = await Category.findByPk(categoryId)
        if(!soughtCategory){
           return res.status(400).json({error: 'Category not found !'})
        }
        
        const video = await Video.create({
            videoName, 
            videoDescription, 
            videoLink,
            videoImgLink,
            categoryId
        })

        return res.json(video)
    },
    async deleteOne(req, res){
        const { id } = req.params
        const soughtvideo = await Video.findByPk(id)
        if(!soughtvideo){
            return res.status(400).json({error:'Cannot find this video !'})
        }
        await Video.destroy({ where: {id} })
        return res.status(200).json({message:'Video deleted !'})
    },
    async deleteAll(req, res){
        await Video.destroy({
            truncate: true
        })
        return res.status(200).json({message: 'Table of videos cleared !'})
    }
}