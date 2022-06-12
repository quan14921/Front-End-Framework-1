import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/models/posts';
import { IWork } from 'src/app/models/works';
import { PostsService } from 'src/app/services/posts.service';
import { WorkService } from 'src/app/services/works.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  PostsList!: IProduct[];
  Worklist!: IWork[];
  constructor(private postsService: PostsService, private workService : WorkService) {
    this.showPosts();
    this.showWork();
   }

  ngOnInit(): void {
  }

  showPosts() {
    this.postsService.getPolimit().subscribe(data => {
      this.PostsList = data
    })
  }
  showWork() {
    this.workService.getWolimit().subscribe(data => {
      this.Worklist = data
    })
  }


}
