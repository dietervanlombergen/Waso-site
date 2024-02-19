import { Component, Input, OnInit } from '@angular/core';
import { Bestuurslid } from 'src/app/models/bestuurslid';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  @Input() lid: Bestuurslid = 
    {
      naam: "David Brown",
      functie: "Penningmeester",
      imgPath: "/img/david_brown.jpg",
      beschrijving: "David beheert de financiën van onze organisatie en zorgt voor een transparante..."
    }
  ;

  name: string;
  functie: string;
  beschrijving : string;
  img_path : string;

  constructor() {
    this.name = this.lid.naam;
    this.functie = this.lid.functie;
    this.beschrijving = this.lid.beschrijving;
    this.img_path = this.lid.imgPath;
  }
  ngOnInit(): void {
    console.log(this.lid)
    this.name = this.lid.naam;
    this.functie = this.lid.functie;
    this.beschrijving = this.lid.beschrijving;
    this.img_path = this.lid.imgPath;
  }
}
