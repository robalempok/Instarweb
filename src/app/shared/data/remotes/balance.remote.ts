import { Balance } from '@app/shared/data/models/balance.model';

export interface BalanceRemote {
    balances: Balance[];
    startBalance: number;
}
