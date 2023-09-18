import { Component } from '@angular/core';
import { BookService } from '../service/book.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  productList: any;
  booksList: any;
  sortBy: string = "title";

  constructor(private bookService: BookService){}

  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts(){
    this.bookService.viewAllBooks().subscribe((res:any)=>{
      this.productList = res.data;
      this.booksList = res.data.books;
      console.log("res:::", res.data.books);
      this.sortByTitle();
    })
  }

  sortByTitle(){
    this.booksList.sort( function( a:any, b:any ) {
      a = a.title.toLowerCase();
      b = b.title.toLowerCase();

      return a < b ? -1 : a > b ? 1 : 0;
    });
  }

  sortByDate(){
    this.booksList.sort( function( a:any, b:any ) {
      return a.PublishDate < b.PublishDate ? -1 : a.PublishDate > b.PublishDate ? 1 : 0;
  });
  }
}
