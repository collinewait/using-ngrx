import * as appActions from './../actions/app.actions';

export function appReducer(state = [], action: appActions.Action) {
  switch (action.type) {
    case appActions.LOAD_USERS_SUCCESS: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
}
