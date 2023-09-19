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

  /**
   * Delete product
   * @param productIndex {number}
   * It will delete the product from the frontend, we are not calling any service to update the data in backend
   */
  productDeleteConfirm(productIndex:number){
    if(confirm("Do you want to delete the book!")){
    this.booksList.splice(productIndex,1);
    }
  }

  /**
   * Add product
   * TODO: Later will add this
   */
  addProduct(){
    alert("TODO: Added delete feature only. Later will add this")
  }


  /**
   * Update product
   * TODO: Later will add this
   */
  updateProduct(){
    alert("TODO: Added delete feature only. Later will add this")
  }
}
