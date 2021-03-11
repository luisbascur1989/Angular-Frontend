import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CreditCard } from 'src/app/models/creditcard';
import { CreditCardService } from '../../services/credit-card.service';
import { ClassGetter } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  
  newCreditCard : CreditCard ;
  cardID: string;

  constructor(private route: ActivatedRoute, private creditCardService: CreditCardService, private router:Router) { }

  ngOnInit(): void {
    this.cardID = this.route.snapshot.paramMap.get('id');
    this.creditCardService.getCreditCardByID(this.cardID).subscribe(data => {
      this.newCreditCard = data
    })
  }

  editCreditCards() {    
    this.creditCardService.editCreditCard(this.cardID, this.newCreditCard).subscribe((result) => {
      console.log(result);
      
      this.router.navigate(['/home'])
    });
  }

}
