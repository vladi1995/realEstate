import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { RealEstatesListComponent } from "./realEstates/real-estates-list/real-estates-list.component";
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
    { path: 'realEstateList',  component: RealEstatesListComponent,  resolve: [RealEstateResolverService], data: {animation: 'realEstateList'} },
    { path: 'realEstateList/new', component: RealEstateEditComponent, canActivate: [AuthGuard], data: {animation: 'realEstateListNew'} },
    { path: 'realEstateList/:id', component: RealEstateDetailsComponent, canActivate: [AuthGuard], resolve: [RealEstateResolverService], data: {animation: 'id'} },
    { path: 'realEstateList/:id/edit', component: RealEstateEditComponent, canActivate: [AuthGuard], resolve: [RealEstateResolverService], data: {animation: 'id-edit'} },
    { path: 'login', component: LoginComponent, data: {animation: 'login'} },
    { path: 'register', component: RegisterComponent, data: {animation: 'register'} },
    { path: 'about', component: AboutComponent, data: {animation: 'about'} },
    { path: '**', component: NotFoundComponent, data: {animation: 'not-found'} }
]; 

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule],
})
export class AppRoutingModule {

}