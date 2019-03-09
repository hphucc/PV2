import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
=======
import { Router } from '@angular/router';
>>>>>>> d70c0fd1a6a4becd6548ec963c16d2c39630d9ce

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

<<<<<<< HEAD
  constructor() { }

  ngOnInit() {
  }

=======
  constructor(private router: Router) { }
 
  ngOnInit() {
  }
  onLogout(){
    if(localStorage.getItem('userToken')){
      localStorage.removeItem('userToken');
      this.router.navigate(['login']);
    }  
  }
>>>>>>> d70c0fd1a6a4becd6548ec963c16d2c39630d9ce
}
