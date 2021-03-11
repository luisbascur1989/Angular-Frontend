import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CreditCard } from 'src/app/models/creditcard';
import { CreditCardService } from '../../services/credit-card.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  creditcards: CreditCard[] = []

  id: string;
  name: string;
  money: number;


  constructor(private creditCardService: CreditCardService, private route: ActivatedRoute, private router : Router) {}

  ngOnInit(): void {
    this.getCreditCards();
  }

  getCreditCards() {
    this.creditCardService.getCreditCards().subscribe((resp: any) => {
      this.creditcards = resp;
      console.log(this.creditcards);
    });
  }

  deleteCreditCard(id: string): void {
    this.creditCardService.deleteProduct(id).subscribe(() => { this.getCreditCards() })
  }

  editCreditCard(id: string, body: any) {
    console.log("id",id);
    console.log("body",body);
  }

  goEditCreditCard(id: string) {
    this.router.navigate([`edit/${id}`]);
  }
}
