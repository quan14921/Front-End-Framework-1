import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IWork } from 'src/app/models/works';
import { WorkService } from 'src/app/services/works.service';

@Component({
  selector: 'app-workdeatil',
  templateUrl: './workdeatil.component.html',
  styleUrls: ['./workdeatil.component.css']
})
export class WorkdeatilComponent implements OnInit {
  Worklist!: IWork;
  constructor(private wordservice: WorkService, private route: ActivatedRoute) {
    const id = this.route.snapshot.paramMap.get('id')!;
    this.wordservice.getidWorks(+id).subscribe(data => {
      this.Worklist = data
    })
  }

  ngOnInit(): void {
  }




}
