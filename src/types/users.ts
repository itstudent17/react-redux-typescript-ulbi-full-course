export enum UserActionsType {
    FETCH_USERS = 'FETCH_USERS',
    FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS',
    FETCH_USERS_ERROR = 'FETCH_USERS_ERROR',
}

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

export type UserAction = FetchUsersAction | FetchUsersErrorAction | FetchUsersSuccessAction
