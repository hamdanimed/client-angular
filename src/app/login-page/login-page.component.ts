import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../service/login.service';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  username: string = '';
  password: string = '';
  constructor(private router:Router,  private loginService:LoginService){}


  login() {
    this.loginService.authenticate(this.username, this.password).subscribe(
      (response) => {
        // Handle the successful response, e.g., navigate to the profile page
        console.log("Success");
        // Assuming the response contains the token, adjust this accordingly
        const token = response;
        const constUsername = this.username;
        
        // Store the token in local storage
        localStorage.setItem('token', token);
        localStorage.setItem('username', constUsername);

        // Navigate to the profile page
        this.router.navigate(['home']);
      },
      (error) => {
        console.log(this.username + " " + this.password);
        // Handle the error, e.g., display an error message
        console.error('Error:', error);
      }
    );
  }

}
