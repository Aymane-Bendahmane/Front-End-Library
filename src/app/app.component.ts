import { Component } from '@angular/core';
import {BookServiceService} from './BookService/book-service.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TemLibrary';
  constructor(public s:BookServiceService,private r:Router) {

  }

  LogOut() {
    localStorage.removeItem('credentials');
    this.r.navigateByUrl("/login")
      .then(() => {
        window.location.reload();
      })
  }
}
