import { Component, OnInit } from '@angular/core';
import { ICatePosst } from 'src/app/models/categoriesPosts';
import { CatepostsService } from 'src/app/services/cateblog.service';

@Component({
  selector: 'app-listcateblog',
  templateUrl: './listcateblog.component.html',
  styleUrls: ['./listcateblog.component.css']
})
export class ListcateblogComponent implements OnInit {
  cateList! : ICatePosst[];
  constructor(private catePostservice : CatepostsService) {
    this.showPosts();
   }

  ngOnInit(): void {
  }
  showPosts() {
    this.catePostservice.getPosts().subscribe(data => {
      this.cateList = data
    })
  }
  onRemoveItem(id: number) {
    // call api xoa
    this.catePostservice.removePosts(id).subscribe(() => {
      // reRender
      this.cateList = this.cateList.filter(item => item.id !== id);
    });
  }


}
