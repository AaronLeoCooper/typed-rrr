import { User } from './UserTypes';
import { Action, Reducer } from 'redux';
import { RootState } from '../../store';
import { ThunkAction } from 'redux-thunk';

export const NAMESPACE = 'USER';

const START_FETCH_USER = `${NAMESPACE}.START_FETCH_USER`;
const SUCCESSFUL_FETCH_USER = `${NAMESPACE}.SUCCESSFUL_FETCH_USER`;
const FAILED_FETCH_USER = `${NAMESPACE}.FAILED_FETCH_USER`;

interface StartFetchAction {
  type: typeof START_FETCH_USER
}

interface SuccessfulFetchAction {
  type: typeof SUCCESSFUL_FETCH_USER,
  user: User
}

interface FailedFetchAction {
  type: typeof SUCCESSFUL_FETCH_USER,
  error: string
}

export const startFetchUser = (): StartFetchAction => ({
  type: START_FETCH_USER
});

export const successfulFetchUser = (user: User): SuccessfulFetchAction => ({
  type: SUCCESSFUL_FETCH_USER,
  user
});

export const failedFetchUser = (error: string): FailedFetchAction => ({
  type: FAILED_FETCH_USER,
  error
});

export const fetchUser = (): ThunkAction<void, RootState, null, Action<string>> =>
  async (dispatch) => {
    dispatch(startFetchUser());

    const response = await Promise.resolve({
      data: {
        name: 'Dwayne Johnson',
        image: 'https://e3.365dm.com/19/07/2048x1152/skynews-dwayne-johnson-the-rock_4730970.jpg?bypass-service-worker&20190729111602'
      }
    });

    dispatch(successfulFetchUser(response.data as User))
  };

interface State {
  isFetching: boolean;
  user?: User;
  error?: string;
}

const initState: State = {
  isFetching: false
};

type UserActions = StartFetchAction | SuccessfulFetchAction | FailedFetchAction;

const reducer: Reducer = (state = initState, action: UserActions): State => {
  switch (action.type) {
    case START_FETCH_USER:
      return {
        ...state,
        isFetching: true
      };

    case SUCCESSFUL_FETCH_USER:
      return {
        ...state,
        isFetching: false,
        user: (action as SuccessfulFetchAction).user
      };

    case FAILED_FETCH_USER:
      return {
        ...state,
        isFetching: false,
        error: (action as FailedFetchAction).error
      };

    default:
      return state;
  }
};

export default reducer;

export const getUser = (rootState: RootState): User => rootState[NAMESPACE].user;
