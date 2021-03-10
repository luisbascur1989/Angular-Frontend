import { Component, OnInit } from '@angular/core';
import { CreditCard } from 'src/app/models/creditcard';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  creditcards =
    [{
      id: "11",
      name: "dsadasdas",
      money: 0,
    },
    {
      id: "123",
      name: "dasdsda",
      money: 111110,
    },
    {
      id: "43444",
      name: "sdasdasdassd",
      money: 45000,
    }]

  id: string;
  name: string;
  money: number;


  constructor() {}

  ngOnInit(): void {}

  crearRegistro() {
    let newCreditCard = {
      id: this.id,
      name: this.name,
      money: this.money
    }
    console.log('Se creo el registro: ', newCreditCard);
  }
}
