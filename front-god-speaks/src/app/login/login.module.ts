import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { LoginRouterModule } from './login-routing.module';
import { LoginComponent } from './login.component';

@NgModule({
    imports: [ CommonModule, FormsModule, LoginRouterModule ],
    declarations: [ LoginComponent ],
    providers: []
})
export class LoginModule {}