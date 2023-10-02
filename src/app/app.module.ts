import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './pages/nav/nav.component';
import { FooterComponent } from './pages/footer/footer.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { LlanadosComponent } from './pages/llanados/llanados.component';
import { ConfiguracionComponent } from './pages/configuracion/configuracion.component';
import { AlarmasComponent } from './pages/alarmas/alarmas.component';
import { LoginComponent } from './pages/login/login.component';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { PacientesComponent } from './pages/pacientes/pacientes.component';



@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    UsuariosComponent,
    LlanadosComponent,
    ConfiguracionComponent,
    AlarmasComponent,
    LoginComponent,
    DashboardComponent,
    PacientesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
