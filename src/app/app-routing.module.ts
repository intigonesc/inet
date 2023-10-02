import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { LlanadosComponent } from './pages/llanados/llanados.component';
import { ConfiguracionComponent } from './pages/configuracion/configuracion.component';
import { AlarmasComponent } from './pages/alarmas/alarmas.component';
import { LoginComponent } from './pages/login/login.component';
import { NavComponent } from './pages/nav/nav.component';
import { AppComponent } from './app.component';
import { PacientesComponent } from './pages/pacientes/pacientes.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

const routes: Routes = [
  {path:'' , redirectTo:"/login", pathMatch:"full" },
  {path:'usuarios',component:UsuariosComponent},
  {path:'llamados',component:LlanadosComponent},
  {path:'configuracion',component:ConfiguracionComponent},
  {path:'alarmas',component:AlarmasComponent},
  {path:'nav',component:NavComponent},
  {path:'inicio',component:AppComponent},
  {path:'login',component:LoginComponent},
  {path:'pacientes',component:PacientesComponent},
  {path:'dashboard',component:DashboardComponent}




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
