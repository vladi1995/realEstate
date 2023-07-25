import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { RealEstatesListComponent } from "./realEstates/real-estates-list/real-estates-list.component";
import { WishListComponent } from "./wishList/wishList.component";
import { RealEstateDetailsComponent } from "./realEstates/real-estate-details/real-estate-details.component";
import { RealEstateEditComponent } from "./realEstates/real-estate-edit/real-estate-edit.component";
import { RealEstateResolverService } from "./realEstates/realEstate-resolver.service";
import { AuthGuard } from "./auth/guards/auth.guard";
import { LoginComponent } from "./auth/login/login.component";
import { RegisterComponent } from "./auth/register/register.component";
import { AboutComponent } from "./pages/about/about.component";
import { NotFoundComponent } from "./pages/not-found/not-found.component";
import { HomePageComponent } from "./home-page/home-page.component";

const appRoutes: Routes = [
    { path: '', component: HomePageComponent },
    { path: 'realEstateList',  component: RealEstatesListComponent, canActivate: [AuthGuard],  resolve: [RealEstateResolverService] },
    { path: 'realEstateList/new', component: RealEstateEditComponent },
    { path: 'realEstateList/:id', component: RealEstateDetailsComponent, canActivate: [AuthGuard], resolve: [RealEstateResolverService] },
    { path: 'realEstateList/:id/edit', component: RealEstateEditComponent, canActivate: [AuthGuard], resolve: [RealEstateResolverService] },
    { path: 'wishList', component: WishListComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'about', component: AboutComponent },
    { path: '**', component: NotFoundComponent }
]; 

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule],
})
export class AppRoutingModule {

}