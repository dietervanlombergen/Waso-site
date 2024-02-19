import { Component } from '@angular/core';
import { Bestuurslid } from 'src/app/models/bestuurslid';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent {

  bestuursleden: Bestuurslid[] = [
    {
      naam: "John Doe",
      functie: "Voorzitter",
      imgPath: "assets/images/portret_1.jpg",
      beschrijving: "John is al vele jaren actief in ons bestuur en zet zich in voor..."
    },
    {
      naam: "Jane Smith",
      functie: "Secretaris",
      imgPath: "assets/images/portret_2.jpg",
      beschrijving: "Jane is verantwoordelijk voor het bijhouden van de notulen en de communicatie met..."
    },
    {
      naam: "David Brown",
      functie: "Penningmeester",
      imgPath: "assets/images/portret_3.jpg",
      beschrijving: "David beheert de financiën van onze organisatie en zorgt voor een transparante..."
    },
    {
      naam: "Emma Johnson",
      functie: "Secretaris",
      imgPath: "assets/images/portret_4.jpg",
      beschrijving: "Emma is verantwoordelijk voor het bijhouden van notulen en andere administratieve taken..."
    }
    // Voeg meer bestuursleden toe indien nodig
  ];
}
