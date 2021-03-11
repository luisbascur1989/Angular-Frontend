import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { CreditCard, NuevaCreditCard } from '../models/creditcard';

@Injectable({
  providedIn: 'root'
})
export class CreditCardService {
  
  private creditCard: CreditCard = { id: "", name: "", money: 0};
  private baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getCreditCards(): Observable<CreditCard> {
    const url = this.baseUrl;
    return this.http.get<CreditCard>( url );
  }

  getCreditCardByID(id: string): Observable<CreditCard> {
    const url = `${this.baseUrl}/${id}`
    return this.http.get( url );
  }

  postCreditCard( data: any ):Observable<any> {
    const url = this.baseUrl;
    return this.http.post( url, data )
  }

  deleteProduct(id: string): Observable<any> {
    const url = `${this.baseUrl}/${id}`
    return this.http.delete(url);
  }
}