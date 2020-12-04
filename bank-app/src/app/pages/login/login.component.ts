import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loading = false;

  constructor(private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  submitLogin(){
    this.loading = true;
    this.showNotification();
    console.log('user information has been submitted.');
    this.loading = false;

  }

  showNotification(){
    let options = {
      timeOut: 5000,
      closeMethod: 'fadeOut',
      closeEasing: 'swing',
      closeDuration: 1000
    }
    this.toastr.success('toaster is working fine now', 'title', options);
  }

}
