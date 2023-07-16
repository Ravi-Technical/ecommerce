import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/@core/user.service';
import { userSignUp } from 'src/app/data-type';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  ngOnInit(): void {
  }

}
