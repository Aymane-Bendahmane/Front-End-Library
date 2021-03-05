import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {BookServiceService} from '../BookService/book-service.service';
import {toBase64String} from '@angular/compiler/src/output/source_map';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {
  public currentbook: any;
  public timestamp: any;

  constructor(public activeroute:ActivatedRoute,public BService:BookServiceService,public route:Router) { }

  ngOnInit(): void {
    console.log(this.activeroute.snapshot.params.id)
    let id = atob(this.activeroute.snapshot.params.id);
    console.log(id)
    this.BService.getBookUrl(id).subscribe(data=> {
      this.currentbook = data;
      console.log(this.currentbook.id);
    });
  }

  getTS() {
    return this.timestamp;
  }

  backTobooks() {
    this.route.navigateByUrl("/Home")
      .then(() => {
        window.location.reload();})
  }

}
