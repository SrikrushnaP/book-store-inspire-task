import { Component } from '@angular/core';
import { BookService } from '../service/book.service';

@Component({
  selector: 'app-admin-product-list',
  templateUrl: './admin-product-list.component.html',
  styleUrls: ['./admin-product-list.component.css']
})
export class AdminProductListComponent {
  productList: any;
  booksList: any;

  constructor(private bookService: BookService){}

  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts(){
    this.bookService.viewAllBooks().subscribe((res:any)=>{
      this.booksList = res.data.books;
    })
  }

  productDeleteConfirm(productIndex:number){
    if(confirm("Do you want to delete the book!")){
    this.booksList.splice(productIndex,1);
    }
  }

  addProduct(){
    alert("TODO: Added delete feature only. Later will add this")
  }

  updateProduct(){
    alert("TODO: Added delete feature only. Later will add this")
  }
}
