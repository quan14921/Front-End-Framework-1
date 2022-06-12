import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ICateWork } from 'src/app/models/categoriesProjects';
import { CateWorkService } from 'src/app/services/catework.service';

@Component({
  selector: 'app-addcatework',
  templateUrl: './addcatework.component.html',
  styleUrls: ['./addcatework.component.css']
})
export class AddcateworkComponent implements OnInit {
  Catework:ICateWork = {
    name: ""
  }
  constructor(private cateWorkservice : CateWorkService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    if(id){
      this.cateWorkservice.getidPosts(id).subscribe(data => {
        this.Catework = data
    })
  }
  }
  onSubmit() {
    const id = +this.route.snapshot.paramMap.get('id')!;
    if (id) {
      this.cateWorkservice.updatePosts(this.Catework).subscribe(data => {
        setTimeout(() => {
          // redirect về product list
          this.router.navigateByUrl('/admin/work/cate');
        }, 200)
      })
    }
    this.cateWorkservice.addPosts(this.Catework).subscribe(data => {
      console.log('Thêm thành công');
      setTimeout(() => {
        // redirect về product list
        this.router.navigateByUrl('/admin/work/cate');
      }, 200)
    })
  
  }


}
