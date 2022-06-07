import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.services';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  user:any = {}
  constructor(
    private userService: UserService,
    private router: Router
  ) { }
    onSignin() {
          this.userService.signIn(this.user).subscribe((data) => {
              localStorage.setItem("user", JSON.stringify(data));
              this.router.navigateByUrl('/products');
          })
    }
  ngOnInit(): void {
  }

}
