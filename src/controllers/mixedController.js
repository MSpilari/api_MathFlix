const Category = require('../models/Category')

module.exports = {
    async index(req, res){
        const CategoryAndVideos = await Category.findAll({
            include:{
                association: 'categoryVideos'
            }
        })
        return res.json(CategoryAndVideos)
    }
}