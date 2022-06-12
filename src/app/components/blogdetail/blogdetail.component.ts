import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/models/posts';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-blogdetail',
  templateUrl: './blogdetail.component.html',
  styleUrls: ['./blogdetail.component.css']
})
export class BlogdetailComponent implements OnInit {
  Bloglist!: IProduct;
  constructor(private blogservice: PostsService, private route: ActivatedRoute) {
    const id = this.route.snapshot.paramMap.get('id')!;
    this.blogservice.getidPosts(+id).subscribe(data => {
      this.Bloglist = data
    })
   }

  ngOnInit(): void {

  }

}
