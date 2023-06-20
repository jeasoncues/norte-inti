import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { BannerMainComponent } from './components/banner-main/banner-main.component';

@NgModule({
  declarations: [HomeComponent, BannerMainComponent],
  imports: [
    CommonModule
  ],
  exports: [
    HomeComponent
  ],
  providers: [],
})
export class NorteIntiModule { }
