import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { AuthRoutingModule } from './auth-routing.module';
import { RegisterComponent } from './components/register/register.component';
import { reducers } from './store/reducers';
import { AuthService } from './services/auth.service';
import { EffectsModule } from '@ngrx/effects';
import { RegisterEffect } from './store/effects/registerEffects';
import { BackendErrorMessagesComponent } from '../shared/components/backend-error-messages/backend-error-messages.component';
import { PersistenceService } from '../shared/services/persistence.service';

@NgModule({
  declarations: [RegisterComponent, BackendErrorMessagesComponent],
  providers: [AuthService, PersistenceService],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    StoreModule.forFeature('auth', reducers),
    EffectsModule.forFeature([RegisterEffect]),
  ],
})
export class AuthModule {}
