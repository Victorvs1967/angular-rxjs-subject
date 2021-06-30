import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PostsComponent } from './components/posts/posts.component';
import { PostsHeaderComponent } from './components/posts-header/posts-header.component';
import { CreatePostComponent } from './components/create-post/create-post.component';
import { MaterialUIModule } from './modules/material-ui.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    PostsHeaderComponent,
    CreatePostComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MaterialUIModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
