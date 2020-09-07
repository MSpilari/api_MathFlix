const { Model, DataTypes } = require('sequelize')

class Category extends Model {
    static init(connection){
        super.init({
            categoryName: DataTypes.STRING,
            categoryDescription: DataTypes.STRING,
            categoryColor: DataTypes.STRING
        }, {
            sequelize: connection,
            tableName: 'categories'
        })
    }
    static associate(models){
        this.hasMany(models.Video, { foreignKey: 'categoryId', as: 'categoryVideos'})
    }
}

module.exports = Category
