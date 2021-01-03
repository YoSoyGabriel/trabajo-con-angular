import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'; 
import { NgModule } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button'; 
import {MatIconModule} from '@angular/material/icon';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { NgxPaginationModule } from 'ngx-pagination';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PostComponent } from './components/post/post.component';
import { CommentsComponent } from './components/post/comments/comments.component';
import { UserComponent } from './components/user/user.component'; 
import { UserDetalleComponent } from './components/user/user-detalle/user-detalle.component';
import { NewPostComponent } from './components/post/new-post/new-post.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReporteComponent } from './components/reporte/reporte.component';

@NgModule({
  declarations: [
    AppComponent, 
    PostComponent,
    CommentsComponent,
    UserComponent, 
    UserDetalleComponent, NewPostComponent, ReporteComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule, 
    NgxPaginationModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatIconModule,  
    AppRoutingModule, BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
