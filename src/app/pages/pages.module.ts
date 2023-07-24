import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AboutComponent,
    NotFoundComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule,
  ]
})
export class PagesModule { }
