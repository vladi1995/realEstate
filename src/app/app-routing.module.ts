import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { RealEstatesListComponent } from "./realEstates/real-estates-list/real-estates-list.component";
import { WishListComponent } from "./wishList/wishList.component";
import { HomePageComponent } from "./home-page/home-page.component";
import { RealEstateDetailsComponent } from "./realEstates/real-estate-details/real-estate-details.component";
import { RealEstateEditComponent } from "./realEstates/real-estate-edit/real-estate-edit.component";
import { RealEstateResolverService } from "./realEstates/realEstate-resolver.service";

const appRoutes: Routes = [
    { path: '', component: HomePageComponent },
    { path: 'realEstateList',  component: RealEstatesListComponent,  resolve: [RealEstateResolverService] },
    { path: 'realEstateList/new', component: RealEstateEditComponent },
    { path: 'realEstateList/:id', component: RealEstateDetailsComponent, resolve: [RealEstateResolverService] },
    { path: 'realEstateList/:id/edit', component: RealEstateEditComponent, resolve: [RealEstateResolverService] },
    { path: 'wishList', component: WishListComponent },
]; 

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule],
})
export class AppRoutingModule {

}