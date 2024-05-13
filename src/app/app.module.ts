import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header/header.component';
import { RecipeBookModule } from './recipe-book/recipe-book.module';
import { ShoppingListModule } from './shopping-list/shopping-list.module';

@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [BrowserModule, RecipeBookModule, ShoppingListModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
