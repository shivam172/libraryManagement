import { Injectable } from '@angular/core';
import { Book } from '../models/book';
import { Subject } from 'rxjs';
import * as initialData from 'src/assets/books.json';

@Injectable({
  providedIn: 'root'
})
export class BookServiceService {
  private book = new Subject<Book>();

  bookValue = this.book.asObservable();

  initialBooks:Book[]=[]
  products: Book[] = (initialData as any).default;

  constructor() {
  }

  index = null;

  updateBook(newBook: Book, i) {
    this.index = i;
    this.book.next(newBook);
  }

  
}
