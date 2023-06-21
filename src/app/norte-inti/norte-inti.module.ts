import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { BannerMainComponent } from './components/banner-main/banner-main.component';
import { ServicesWorkingComponent } from './components/services-working/services-working.component';

@NgModule({
  declarations: [HomeComponent, BannerMainComponent, ServicesWorkingComponent],
  imports: [
    CommonModule
  ],
  exports: [
    HomeComponent
  ],
  providers: [],
})
export class NorteIntiModule { }
