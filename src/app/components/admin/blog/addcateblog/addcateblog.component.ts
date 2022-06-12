import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ICatePosst } from 'src/app/models/categoriesPosts';
import { CatepostsService } from 'src/app/services/cateblog.service';

@Component({
  selector: 'app-addcateblog',
  templateUrl: './addcateblog.component.html',
  styleUrls: ['./addcateblog.component.css']
})
export class AddcateblogComponent implements OnInit {
  Cateposts:ICatePosst = {
    name: ""
  }
  constructor(private catepostsService: CatepostsService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    if(id){
      this.catepostsService.getidPosts(id).subscribe(data => {
        this.Cateposts = data
    })
  }
  }

  onSubmit() {
    const id = +this.route.snapshot.paramMap.get('id')!;
    if (id) {
      this.catepostsService.updatePosts(this.Cateposts).subscribe(data => {
        setTimeout(() => {
          // redirect về product list
          this.router.navigateByUrl('/admin/blog/cate');
        }, 200)
      })
    }
    this.catepostsService.addPosts(this.Cateposts).subscribe(data => {
      console.log('Thêm thành công');
      setTimeout(() => {
        // redirect về product list
        this.router.navigateByUrl('/admin/blog/cate');
      }, 200)
    })
  
  }

}
