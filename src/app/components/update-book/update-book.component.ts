import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { BooksService } from 'src/app/services/books.service';
import { Book } from 'src/app/model/Book';
import { NotivicationService } from 'src/app/services/notivication.service';





@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent implements OnInit {

  constructor( public activeModal : NgbActiveModal, private booksService: BooksService,private notivication: NotivicationService ) { }
book : Book = new Book;
  ngOnInit() {
  }
  updateBook(book : Book){
    this.booksService.updateBook(book).subscribe(data=>{
      console.log(data);
      this.activeModal.close('reload');
      this.notivication.successUpdate(book.id,"data berhasil diupdate dengan id=")

    })

  }
   close() {
    this.activeModal.dismiss()
    this.notivication.cancleUpdate("tidak jadi berubah",this.book.id)
  }
  
    //this.router.navigate(["/home"]);

  
}
