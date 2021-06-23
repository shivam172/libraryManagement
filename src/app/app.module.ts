import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { BookViewComponent } from './book/book-view/book-view.component';
import { BookAddComponent } from './book/book-add/book-add.component';
import { bookFeatureKey,reducer } from './book/store/reducer/book.reducer';
import { HeaderComponent } from './header/header.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    BookViewComponent,
    BookAddComponent,
    HeaderComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    StoreModule.forFeature(bookFeatureKey,reducer ),
    ReactiveFormsModule,
    FormsModule
  ],
  exports:[
    BookAddComponent,
    BookViewComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
