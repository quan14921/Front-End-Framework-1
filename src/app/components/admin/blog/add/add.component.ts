import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from 'src/app/models/posts';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  posts:IProduct = {
    title: "",
    image: "",
    // createAt: "",
    categoryPostId: "",
    short_desc:"",
    desc:""
  }

  constructor(private postsService: PostsService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    if(id){
      this.postsService.getidPosts(id).subscribe(data => {
        this.posts = data
    })
  }

}

onSubmit() {
  const id = +this.route.snapshot.paramMap.get('id')!;
  if (id) {
    this.postsService.updatePosts(this.posts).subscribe(data => {
      setTimeout(() => {
        // redirect về product list
        this.router.navigateByUrl('/admin/blog');
      }, 2000)
    })
  }
  this.postsService.addPosts(this.posts).subscribe(data => {
    console.log('Thêm thành công');
    setTimeout(() => {
      // redirect về product list
      this.router.navigateByUrl('/admin/blog');
    }, 2000)
  })

}
}
