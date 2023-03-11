import { createContext, Dispatch, FC, useReducer } from 'react';

interface CartContextProviderProps {
  children: JSX.Element[] | JSX.Element;
}

export enum CartAction {
  ADD = 'add',
  REMOVE = 'remove',
}

interface Cart {
  quantity: number;
}

interface ActionProduct {
  quantity: number;
}

interface Action {
  type: CartAction;
  id: number;
  product?: ActionProduct;
}

export const CART_CONTEXT = createContext<State | null>(null);
export const CART_CONTEXT_DISPATCHER = createContext<Dispatch<Action> | null>(
  null
);

type State = Map<number, Cart>;

/**
 * Update or insert data in current state, to not erase previous quantity
 * @param currentMap Corresponding to the current state of the dispatcher
 * @param key Key of the saved product
 * @param value Value of the saved product
 */
const upsert = (currentMap: State, key: number, value: ActionProduct) => {
  const existingValue = currentMap.get(key);

  if (!existingValue) return currentMap.set(key, value);
  currentMap.set(key, { quantity: existingValue.quantity + value.quantity });
};

const cartDispatcher = (state: State, action: Action): State => {
  const currentState = new Map(state);

  switch (action.type) {
    case CartAction.ADD:
      if (!action.product)
        throw new ReferenceError('Action product cannot be undefined or null');

      upsert(currentState, action.id, action.product);
      localStorage.setItem('cart', JSON.stringify([...currentState]));
      return currentState;

    case CartAction.REMOVE:
      currentState.delete(action.id);
      localStorage.setItem('cart', JSON.stringify(currentState));
      return currentState;

    default:
      console.error('Action type is not defined');
      return currentState;
  }
};

const localStorageCart = localStorage.getItem('cart');
const initCart = localStorageCart
  ? (new Map(JSON.parse(localStorageCart)) as State)
  : new Map();

export const CartContextProvider: FC<CartContextProviderProps> = ({
  children,
}) => {
  const [cart, dispatch] = useReducer(cartDispatcher, initCart);

  return (
    <CART_CONTEXT.Provider value={cart}>
      <CART_CONTEXT_DISPATCHER.Provider value={dispatch}>
        {children}
      </CART_CONTEXT_DISPATCHER.Provider>
    </CART_CONTEXT.Provider>
  );
};
