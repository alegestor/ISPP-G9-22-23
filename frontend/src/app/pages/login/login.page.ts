import { Component, OnInit } from "@angular/core";
import { UsersService } from "../../services/users.service";
import { HttpClient } from "@angular/common/http";
@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"],
})
export class LoginPage implements OnInit {
  form: any = {
    username: null,
    password: null
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];

  constructor(private uService: UsersService, private http: HttpClient) {}
  
  ngOnInit():void {
    if(this.uService.isLoggedIn()){
      this.isLoggedIn=true;
    }
  }

  logForm(): void{
    
    this.uService.login(this.form).subscribe({
      next: data => {
        console.log(data)
        this.uService.saveUser(data);
        this.isLoggedIn = true;
        this.reloadPage();
      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
        window.alert("Credenciales incorrectas");
    }}
    );
  }

  reloadPage():void{
    window.location.href="app/Tabs/Analytics"
  }
}