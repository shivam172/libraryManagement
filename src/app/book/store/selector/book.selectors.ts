import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromBook from '../reducer/book.reducer'

export const selectBookState=createFeatureSelector<fromBook.BookState>(
    fromBook.bookFeatureKey,
);

//Fetch all books to populate the view
export const selectBooks=createSelector(
    selectBookState,
    (state: fromBook.BookState) => state.books
);

//Search filter selector to filter books in accordance to passed paramter.
export const filterBooks=(matchPattern:string)=>createSelector(
    selectBookState,
    (bookState)=>bookState.books.filter(book=>book.description.toLowerCase().includes(matchPattern) || book.name.toLowerCase().includes(matchPattern) || book.author.toLowerCase().includes(matchPattern) || book.count.toString()==matchPattern)
);
