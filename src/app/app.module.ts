import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RealEstateItemComponent } from './realEstates/real-estates-list/real-estate-item/real-estate-item.component';
import { RealEstateDetailsComponent } from './realEstates/real-estate-details/real-estate-details.component';
import { RealEstatesListComponent } from './realEstates/real-estates-list/real-estates-list.component';
import { WishListComponent } from './wishList/wishList.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    RealEstateItemComponent,
    RealEstateDetailsComponent,
    RealEstatesListComponent,
    WishListComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }