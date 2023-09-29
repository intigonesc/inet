import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PacienteComponent } from './pages/paciente/paciente.component';
import { NuevoComponent } from './forms/nuevo/nuevo.component';

const routes: Routes = [
  {path:"pacientes", component:PacienteComponent},
  {path:"nuevo", component:NuevoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
