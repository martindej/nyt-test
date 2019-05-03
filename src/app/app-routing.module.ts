import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainPageComponent } from './main-page/main-page.component';
import { DetailsPageComponent } from './details-page/details-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'mainPage', pathMatch: 'full' },
  { path: 'mainPage', component: MainPageComponent },
  { path: 'detailsPage', component: DetailsPageComponent }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
