const Sequelize = require('sequelize');
const database = require('../config/database');

const Book = database.define('book', {

    title: {
        type:Sequelize.STRING
    },
    authors: {
        type:Sequelize.STRING
    },
    publisher: {
        type:Sequelize.STRING
    },
    publishedDate: {
        type:Sequelize.STRING
    },
    description: {
        type:Sequelize.STRING
    },
    industryIdentifiers: {
        type:Sequelize.STRING
    },
    readingModes: {
        type:Sequelize.STRING
    },
    pageCount: {
        type:Sequelize.INTEGER
    },
    printType: {
        type:Sequelize.STRING
    },
    categories: {
        type:Sequelize.STRING
    },
    averageRating: {
        type:Sequelize.DOUBLE
    },
    ratingsCount: {
        type:Sequelize.INTEGER
    },
    maturityRating: {
        type:Sequelize.STRING
    },
    allowAnonLogging: {
        type:Sequelize.BOOLEAN
    },
    contentVersion: {
        type:Sequelize.STRING
    },
    imageLinks: {
        type:Sequelize.STRING
    },
    previewLink: {
        type:Sequelize.DOUBLE
    },
    infoLink: {
        type:Sequelize.DOUBLE
    },
    canonicalVolumeLink: {
        type:Sequelize.DATE
    },
   
},
{
    freezeTableName: true,
}
)

module.exports = Book;