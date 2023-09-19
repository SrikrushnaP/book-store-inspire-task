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

  // Return all available books in the api
  getAllProducts(){
    this.bookService.viewAllBooks().subscribe((res:any)=>{
      this.productList = res.data;
      this.booksList = res.data.books;
      this.sortByTitle();
    })
  }

   /**
   * Sort the book of array by the books title
   * It will delete the product from the frontend
   */
  sortByTitle(){
    this.booksList.sort( function( a:any, b:any ) {
      a = a.title.toLowerCase();
      b = b.title.toLowerCase();

      return a < b ? -1 : a > b ? 1 : 0;
    });
    this.sortBy = "Title";
  }

  /**
   * Sort the book of array by the books PublishDate
   * It will delete the product from the frontend
   */
  sortByDate(){
    this.booksList.sort( function( a:any, b:any ) {
      return a.PublishDate < b.PublishDate ? -1 : a.PublishDate > b.PublishDate ? 1 : 0;
    });
    this.sortBy = "Published Date";
  }
}
