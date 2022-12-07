import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PosteslistComponent } from "./posteslist/posteslist.component";
import { PostedetailsComponent} from "./postedetails/postedetails.component";

const routes: Routes = [
  {path:'postes', component: PosteslistComponent},
  {path:'poste/:id', component:PostedetailsComponent},
  {path : '', redirectTo: 'postes', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
