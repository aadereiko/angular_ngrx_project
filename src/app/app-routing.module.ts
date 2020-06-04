import { TestMapComponent } from './test-map/test-map.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AgmCoreModule } from '@agm/core';

const routes: Routes = [
  { path: '', redirectTo: '/map', pathMatch: 'full' },
  { path: 'map', component: TestMapComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDYbBabZpxBQc-xcJAO1HTDGaBy7kMmuks',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
