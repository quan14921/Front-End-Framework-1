import { Component, OnInit } from '@angular/core';
import { IWork } from 'src/app/models/works';
import { WorkService } from 'src/app/services/works.service';

@Component({
  selector: 'app-listwork',
  templateUrl: './listwork.component.html',
  styleUrls: ['./listwork.component.css']
})
export class ListworkComponent implements OnInit {
  Worklist!: IWork[];
  constructor(private workService : WorkService) {
    this.showPosts();
   }

  ngOnInit(): void {
  }
  showPosts() {
    this.workService.getWorks().subscribe(data => {
      this.Worklist = data
    })
  }
  onRemoveItem(id: number) {
    // call api xoa
    this.workService.removeWorks(id).subscribe(() => {
      // reRender
      this.Worklist = this.Worklist.filter(item => item.id !== id);
    });
  }

}
