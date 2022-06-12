import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/models/posts';
import { Usertype } from 'src/app/models/User';
import { IWork } from 'src/app/models/works';
import { PostsService } from 'src/app/services/posts.service';
import { UserService } from 'src/app/services/user.services';
import { WorkService } from 'src/app/services/works.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  Userlist! : Usertype[];
  PostsList!: IProduct[];
  Worklist!: IWork[];
  constructor(private postsService: PostsService, private workService : WorkService,private userService : UserService) {
    this.showPosts();
    this.showWork();
    this.showUser();
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
  showUser() {
    this.userService.getUserss().subscribe(data => {
      this.Userlist = data
      console.log(this.Userlist);
      
    })
  }


}
