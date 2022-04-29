const { DataTypes } = require('sequelize');

const sequelizeModels = [
   {
      modelName: 'Post',
      attributes: {
         uuid: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
         },
         content: {
            type: DataTypes.STRING(2048),
            allowNull: false,
            defaultValue: 'MISSING_CONTENT',
            unique: false,
         },
         likes: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0,
            unique: false,
         },
         expirationDate: {
            type: DataTypes.DATE,
            allowNull: true,
            unique: false
         },
      },
      options: { tableName: 'posts' },
   },
];

module.exports = sequelizeModels;
