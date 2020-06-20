import { ChartsComponent } from './components/charts/charts.component';
import { ContactComponent } from './components/contact/contact.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ChartsComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: 'chart',
    component: ChartsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
