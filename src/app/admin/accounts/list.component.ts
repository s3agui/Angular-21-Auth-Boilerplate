import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { AccountService, AlertService } from '@app/_services';

@Component({ templateUrl: 'list.component.html' })
export class ListComponent implements OnInit {
    accounts?: any[];

    constructor(
        private accountService: AccountService,
        private alertService: AlertService
    ) {}

    ngOnInit() {
        this.accountService.getAll()
            .pipe(first())
            .subscribe(accounts => this.accounts = accounts);
    }

    deleteAccount(account: any) {
        account.isDeleting = true;
        this.accountService.delete(account.id)
            .pipe(first())
            .subscribe({
                next: () => {
                    this.accounts = this.accounts!.filter(x => x.id !== account.id);
                    this.alertService.success('Account deleted successfully', { keepAfterRouteChange: true });
                },
                error: err => {
                    this.alertService.error(err);
                    account.isDeleting = false;
                }
            });
    }
}
