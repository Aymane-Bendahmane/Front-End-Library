import { Component, OnInit } from '@angular/core';
import {BookServiceService} from '../BookService/book-service.service';
import {HttpEventType, HttpResponse} from '@angular/common/http';
import {Books} from '../Model/Students';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public books: any;
  // @ts-ignore
  public editPhoto: boolean;
  // @ts-ignore
  public selectedFiles;
  // @ts-ignore
  public progress: number;
  public currentFileUpload: any;
  public timestamp: number=0;
  public currentBook: any;
  public detailMode: number=1;

  public size: number=5;
  public currentPage: number=0;
  // @ts-ignore
  public totalPage: number;
  // @ts-ignore
  public pages: Array<number>;
  public currentKeyword: string="";

  constructor(public bs:BookServiceService,public router:Router) { }

  ngOnInit(): void {
    this.getBooks();
    this.ChercherBook()
    console.log(this.pages)
  }

  getBooks() {
    this.bs.getBook()
      .subscribe(data=>{
        this.books=data;
      },err=>{
        console.log(err);
      })
  }

  getTS() {
    return this.timestamp;
  }
  onBookDetails(b: any) {
    let id = btoa(b._links.book.href);
    console.log(id)
    console.log(atob(id))
    this.router.navigateByUrl("bookDetail/"+id);
    this.detailMode=2;
  }

  onPageBook(i: number) {
    this.currentPage=i;
    this.ChercherBook();
  }

  onChercher(form : any){
    this.currentPage=0;
    this.currentKeyword=form.keyword;
    this.ChercherBook();
  }

  ChercherBook() {
    this.bs.getBookByKeyWord(this.currentKeyword,this.currentPage,this.size)
      .subscribe(data=>{
        // @ts-ignore
        this.totalPage=data["page"].totalPages;
        this.pages=new Array<number>(this.totalPage);
        this.books=data;
      },err=>{
        console.log(err);
      });
  }
}
