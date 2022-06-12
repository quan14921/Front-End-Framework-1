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
import { HeaderAdminComponent } from './components/header-admin/header-admin.component';
import { ListworkComponent } from './components/admin/works/listwork/listwork.component';
import { AddworkComponent } from './components/admin/works/addwork/addwork.component';
import { ListcateblogComponent } from './components/admin/blog/listcateblog/listcateblog.component';
import { AddcateblogComponent } from './components/admin/blog/addcateblog/addcateblog.component';
import { ListcateworkComponent } from './components/admin/works/listcatework/listcatework.component';
import { AddcateworkComponent } from './components/admin/works/addcatework/addcatework.component';
import { WorkdeatilComponent } from './components/workdeatil/workdeatil.component';
import { BlogdetailComponent } from './components/blogdetail/blogdetail.component';

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
    AddComponent,
    HeaderAdminComponent,
    ListworkComponent,
    AddworkComponent,
    ListcateblogComponent,
    AddcateblogComponent,
    ListcateworkComponent,
    AddcateworkComponent,
    WorkdeatilComponent,
    BlogdetailComponent
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
