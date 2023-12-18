import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { PagenotfoundComponent } from './common/pagenotfound/pagenotfound.component';
import { BranchesComponent } from './components/branches/branches.component';
import { RestaurantsComponent } from './components/restaurants/restaurants.component';

const routes: Routes = [
  { path: "", redirectTo: "restaurants", pathMatch: "full" },
  {
    path: "restaurants", component: LayoutComponent, children: [
      { path: "", component: RestaurantsComponent },
      { path: "branch", component: BranchesComponent },
      { path: '**', component: PagenotfoundComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
