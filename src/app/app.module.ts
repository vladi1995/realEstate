import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { RealEstateItemComponent } from './realEstates/real-estates-list/real-estate-item/real-estate-item.component';
import { RealEstateDetailsComponent } from './realEstates/real-estate-details/real-estate-details.component';
import { RealEstatesListComponent } from './realEstates/real-estates-list/real-estates-list.component';
import { AppRoutingModule } from './app-routing.module';

import { RealEstateEditComponent } from './realEstates/real-estate-edit/real-estate-edit.component';
import { RealEstateService } from './realEstates/realEstate.service';
import { LoadingSpinnerComponent } from './shared/loading-spinner/loading-spinner.component';
import { AuthInterceptor } from './auth/interceptors/auth-interceptor.service';
import { AuthModule } from './auth/auth.module';
import { CoreModule } from './core/core.module';
import { PagesModule } from './pages/pages.module';
import { HomePageComponent } from './home-page/home-page.component';
import { PaginationComponent } from './realEstates/pagination/pagination.component';

import { SearchBarService } from './home-page/searchBar.service';

@NgModule({
  declarations: [
    AppComponent,
    RealEstateItemComponent,
    RealEstateDetailsComponent,
    RealEstatesListComponent,
    HomePageComponent,
    RealEstateEditComponent,
    LoadingSpinnerComponent,
    PaginationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CoreModule,
    PagesModule,
    ReactiveFormsModule,
    HttpClientModule,
    AuthModule
  ],
  providers: [SearchBarService, RealEstateService, {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
