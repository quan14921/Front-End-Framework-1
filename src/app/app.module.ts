import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { LayoutsAdminComponent } from './layouts/layouts-admin/layouts-admin.component';
import { LayoutsWedsiteComponent } from './layouts/layouts-wedsite/layouts-wedsite.component';

import { HomeComponent } from './components/home/home.component';
import { BlogComponent } from './components/blog/blog.component';
import { WorksComponent } from './components/works/works.component';
import { FooterComponent } from './components/footer/footer.component';
import { ListComponent } from './components/admin/blog/list/list.component';
import { AddComponent } from './components/admin/blog/add/add.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LayoutsAdminComponent,
    LayoutsWedsiteComponent,
    HomeComponent,
    BlogComponent,
    WorksComponent,
    FooterComponent,
    ListComponent,
    AddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
