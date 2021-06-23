import { Component, OnInit, DoCheck } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, FormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Book } from 'src/app/models/book';
import { BookServiceService } from 'src/app/services/book-service.service';
import { addBook, deleteBook, editBook } from '../store/action/book.actions';
import { BookState } from '../store/reducer/book.reducer';
import * as uuid from 'uuid';

@Component({
  selector: 'app-book-add',
  templateUrl: './book-add.component.html',
  styleUrls: ['./book-add.component.css']
})
export class BookAddComponent implements OnInit, DoCheck {
  HeadingText = "Expand you Libarary, Add a Book";
  bookName = "";
  authorName = "";
  description = "";
  count = null;
  bookId = null;
  isEditing = false;

  constructor(private store: Store<BookState>, private formBuilder: FormBuilder, private bookService: BookServiceService) {
    bookService = new BookServiceService();

  }

  //Add a new book
  addBook(): void {
    const book = new Book();
    book.id = uuid.v4();
    book.name = this.bookName;
    book.author = this.authorName;
    book.description = this.description;
    book.count = this.count;
    this.store.dispatch(addBook(book));
    this.resetBook();
  }

  ngOnInit(): void {

  }


  ngDoCheck(): void {
    this.bookService.bookValue.subscribe(book => {
      this.HeadingText = "Edit book information";
      this.bookId = book.id;
      this.bookName = book.name;
      this.authorName = book.author;
      this.description = book.description;
      this.count = book.count;
      this.isEditing = true;
    })
  }

   //Update a book
  editBook() {
    const book1 = new Book();
    book1.id = this.bookId;
    book1.name = this.bookName;
    book1.author = this.authorName;
    book1.description = this.description;
    book1.count = this.count;
    this.store.dispatch(editBook(book1));
    this.resetBook();
  }

   //Delete a book
  removeBook() {
    this.store.dispatch(deleteBook(this.bookId));
    this.resetBook();
  }
  
  resetBook() {
    this.HeadingText = "Expand you Libarary, Add a Book";
    this.bookName = "";
    this.authorName = "";
    this.description = "";
    this.count = null;
    this.isEditing = false;
  }
}
