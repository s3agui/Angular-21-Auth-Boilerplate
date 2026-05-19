import { Component, OnInit } from '@angular/core';
import { Account, Role } from '@app/_models';
import { AccountService } from '@app/_services';

@Component({ templateUrl: 'home.component.html' })
export class HomeComponent implements OnInit {
    Role = Role;
    account: Account | null = null;
    accounts?: Account[];
    loading = false;

    constructor(private accountService: AccountService) {}

    ngOnInit() {
        this.account = this.accountService.accountValue;
        // only load all accounts for admin users
        if (this.account?.role === Role.Admin) {
            this.loading = true;
            this.accountService.getAll()
                .subscribe(accounts => {
                    this.loading = false;
                    this.accounts = accounts;
                });
        }
    }
}
