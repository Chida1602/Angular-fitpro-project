import { Injectable } from '@angular/core';

export class User {
  id: any;
  username: string = "";
  lastname: string = "";
  email: any;
  type: string = "user";
  isAdmin: boolean = false;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  loggedUserDetails: User = new User();

  constructor() {
    let userDetail = sessionStorage.getItem('userDetails');
    this.loggedUserDetails = JSON.parse(userDetail);
   }

}