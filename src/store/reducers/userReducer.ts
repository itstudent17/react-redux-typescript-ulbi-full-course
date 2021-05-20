import {UserActionsType, UserAction} from "../../types/users";

interface UserState {
    users: Array<any>,
    // users: any[],
    loading: boolean,
    error: null | string
}

const initialState: UserState = {
    users: [],
    loading: false,
    error: null,
}

export const userReducer = (state = initialState, action: UserAction): UserState => {
    switch (action.type) {
        case UserActionsType.FETCH_USERS:
            return {loading: true, error: null, users: []};
        case UserActionsType.FETCH_USERS_SUCCESS:
            return {loading: false, error: null, users: action.payload};
        case UserActionsType.FETCH_USERS_ERROR:
            // TODO: action.errorMessage instead of action.payload
            return {loading: false, error: action.payload, users: []};
        default:
            return state;
    }
}