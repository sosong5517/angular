import { Component, OnInit } from '@angular/core';
import { BooksService } from '../../services/books.service';
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";

import { Book } from 'src/app/model/Book';
import { DetailBookComponent } from '../detail-book/detail-book.component';
import { UpdateBookComponent } from '../update-book/update-book.component';
import { NotivicationService } from 'src/app/services/notivication.service';


@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  book: Book[];
  buku: Book;


  constructor(private booksService: BooksService, private modalService: NgbModal,private notivication: NotivicationService) { }

  ngOnInit() {
    this.getAll();
  }
  getAll() {
    this.booksService.getAll().subscribe(data => {
      this.book = data['data'];
      console.log(this.book)
      
    });
  }
  openModal(id: String) {
    this.detailBook(id);
  }

  openModalUpdate(id: String) {
    this.showUpdate(id);

  }




  deleteBook(id: String) {
    var r = confirm("yakin mau dihapus!?");
    if (r == true){
      this.booksService.deleteBook(id).subscribe(data => {
        this.book;
        this.getAll();
        this.notivication.successDelete("data dengan id="+id, "telah berhasil dihapus")
      })
    }else {
      this.notivication.successDelete("data dengan id="+id, " pressed Cancel")
      //alert("You pressed Cancel");
    }
  }
  detailBook(id: String) {
    this.booksService.detailBook(id).subscribe(data => {
       //this.book = data;
      this.buku = data['code'];
      let modalRef = this.modalService.open(DetailBookComponent);
      modalRef.componentInstance.book = this.buku;
      console.log(data)
    })
  }

  showUpdate(id: String) {
    this.booksService.detailBook(id).subscribe(data => {
      this.buku = data['code'];
      let modalRef = this.modalService.open(UpdateBookComponent);
      modalRef.componentInstance.book = this.buku;
      modalRef.result.then(value => {
        if (value == 'reload') {
          this.getAll();

        }
      })
    })
  }
}
