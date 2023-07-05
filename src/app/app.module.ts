import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { RealEstateItemComponent } from './realEstates/real-estates-list/real-estate-item/real-estate-item.component';
import { RealEstateDetailsComponent } from './realEstates/real-estate-details/real-estate-details.component';
import { RealEstatesListComponent } from './realEstates/real-estates-list/real-estates-list.component';
import { WishListComponent } from './wishList/wishList.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { AppRoutingModule } from './app-routing.module';
import { HomePageComponent } from './home-page/home-page.component';
import { RealEstateEditComponent } from './realEstates/real-estate-edit/real-estate-edit.component';
import { RealEstateService } from './realEstates/realEstate.service';

@NgModule({
  declarations: [
    AppComponent,
    RealEstateItemComponent,
    RealEstateDetailsComponent,
    RealEstatesListComponent,
    WishListComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    HomePageComponent,
    RealEstateEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [RealEstateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
