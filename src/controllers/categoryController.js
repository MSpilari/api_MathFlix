const Category = require('../models/Category')

module.exports = {
    async index(req, res){
        const allCategories = await Category.findAll()

        return res.json(allCategories)
    },
    async store(req, res) {
        const { 
            categoryName, 
            categoryDescription, 
            categoryColor 
        } = req.body
        
        const categoryExists = await Category.findOne({
            where: {
                categoryName
            }
        })
        
        if(categoryExists){
           return res.status(400).json({error: 'This category already exists !'})
        }  

        const category = await Category.create({
            categoryName,
            categoryDescription,
            categoryColor
        })

        return res.json(category)
    },
    async deleteOne(req, res){
        const { id } = req.params
        const soughtCategory = await Category.findByPk(id)
        if(!soughtCategory){
            return res.status(400).json({error:'Cannot find this category !'})
        }
        await Category.destroy({ where: {id} })
        return res.status(200).json({message:'Category deleted !'})
    },
    async deleteAll(req, res){
        await Category.destroy({
            truncate: true
        })
        return res.status(200).json({message: 'Table of categories cleared !'})
    }
}