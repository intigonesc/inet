import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { LoginService } from 'src/app/services/auth/login.service';
import { LoginRequest } from 'src/app/services/auth/loginRequest';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginError:string=""
  loginForm =this.FormBuilder.group ({
    email:["" ,[Validators.required,Validators.email]],
    password:["",Validators.required],
  })

  constructor(private FormBuilder:FormBuilder, private router:Router, private loginService: LoginService  ) { }

  ngOnInit(): void {
    
  }
  
  login(){ 
    if(this.loginForm.valid) {
      this.loginService.login(this.loginForm.value as LoginRequest).subscribe({ 
        next:(userData) =>  {
          console.log(userData);
        },
        error: (errorData) =>  {  
          this.loginError=errorData;

        },
          complete:() =>  {
            console.info("Login completo");
          }

      })
      this.router.navigateByUrl("/dashboard");
      this.loginForm.reset();
     }

     else{ 
      this.loginForm.markAllAsTouched();
  

     }
    
  }
  
}

 