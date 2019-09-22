const express = require('express');
const Book = require('../model/book');
const bodyParser = require('body-parser');
const domainMethods = require('../domainServices/bookDomainServices');

var appServices = {

    addBook: function(request, response){
        domainMethods.isBookValid(request.body)
        .then( onResolved =>
            Book.create(
                request.body
             )
             .then(book=>{
                response
                .status(200)
                .send('Book added successfully');
                })
             .catch(error=>
                response.send("Error adding Book: "+ error))
            )    
            .catch(onError =>
                response.send("Error: "+ onError)
            )  
    },
    
    getBooks: function(request, response){
        Book.findAll()
        .then(books=>{
            response.json(books);
        })
        .catch((error)=>{
            response.send("Error: "+ error)
            })
        
    },

    getBookById: function(request, response){
        Book.findOne({
            where:{
                id: request.params.id,
            }
        })
        .then(book=>{
            response.json(book);
        })
        .catch((error)=>{
            response.send("Error: "+ error)
            })
        
    },

    getBookByName: function(request, response){
        Book.findOne({
            where:{
                name: request.params.name,
            }
        })
        .then(book=>{
            response.json(book);
        })
        .catch((error)=>{
            response.send("Error: "+ error)
            })
        
    },

    updateBook: function(request,response){
        Book.update(
            {
            tittle: request.body.tittle,
            authors: request.body.authors,
            publisher: request.body.publisher,
            publishedDate: request.body.publishedDate,
            description: request.body.description,
            industryIdentifiers: request.body.industryIdentifiers,
            readingModes: request.body.readingModes,
            pageCount: request.body.pageCount,
            printType: request.body.printType,
            categories: request.body.categories,
            averageRating: request.body.averageRating,
            ratingsCount:request.body.ratingsCount,
            maturityRating: request.body.maturityRating,
            allowAnonLogging: request.body.allowAnonLogging,
            contentVersion:request.body.contentVersion,
            imageLinks:request.body.imageLinks,
            previewLink:request.body.previewLink,
            infoLink:request.body.infoLink,
            canonicalVolumeLink: request.body.canonicalVolumeLink,
            },
            {where:{id: request.params.id } }
        )
        .then(book=>{
            response
            .status(200)
            .send('Book updated successfully!')
        })
        .catch(error=>
            response.send("Error: "+ error)
        )
    },


    deleteBook: function(request,response){
        Book.destroy({
            where: {
                id: request.params.id
            }
        })
        .then(book=>{
            response
            .status(200)
            .send('Book has been deleted successfully!')
        })
        .catch(error=>
            response.send("Error: "+error))
    },


    


}

module.exports= appServices;