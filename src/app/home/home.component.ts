import { Component, OnInit } from '@angular/core';
import { Account, Role } from '@app/_models';
import { AccountService } from '@app/_services';

@Component({ templateUrl: 'home.component.html' })
export class HomeComponent implements OnInit {
    Role = Role;
    account: Account | null = null;
    accounts?: Account[];
    loading = false;
    adminCount = 0;
    userCount = 0;

    constructor(private accountService: AccountService) {}

    ngOnInit() {
        this.account = this.accountService.accountValue;
        if (this.account?.role === Role.Admin) {
            this.loading = true;
            this.accountService.getAll()
                .subscribe(accounts => {
                    this.loading = false;
                    this.accounts = accounts;
                    this.adminCount = accounts.filter((a: any) => a.role === 'Admin').length;
                    this.userCount = accounts.filter((a: any) => a.role === 'User').length;
                });
        }
    }
}