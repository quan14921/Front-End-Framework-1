import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/models/posts';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  PostsList!: IProduct[];
  constructor(private postsService: PostsService) { 
    this.showPosts();
  }

  ngOnInit(): void {
  }

  showPosts() {
    this.postsService.getPosts().subscribe(data => {
      this.PostsList = data
    })
  }

}
