import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './components/admin/blog/add/add.component';
import { ListComponent } from './components/admin/blog/list/list.component';
import { BlogComponent } from './components/blog/blog.component';
import { HomeComponent } from './components/home/home.component';
import { WorksComponent } from './components/works/works.component';

import { AdminGuard } from './services/guards/admin.guard';


const routes: Routes = [
  {
    path: "", component: HomeComponent
  },
  {
    path: "Blogpage", component: BlogComponent
  },
  {
    path: "Workspage", component: WorksComponent
  },
  {
    path: "admin", children:[
      { path: "blog", children:[
        { path: "", component: ListComponent },
        { path: "add", component: AddComponent },
        { path: "edit/:id", component: AddComponent },
      ]  },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
