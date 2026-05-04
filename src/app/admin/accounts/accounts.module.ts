import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { AccountsRoutingModule } from './accounts-routing.module';
import { ListComponent } from '@app/account/layout.component';
import { AddEditComponent } from '@app/account/add-edit.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule
        AccountsRoutingModule
    ],
    declarations: [ 
        ListComponent,
        AddEditComponent
     ]
})
export class AccountsModule { } 
