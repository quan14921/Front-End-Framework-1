import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IWork } from 'src/app/models/works';
import { WorkService } from 'src/app/services/works.service';

@Component({
  selector: 'app-addwork',
  templateUrl: './addwork.component.html',
  styleUrls: ['./addwork.component.css']
})
export class AddworkComponent implements OnInit {
  works: IWork = {
    title: "",
    image: "",
    createAt: "",
    categoryWorkId: "",
    short_desc: "",
    desc: ""
  }
  constructor(private workservice: WorkService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    if (id) {
      this.workservice.getidWorks(id).subscribe(data => {
        this.works = data
      })
    }
  }
  onSubmit() {
    const id = +this.route.snapshot.paramMap.get('id')!;
    if (id) {
      this.workservice.updateWorks(this.works).subscribe(data => {
        setTimeout(() => {
          // redirect về product list
          this.router.navigateByUrl('/admin/work');
        }, 200)
      })
    }
    this.workservice.addWorks(this.works).subscribe(data => {
      console.log('Thêm thành công');
      setTimeout(() => {
        // redirect về product list
        this.router.navigateByUrl('/admin/work');
      }, 200)
    })
  
  }


}
