import { Component, OnInit } from '@angular/core';
import { IWork } from 'src/app/models/works';
import { WorkService } from 'src/app/services/works.service';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.css']
})
export class WorksComponent implements OnInit {
  Worklisst! : IWork[];
  constructor(private workservice : WorkService) {
    this.showWork();
   }

  ngOnInit(): void {
  }

  showWork() {
    this.workservice.getWorks().subscribe(data => {
      this.Worklisst = data
    })
  }

}
