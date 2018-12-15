import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { LoginRouterModule } from './login-routing.module';
import { LoginComponent } from './login.component';

import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
    imports: [ CommonModule, FormsModule, LoginRouterModule, MatInputModule, MatButtonModule ],
    declarations: [ LoginComponent ],
    providers: []
})
export class LoginModule {}