import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { POSTES } from 'src/assets/listePostes';
import { Poste } from '../poste';
@Component({
  selector: 'ITM-posteslist',
  templateUrl: './postedetails.component.html',
  styleUrls: ['./postedetails.component.css']
})
export class PostedetailsComponent implements OnInit {

  postesList : Poste[]=POSTES;
  poste : Poste|undefined;

  constructor(private route:ActivatedRoute, private router : Router) { }

  ngOnInit(): void {
    //this.poste=new Poste;
    const posteID : string|null = this.route.snapshot.paramMap.get('id');
    if (posteID){
      this.poste = this.postesList.find(poste => poste.id == +posteID)
    }
  }
  goComposantListPoste(){
    this.router.navigate(['/postes']);
  }
}
