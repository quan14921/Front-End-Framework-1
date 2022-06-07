import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usertype } from 'src/app/models/User';
import { UserService } from 'src/app/services/user.services';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit {
  user: any = {
  }
  constructor(private UserService: UserService , private router: Router) {  }

  ngOnInit(): void {

  }
  onSubmit() {
  
    this.UserService.singup(this.user).subscribe(data => {
      console.log('Thêm thành công');
      this.router.navigateByUrl('/signin');
    })
  }

}
