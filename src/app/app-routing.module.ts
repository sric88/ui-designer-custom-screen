import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DummyPageComponent } from './dummy-page/dummy-page.component';
import { environment } from '@env/environment';
const c = environment.path_url;
const p = import(`${c}`);

const routes: Routes = [
  {
    path: 'dummy-page',
    component: DummyPageComponent
  },
  {
    path: 'offer-screen',
    loadChildren: () => p.then(mod => mod.OfferScreenModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
