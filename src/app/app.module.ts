import { ToastrModule } from 'ngx-toastr';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BooksComponent } from './components/books/books.component';
import { HttpClientModule } from '@angular/common/http';
import { AddBookComponent } from './components/add-book/add-book.component';
 import {FormsModule} from"@angular/forms";
 import{NgbModule, NgbActiveModal} from"@ng-bootstrap/ng-bootstrap";
import { DetailBookComponent } from './components/detail-book/detail-book.component';
import { UpdateBookComponent } from './components/update-book/update-book.component';
import { UtamaComponent } from './components/utama/utama.component';
import { StudentsComponent } from './components/students/students.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BooksComponent,
    AddBookComponent,
    DetailBookComponent,
    UpdateBookComponent,
    UtamaComponent,
    StudentsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    BrowserAnimationsModule,
   ToastrModule.forRoot()
  ],
  providers: [NgbActiveModal],
entryComponents :[DetailBookComponent,
UpdateBookComponent
]
  ,
  bootstrap: [AppComponent]
})
export class AppModule { }
