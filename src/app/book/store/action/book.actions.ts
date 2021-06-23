import { createAction, props } from '@ngrx/store';
import { Book } from 'src/app/models/book';

export const addBook = createAction(
  '[Book] Add Books',
  (book:Book)=>({book})
);

export const editBook = createAction(
  '[Book] Edit Books',
  (book:Book)=>({book})
);

export const deleteBook=createAction(
  '[Book] Delete Books',
  (payload:number)=>({payload})
)




