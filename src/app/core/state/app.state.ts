import { State, Selector, Action, StateContext } from '@ngxs/store';

export interface AppStateModel {
    loading: boolean;
}

export class ToggleLoading {
    static readonly type = '[App] Toggle Loading';
    constructor() { }
}

@State<AppStateModel>({
    name: 'app',
    defaults: {
        loading: false
    }
})
export class AppState {

    @Selector() static loading(state: AppStateModel) { return state.loading; }

    constructor() { }

    @Action(ToggleLoading)
    toggleLoading({ patchState, getState }: StateContext<AppStateModel>, payload: ToggleLoading) {
        let loading = false;
        if (getState() != null) {
            loading = getState().loading;
        }
        patchState({ loading: !loading });
    }

}
