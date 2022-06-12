import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './components/admin/blog/add/add.component';
import { AddcateblogComponent } from './components/admin/blog/addcateblog/addcateblog.component';
import { ListComponent } from './components/admin/blog/list/list.component';
import { ListcateblogComponent } from './components/admin/blog/listcateblog/listcateblog.component';
import { AddcateworkComponent } from './components/admin/works/addcatework/addcatework.component';
import { AddworkComponent } from './components/admin/works/addwork/addwork.component';
import { ListcateworkComponent } from './components/admin/works/listcatework/listcatework.component';
import { ListworkComponent } from './components/admin/works/listwork/listwork.component';
import { BlogComponent } from './components/blog/blog.component';
import { HomeComponent } from './components/home/home.component';
import { WorkdeatilComponent } from './components/workdeatil/workdeatil.component';
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
      path: "Workspage", children:[
        {path:"", component: WorksComponent},
        {path:":id", component: WorkdeatilComponent}
      ]
    },
    ]
  },
  
  {
    path: "admin", component: LayoutsAdminComponent ,children:[
      { path: "blog", children:[
        { path: "", component: ListComponent },
        { path: "add", component: AddComponent },
        { path: "edit/:id", component: AddComponent },
        {path:"cate", component: ListcateblogComponent},
        {path:"cate/add", component: AddcateblogComponent},
        {path:"cate/edit/:id", component: AddcateblogComponent},
      ]  },
      {
        path: "work", children:[
        { path: "", component: ListworkComponent  },
        { path: "add", component: AddworkComponent },
        { path: "edit/:id", component: AddworkComponent },
        {path:"cate", component: ListcateworkComponent},
        {path:"cate/add", component: AddcateworkComponent},
        {path:"cate/edit/:id", component: AddcateworkComponent},
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
