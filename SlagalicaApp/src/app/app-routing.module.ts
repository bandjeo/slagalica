import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnagramComponent } from './components/anagram/anagram.component';
import { AssociationsComponent } from './components/associations/associations.component';
import { CongratsComponent } from './components/congrats/congrats.component';
import { ConnectionsComponent } from './components/connections/connections.component';
import { MyNumberComponent } from './components/my-number/my-number.component';
import { QuestionsComponent } from './components/questions/questions.component';
import { SymbolsComponent } from './components/symbols/symbols.component';

const routes: Routes = [
  { path: 'anagram', component: AnagramComponent },
  { path: 'numbers', component: MyNumberComponent },
  { path: 'symbols', component: SymbolsComponent },
  { path: 'associations', component: AssociationsComponent },
  { path: 'connections', component: ConnectionsComponent },
  { path: 'questions', component: QuestionsComponent },
  { path: 'congrats', component: CongratsComponent },
  { path: '', redirectTo: 'anagram', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
