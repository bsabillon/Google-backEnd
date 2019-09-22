const domainMethods = require('../domainServices/bookDomainServices');

book = 
{
    tittle: "Harry Potter 1 and the Philosopher's Stone ",
    authors:"J K Rowling",
    publisher: "Bloomsbury Pub Limited",
    publishedDate: "1997",
    description:"Harry Potter is an ordinary boy who lives in a cupboard under the stairs at his Aunt Petunia and Uncle Vernon's house, which he thinks is normal for someone like him who's parents have been killed in a 'car crash'. He is bullied by them and his fat, spoilt cousin Dudley, and lives a very unremarkable life with only the odd hiccup (like his hair growing back overnight!) to cause him much to think about. That is until an owl turns up with a letter addressed to Harry and all hell breaks loose! He is literally rescued by a world where nothing is as it seems and magic lessons are the order of the day. Read and find out how Harry discovers his true heritage at Hogwarts School of Wizardry and Witchcraft, the reason behind his parents mysterious death, who is out to kill him, and how he uncovers the most amazing secret of all time, the fabled Philosopher's Stone! All this and muggles too. Now, what are they? ",
    industryIdentifiers: "0747532699",
    readingModes: "text",
    pageCount: "223",
    printType: "BOOK",
    categories: "Juvenile Fiction",
    averageRating: "4.5",
    ratingsCount: "19",
    maturityRating: "NOT_MATURE",
    allowAnonLogging: "false",
    contentVersion:"preview-1.0.0",
    imageLinks:"http://books.google.com/books/content?id=yZ1APgAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    previewLink: "http://books.google.hn/books?id=yZ1APgAACAAJ&dq=isbn:0747532699&hl=&cd=1&source=gbs_api",
    infoLink:"http://books.google.hn/books?id=yZ1APgAACAAJ&dq=isbn:0747532699&hl=&source=gbs_api",
    canonicalVolumeLink: "https://books.google.com/books/about/Harry_Potter_1_and_the_Philosopher_s_Sto.html?hl=&id=yZ1APgAACAAJ",
}
  
 
test('authors should contain only letters',()=>{
    expect(domainMethods.areAuthorsValid(book.authors)).toBe(true);
})

test('pageCount should contain only numbers',()=>{
    expect(domainMethods.isPageCountValid (book.pageCount)).toBe(true);
})

test('categories should contain only letters',()=>{
    expect(domainMethods.areCategoriesValid (book.categories)).toBe(true);
})

test('averageRating should contain only numbers',()=>{
    expect(domainMethods.isAverageRatingValid (book.averageRating)).toBe(true);
})

test('ratingsCount should contain only numbers',()=>{
    expect(domainMethods.isRatingsCountValid (book.ratingsCount)).toBe(true);
})

test('all input fields should be valid', () =>{
    return expect(domainMethods.isBookValid(book)).resolves.toBe('Valid');
 }); 
    

    
