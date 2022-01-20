import React, { Dispatch } from "react";

type Action = { type: "login"; token: string } | { type: "logout" };

export function login(dispatch: Dispatch<Action>, token: string) {
  dispatch({ type: "login", token });
  localStorage.setItem("token", token);
}

export function logout(dispatch: Dispatch<Action>) {
  dispatch({ type: "logout" });
  localStorage.removeItem("token");
}

interface AuthState {
  isAuth: boolean;
  token: string | null;
}

const initialState: AuthState = { isAuth: !!localStorage.getItem('token'), token: localStorage.getItem('token') };

export const AuthContext = React.createContext<
  [AuthState, Dispatch<Action>] | undefined
>(undefined);

function authReducer(state: AuthState, action: Action): AuthState {
  switch (action.type) {
    case "login":
      return { isAuth: true, token: action.token };
    case "logout":
      return { isAuth: false, token: null };
    default:
      return state;
  }
}

export function useAuthContext(): [AuthState, Dispatch<Action>] {
  const authContext = React.useContext(AuthContext);
  if (!authContext) {
    throw new Error("useAuthContext must be used in AuthProvider");
  }
  return authContext;
}

export const AuthProvider = ({ ...props }) => {
  const value = React.useReducer(authReducer, initialState);

  return <AuthContext.Provider value={value} {...props} />;
};
