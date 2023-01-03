import React, {
  createContext,
  Dispatch,
  FC,
  ReactNode,
  Reducer,
  ReducerAction,
  ReducerWithoutAction,
  useReducer,
} from "react";
import { Cookies } from "react-cookie";

interface userContextProps {
  user?: any;
  dispatch: Dispatch<Action>;
}

const init = {
  user: null,
};

export enum ActionType {
  LOGIN,
  LOGOUT,
}

interface LogoutAction {
  type: ActionType.LOGOUT;
}

interface LoginAction {
  type: ActionType.LOGIN;
  playload: {
    userName: string;
  };
}

type Action = LoginAction | LogoutAction;

const reducer: Reducer<typeof init, Action> = (prev, action) => {
  switch (action.type) {
    case ActionType.LOGIN:
      return prev;
    case ActionType.LOGOUT:
      document.cookie = "token-admin='';max-age=0";
      return { ...prev, user: null };
    default:
      return prev;
  }
};
export const userContext = createContext<userContextProps>({} as any);
const UserContextProvider: FC<{ children: ReactNode }> = (props) => {
  const [user, dispatch] = useReducer(reducer, init);
  return <userContext.Provider {...props} value={{ user, dispatch }} />;
};

export default UserContextProvider;
