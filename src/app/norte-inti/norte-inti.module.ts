import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { BannerMainComponent } from './components/banner-main/banner-main.component';
import { ServicesWorkingComponent } from './components/services-working/services-working.component';
import { CardServicesComponent } from './components/card-services/card-services.component';

@NgModule({
  declarations: [HomeComponent, BannerMainComponent, ServicesWorkingComponent, CardServicesComponent],
  imports: [
    CommonModule
  ],
  exports: [
    HomeComponent
  ],
  providers: [],
})
export class NorteIntiModule { }
