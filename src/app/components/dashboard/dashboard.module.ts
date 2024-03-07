import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { InicioComponent } from './inicio/inicio.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SharedModule } from '../shared/shared.module';
import {SettigsComponent} from './settigs/settigs.component';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import { ChatbotComponent } from './chatbot/chatbot.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    DashboardComponent,
    InicioComponent,
    NavbarComponent,
    SettigsComponent,
    ChatbotComponent
  ],
    imports: [
        CommonModule,
        DashboardRoutingModule,
        SharedModule,
        MatDividerModule,
        MatListModule,
        FormsModule
    ]
})
export class DashboardModule { }
