import { Component, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from 'src/app/models/book';
import { BookState } from '../store/reducer/book.reducer';
import {select,Store} from '@ngrx/store';
import {filterBooks, selectBooks} from '../store/selector/book.selectors'
import { BookServiceService } from 'src/app/services/book-service.service';
import { fromArray } from "rxjs/internal/observable/fromArray";

@Component({
  selector: 'app-book-view',
  templateUrl: './book-view.component.html',
  styleUrls: ['./book-view.component.css']
})
export class BookViewComponent implements OnInit {

  books$: Observable<Book[]>;
  searchVal = ''

  constructor(private store:Store<BookState>,private bookService:BookServiceService) { 
    this.books$=this.store.pipe(select(selectBooks));
  }

  ngOnInit(): void {
  }
  editBook(book,i){
    this.bookService.updateBook(book,i);
  }

  //search for books
  searchBook(){
    this.books$=this.store.pipe(select(filterBooks(this.searchVal.toLowerCase())));
  }

  //clear a search
  clear(){
    this.searchVal = '';
    this.searchBook()
  }
}