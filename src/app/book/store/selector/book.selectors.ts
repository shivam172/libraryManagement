import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromBook from '../reducer/book.reducer'

export const selectBookState=createFeatureSelector<fromBook.BookState>(
    fromBook.bookFeatureKey,
);

export const selectBooks=createSelector(
    selectBookState,
    (state: fromBook.BookState) => state.books
);

export const filterBooks=(matchPattern:string)=>createSelector(
    selectBookState,
    (bookState)=>bookState.books.filter(book=>book.description.toLowerCase().includes(matchPattern) || book.name.toLowerCase().includes(matchPattern) || book.author.toLowerCase().includes(matchPattern) || book.count.toString()==matchPattern)
);
