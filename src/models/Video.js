const { Model, DataTypes } = require('sequelize')

class Video extends Model {
    static init(connection){
        super.init({
            videoName: DataTypes.STRING,
            videoLink: DataTypes.STRING,
            videoImgLink: DataTypes.STRING,
            videoDescription: DataTypes.STRING,
        }, {
            sequelize: connection,
            tableName: 'videos'
        })
    }

    static associate(models){
        this.belongsTo(models.Category, { foreignKey: 'categoryId', as: 'categoryVideos'})
    }
}

module.exports = Video