import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompetitionsComponent } from './competitions/competitions.component';
import { CompetitionItemComponent } from './competitions/card/card.component';
import { UserComponent } from './competitions/user/user.component';
import { ItemComponent } from './competitions/card/item/item.component';

@NgModule({
  declarations: [
    AppComponent,
    CompetitionsComponent,
    CompetitionItemComponent,
    UserComponent,
    ItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
