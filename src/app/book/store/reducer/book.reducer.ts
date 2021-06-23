import { Action, createReducer, on } from '@ngrx/store';
import { Book } from 'src/app/models/book';
import * as BookActions from '../action/book.actions';
import * as initialData from 'src/assets/books.json';
import { BookServiceService } from 'src/app/services/book-service.service';


export const bookFeatureKey = 'book';

export interface BookState {
  books: Book[];
}

export const initialState: BookState = {books:new BookServiceService().products};
// {
//   books: [{
//     "id": 0,
//     "name": "Eloquent JavaScript, Second Edition",
//     "author": "Marijn Haverbeke",
//     "count": 472,
//     "description": "JavaScript lies at the heart of almost every modern web application, from social apps to the newest browser-based games. Though simple for beginners to pick up and play with, JavaScript is a flexible, complex language that you can use to build full-scale applications."
//   },
//   {
//     "id": 1,
//     "name": "Learning JavaScript Design Patterns",
//     "author": "Addy Osmani",
//     "count": 254,
//     "description": "With Learning JavaScript Design Patterns, you'll learn how to write beautiful, structured, and maintainable JavaScript by applying classical and modern design patterns to the language. If you want to keep your code efficient, more manageable, and up-to-date with the latest best practices, this book is for you."
//   },
//   {
//     "id": 2,
//     "name": "Speaking JavaScript",
//     "author": "Axel Rauschmayer",
//     "count": 460,
//     "description": "Like it or not, JavaScript is everywhere these days-from browser to server to mobile-and now you, too, need to learn the language or dive deeper than you have. This concise book guides you into and through JavaScript, written by a veteran programmer who once found himself in the same position."
//   }]

// };






export const bookReducer = createReducer(
  initialState,
  on(BookActions.addBook,
    (state: BookState, { book }) =>
    ({
      ...state,
      books: [...state.books, book]
    })),
  on(BookActions.deleteBook,
    (state: BookState, { payload }) =>
    ({
      ...state,
      books: state.books.filter((item) => item.id !== payload)
    })),
  on(BookActions.editBook,
    (state: BookState, { book }) =>
    ({
      ...state,
      books: state.books.map(
        (current) => current.id === book.id ? {...current, description: book.description,name:book.name, author:book.author, count:book.count }
                                : current
      )
    })),
    );






export function reducer(state: BookState | undefined, action: Action): any {
  return bookReducer(state, action);
}

