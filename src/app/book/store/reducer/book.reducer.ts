import { Action, createReducer, on } from '@ngrx/store';
import { Book } from 'src/app/models/book';
import * as BookActions from '../action/book.actions';
import * as initialData from 'src/assets/books.json';
import { BookServiceService } from 'src/app/services/book-service.service';


export const bookFeatureKey = 'book';

export interface BookState {
  books: Book[];
}

export const initialState: BookState = { books: new BookServiceService().products };






export const bookReducer = createReducer(
  initialState,
  on(BookActions.addBook,
    //Adding a new book in store
    (state: BookState, { book }) =>
    ({
      ...state,
      books: [...state.books, book]
    })),
  on(BookActions.deleteBook,
    ////Delete a book in store by using bookId as reference. 
    (state: BookState, { payload }) =>
    ({
      ...state,
      books: state.books.filter((item) => item.id !== payload)
    })),
  on(BookActions.editBook,
    //Update a book's properties in store by using bookId as reference. 
    (state: BookState, { book }) =>
    ({
      ...state,
      books: state.books.map(
        (current) => current.id === book.id ? { ...current, description: book.description, name: book.name, author: book.author, count: book.count }
          : current
      )
    })),
);






export function reducer(state: BookState | undefined, action: Action): any {
  return bookReducer(state, action);
}

