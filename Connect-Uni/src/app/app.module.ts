import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { PostModule } from './components/post/post.module';
import { PostComponent } from './components/post/post.component';
import { MenuModule } from './components/menu/menu.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    PostModule,
    MenuModule,
    BrowserAnimationsModule,
    FormsModule,
    RouterModule,
    LoginComponent

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }