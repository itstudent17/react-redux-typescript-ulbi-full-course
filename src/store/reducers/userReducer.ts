/*
const FETCH_USERS = 'FETCH_USERS';
const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
const FETCH_USERS_ERROR = 'FETCH_USERS_ERROR';
*/

enum UserActionsType {
    FETCH_USERS = 'FETCH_USERS',
    FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS',
    FETCH_USERS_ERROR = 'FETCH_USERS_ERROR',
}

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

// interface UserAction {
//     type: string,
//     payload: any,
//     errorMessage?: string
// }

interface FetchUsersAction {
    type: UserActionsType.FETCH_USERS,
}

interface FetchUsersSuccessAction {
    type: UserActionsType.FETCH_USERS_SUCCESS,
    payload: any[]
}

interface FetchUsersErrorAction {
    type: UserActionsType.FETCH_USERS_ERROR,
    payload: string
}

type UserAction = FetchUsersAction | FetchUsersErrorAction | FetchUsersSuccessAction

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