const express = require('express');
const router = express.Router();
const db = require('../config/database');
const Book = require('../model/book');
const bodyParser = require('body-parser');
var containsOnlyStrings = /^[A-Za-z_ ]+$/; 
var containsOnlyNumbers = /^[0-9]/;


var domainMethods = {
   areAuthorsValid: (authors)=>{
      return (containsOnlyStrings.test(authors))
   }, 

   isPageCountValid (pageCount){
      return (containsOnlyNumbers.test(pageCount))
   },

   areCategoriesValid (categories){
    return (containsOnlyStrings.test(categories))
   },

   isAverageRatingValid (averageRating){
    return (containsOnlyNumbers.test(averageRating))
   },
  
   isRatingsCountValid (ratingsCount){
    return (containsOnlyNumbers.test(ratingsCount))
   },

    isBookValid : (book) => {
        return new Promise((resolve, reject) => {
           if(domainMethods.areAuthorsValid(book.authors)&&
              domainMethods.isPageCountValid(book.pageCount)&&
              domainMethods.areCategoriesValid(book.categories)&&
              domainMethods.isAverageRatingValid(book.averageRating)&&
              domainMethods.isRatingsCountValid(book.ratingsCount)
               ) 
            {
                resolve("Valid");
            }else{
                
                reject("Invalid");
            }
        })
    },
  
}

module.exports= domainMethods;