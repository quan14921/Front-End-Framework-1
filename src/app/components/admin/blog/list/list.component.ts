import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/models/posts';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
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
  onRemoveItem(id: number) {
    // call api xoa
    this.postsService.removePosts(id).subscribe(() => {
      // reRender
      this.PostsList = this.PostsList.filter(item => item.id !== id);
    });
  }

}
