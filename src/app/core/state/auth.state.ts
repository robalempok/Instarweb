import { State, Selector, Action, StateContext } from '@ngxs/store';
import { AuthService } from '@app/core/services/auth.service';
import { tap } from 'rxjs/operators';
import { LoginRemote, SignUpRemote } from '@app/shared/data/remotes';

export interface AuthStateModel {
    token: string;
}

export class Login {
    static readonly type = '[Auth] Login';
    constructor(public email: string, public password: string) { }
}

export class SignUp {
    static readonly type = '[Auth] Signup';
    constructor(
        public firstName: string,
        public lastName: string,
        public email: string,
        public password: string,
        public referrerUrl?: string
    ) { }
}

export class Logout {
    static readonly type = '[Auth] Logout';
}

@State<AuthStateModel>({
    name: 'auth'
})
export class AuthState {

    @Selector() static token(state: AuthStateModel) { return state.token; }

    constructor(private authService: AuthService) { }

    @Action(Login)
    login({ patchState }: StateContext<AuthStateModel>, payload: Login) {
        return this.authService.login(payload.email, payload.password).pipe(tap((result: LoginRemote) => {
            patchState({ token: result.token });
        }));
    }

    @Action(SignUp)
    signUp({ patchState }: StateContext<AuthStateModel>, payload: SignUp) {
        return this.authService.signUp(payload.firstName, payload.lastName, payload.email, payload.referrerUrl)
        .pipe(tap((result: SignUpRemote) => {
            patchState({ token: result.token });
            this.authService.changePassword('', payload.password, true).subscribe();
        }));
    }
}
