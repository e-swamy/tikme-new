import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule, NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { PagenotfoundComponent } from './common/pagenotfound/pagenotfound.component';
import { BranchJumbotronComponent } from './common/branch-jumbotron/branch-jumbotron.component';
import { HeroSliderComponent } from './common/hero-slider/hero-slider.component';
import { BranchesComponent } from './components/branches/branches.component';
import { RestaurantsComponent } from './components/restaurants/restaurants.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    PagenotfoundComponent,
    BranchJumbotronComponent,
    HeroSliderComponent,
    BranchesComponent,
    RestaurantsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
    NgbCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
