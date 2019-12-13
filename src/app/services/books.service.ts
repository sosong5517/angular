import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {  Observable } from 'rxjs';
import{Book} from"../model/Book";


@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor( private http:HttpClient) { }
  url="http://localhost:3000/books/";
  getAll():Observable<Book[]>{
    return this.http.get<Book[]>(this.url);

  }
  addBook(book:Book): Observable<Book>{
    return this.http.post<Book>(this.url,book);
  }
  deleteBook(id:String): Observable<Book>{
    return this.http.delete<Book>(this.url+id);

  }
  detailBook( id :String):Observable<Book>{
    return this.http.get<Book>(this.url+id);
  }
    updateBook(book : Book):Observable<Book>{
      return this.http.put<Book>(this.url+book.id,book);

  }
}
