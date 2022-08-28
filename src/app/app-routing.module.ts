import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AchbalComponent } from './components/achbal/achbal.component';
import { C1Component } from './components/c1/c1.component';
import { FetyaneComponent } from './components/fetyane/fetyane.component';
import { HomeComponent } from './components/home/home.component';
import { MoutakademComponent } from './components/moutakadem/moutakadem.component';

const routes: Routes = [
  { path: 'c1', component: C1Component },
  { path: '', redirectTo: '/c1', pathMatch: 'full' },
  { path: 'fetyane', component: FetyaneComponent },
  { path: 'moutakadem', component: MoutakademComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
