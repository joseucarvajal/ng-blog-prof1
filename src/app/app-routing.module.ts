import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListarComponent } from './productos/listar/listar.component';
import { CrearComponent } from './productos/crear/crear.component';

const routes: Routes = [
  {path: 'productos/listar', component: ListarComponent },
  {path: 'productos/crear', component: CrearComponent },
  {path: '', redirectTo: 'productos/listar', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
