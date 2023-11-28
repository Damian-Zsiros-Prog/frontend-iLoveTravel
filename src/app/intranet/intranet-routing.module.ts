import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PerfilComponent} from "./perfil/perfil.component";
import {IntranetComponent} from "./intranet.component";
import {PersonasComponent} from "./personas/personas.component";
import {LugaresComponent} from "./lugares/lugares.component";

const routes: Routes = [
  { path:'', component: IntranetComponent, children: [
      { path:'perfil', component: PerfilComponent },
      { path: 'personas', component: PersonasComponent },
      { path: 'lugares', component: LugaresComponent }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IntranetRoutingModule { }
