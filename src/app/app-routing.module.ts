import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddBookComponent } from './components/add-book/add-book.component';
import { BooksComponent } from './components/books/books.component';
import { UtamaComponent } from './components/utama/utama.component';
import { StudentsComponent } from './components/students/students.component';




const routes: Routes = [
  {
    path: "home",
    component: BooksComponent
  },
  {
    path: "add",
    component: AddBookComponent
  },
  {
    path: "utama",
    component: UtamaComponent
  },
  {
    path: "students",
    component: StudentsComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
