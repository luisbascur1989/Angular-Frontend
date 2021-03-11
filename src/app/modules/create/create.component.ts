import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CreditCard } from 'src/app/models/creditcard';
import { CreditCardService } from '../../services/credit-card.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  
  id: string;
  name: string;
  money: number;

  constructor(private creditCardService: CreditCardService, private router:Router) { }

  ngOnInit(): void {
  }

  postCreditCards() {
    let newCreditCard: CreditCard = {
      name: this.name,
      money: this.money
    }
    
    this.creditCardService.postCreditCard(newCreditCard).subscribe((result) => {
      this.router.navigate(['/home'])
    });
  }

}
