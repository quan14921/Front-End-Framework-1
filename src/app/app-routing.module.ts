import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './components/admin/blog/add/add.component';
import { ListComponent } from './components/admin/blog/list/list.component';
import { AddworkComponent } from './components/admin/works/addwork/addwork.component';
import { ListworkComponent } from './components/admin/works/listwork/listwork.component';
import { BlogComponent } from './components/blog/blog.component';
import { HomeComponent } from './components/home/home.component';
import { WorksComponent } from './components/works/works.component';
import { LayoutsAdminComponent } from './layouts/layouts-admin/layouts-admin.component';
import { LayoutsWedsiteComponent } from './layouts/layouts-wedsite/layouts-wedsite.component';

import { AdminGuard } from './services/guards/admin.guard';


const routes: Routes = [
  {
    path: "", component: LayoutsWedsiteComponent , children:[
    {
      path: "", component: HomeComponent
    },
    {
      path: "Blogpage", component: BlogComponent
    },
    {
      path: "Workspage", component: WorksComponent
    },
    ]
  },
  
  {
    path: "admin", component: LayoutsAdminComponent ,children:[
      { path: "blog", children:[
        { path: "", component: ListComponent },
        { path: "add", component: AddComponent },
        { path: "edit/:id", component: AddComponent },
      ]  },
      {
        path: "work", children:[
        { path: "", component: ListworkComponent  },
        { path: "add", component: AddworkComponent },
        { path: "edit/:id", component: AddworkComponent },
        ]
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
