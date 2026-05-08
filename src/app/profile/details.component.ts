import { Component } from '@angular/core';
import { AccountService } from '@app/_services';

@component({ templateUrl: 'details.component.html', standalone: false })
export class DetailsComponent {
    constructor(public accountService: AccountService) { }

    get account() { return this.accountService.accountValue;

     }
    

}

