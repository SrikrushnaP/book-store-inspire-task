import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private bookBaseUrl = "https://s3.amazonaws.com/api-fun/books.json";

  constructor(private httpClient: HttpClient) { }

  viewAllBooks(){
    return this.httpClient.get<any>(this.bookBaseUrl);
  }
}
