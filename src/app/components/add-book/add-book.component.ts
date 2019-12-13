import { Component, OnInit } from '@angular/core';
import { BooksService } from 'src/app/services/books.service';
import { Book } from 'src/app/model/Book';
import { Router, NavigationEnd } from '@angular/router';
import { NotivicationService } from 'src/app/services/notivication.service';



@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {
  book: Book;

  constructor(private booksService: BooksService, private router : Router, private notivication:NotivicationService) {
    this.book = new Book();
  }

  ngOnInit() { }
  
  addBook(book: Book) {
    this.booksService.addBook(book).subscribe(data => {
      this.book = data;
      console.log(data);
      this.navigate();
      this.notivication.successAdd("tambah berhasil","tambah data");
      //this.notivication.successAdd("tambah berhasil","tambah data")
    });
    
  }
  
    navigate(){
      this.router.navigate(["/home"]);
      
      
    }
}
