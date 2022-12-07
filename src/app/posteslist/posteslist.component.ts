import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {POSTES} from "../../assets/listePostes";
import {Poste} from "../poste";

@Component({
  selector: 'ITM-posteslist',
  templateUrl: './posteslist.component.html',
  styleUrls: ['./posteslist.component.css']
})
export class PosteslistComponent implements OnInit {
  posteList : Poste [] = POSTES;
  posteSelected :Poste = new Poste();

  constructor(private router:Router) { }

  ngOnInit(): void {
    console.table(this.posteList);
    //this.selectPoste(this.posteList[0]);
  }
  selectPoste(poste : Poste){
    console.log (`Vous avez selectionné ${poste.id}`);
    this.posteSelected=poste;
  }

  goToPoste(poste:Poste){
    this.router.navigate(['/poste', poste.id]);
  }

}
