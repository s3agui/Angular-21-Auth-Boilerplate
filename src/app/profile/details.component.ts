import { Component, OnInit } from '@angular/core';
import { Account } from '@app/_models';
import { AccountService } from '@app/_services';

@Component({ templateUrl: 'details.component.html' })
export class DetailsComponent implements OnInit {
    account: Account | null = null;

    constructor(private accountService: AccountService) {}

    ngOnInit() {
        this.account = this.accountService.accountValue;
    }
}
