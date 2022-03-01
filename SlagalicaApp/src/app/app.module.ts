import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnagramComponent } from './components/anagram/anagram.component';
import { MyNumberComponent } from './components/my-number/my-number.component';
import { SymbolsComponent } from './components/symbols/symbols.component';
import { QuestionsComponent } from './components/questions/questions.component';
import { ConnectionsComponent } from './components/connections/connections.component';
import { AssociationsComponent } from './components/associations/associations.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    AnagramComponent,
    MyNumberComponent,
    SymbolsComponent,
    QuestionsComponent,
    ConnectionsComponent,
    AssociationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
