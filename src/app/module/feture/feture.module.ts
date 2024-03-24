import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FetureComponent } from './components/feture.component';
import { HomeComponent } from './components/home/home.component';
import { MainCarouselComponent } from './components/home/main-carousel/main-carousel.component';
import { ProductSliderComponent } from './components/home/product-slider/product-slider.component';
import { HomeProductCardComponent } from './components/home/home-product-card/home-product-card.component';
import { ProductsComponent } from './components/products/products.component';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import {MatDividerModule} from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    FetureComponent,
    HomeComponent,
    MainCarouselComponent,
    ProductSliderComponent,
    HomeProductCardComponent,
    ProductsComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,//added by nilesh
    MatMenuModule, //added by nilesh
    MatDividerModule, //added by nilesh
    MatIconModule,  //added by nilesh
    MatCheckboxModule,//added by nilesh
    MatRadioModule,//added by nilesh
    SharedModule ////added by nilesh
  ],
  //added by nilesh
  exports:[
    FetureComponent,
    HomeComponent,
    ProductsComponent //added by nilesh
  ]
})
export class FetureModule { }
