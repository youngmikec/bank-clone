import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
// import { ApiService } from './api.service';
// import { from } from 'rxjs';

@Injectable({
    providedIn: 'root'
})


export class AuthService {
    isLoggedIn: boolean = false;
    token: string = null;
    customerId = null;
    customer = null;
    constructor(
        private http: HttpClient,
        private router: Router
    ) {}

   async postLogin(data, elem = ''){
        const payload = data;
        let url = 'http://localhost:4500/customer/';
        url += `?email=${data.email}&password=${data.password}`;
        const response = this.http.get(url).pipe(map((res: any)=>{

            if(res.success){
                const { name, token } = res.payload;
                //this.customerId = id;
                this.customer = name;
                this.token = token;
                this.isLoggedIn = true;
            }

            if(this.isLoggedIn){
                this.router.navigate(['/dashboard']);
            }else{
                this.router.navigate(['/login']);
            }
        }));

        return await response.toPromise();
    }
}
