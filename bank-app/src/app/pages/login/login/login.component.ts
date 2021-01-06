import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loading = false;
  loginForm: FormGroup;

  constructor(
    private authService: AuthService,
    private toastr: ToastrService,
    private formBuilder: FormBuilder, 
  ){
    this.loginForm = this.formBuilder.group({
      email: [''],
      password: ['']
    })
   }

  ngOnInit(): void {
  }

  submitLogin(){
    this.loading = true;
    console.log('user information has been submitted.');
    let data = this.loginForm.value;
    console.log(data);
    // this.auth.postLogin(data).then(res =>{
    //   let count = res.success ? res.payload.length : 0;
    //   if(count > 0){
    //     this.showNotification(`${count} customers found`);

    //   }
    // })
    // this.loading = false;

  }

  showNotification(msg: string){
    let options = {
      timeOut: 5000,
      closeMethod: 'fadeOut',
      closeEasing: 'swing',
      closeDuration: 1000
    }
    this.toastr.success(msg, 'Notification', options);
  }

}