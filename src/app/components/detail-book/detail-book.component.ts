import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { BooksService } from 'src/app/services/books.service';
import { Book } from 'src/app/model/Book';


@Component({
  selector: 'app-detail-book',
  templateUrl: './detail-book.component.html',
  styleUrls: ['./detail-book.component.css']
})
export class DetailBookComponent implements OnInit {

  constructor(public activeModal : NgbActiveModal, private booksService: BooksService) { }

  ngOnInit() {
  }

  book:Book;

}
