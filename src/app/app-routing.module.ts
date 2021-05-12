import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BingingtypesComponent } from './bingingtypes/bingingtypes.component';


const routes: Routes = [

  {path:'binding', component: BingingtypesComponent}
  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
