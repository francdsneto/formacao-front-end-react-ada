interface User {
  name: string;
  email: string;
}

interface UserState {
  user: User | null;
}

const initialState: UserState = {
  user: null,
};

/**
 *  Reducer: Guarda o estado que desejamos compartilhar na aplicação
 *  Manipula / Altera os estados
 */

interface UserAction {
  type: string;
  payload?: User;
}

/**
 * Todo reducer precisa retornar nosso estado atualiado
 * @param state
 * @param action
 */
export function userReducer(
  state = initialState,
  action: UserAction
): UserState {
  switch (action.type) {
    case "user/login": {
      return {
        ...state,
        user: action.payload as User,
      };
    }
    case "user/logout": {
      return {
        ...state,
        user: null,
      };
    }
  }

  return state;
}
