import { Component, OnInit } from '@angular/core';
import { ICateWork } from 'src/app/models/categoriesProjects';
import { CateWorkService } from 'src/app/services/catework.service';

@Component({
  selector: 'app-listcatework',
  templateUrl: './listcatework.component.html',
  styleUrls: ['./listcatework.component.css']
})
export class ListcateworkComponent implements OnInit {
  cateList!: ICateWork[];
  constructor(private cateWorkservice : CateWorkService) {
    this.showPosts();
   }

  ngOnInit(): void {
  }
  showPosts() {
    this.cateWorkservice.getPosts().subscribe(data => {
      this.cateList = data
    })
  }
  onRemoveItem(id: number) {
    // call api xoa
    this.cateWorkservice.removePosts(id).subscribe(() => {
      // reRender
      this.cateList = this.cateList.filter(item => item.id !== id);
    });
  }


}
