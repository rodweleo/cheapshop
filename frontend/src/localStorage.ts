export const saveReduxState = (state) => {
    try {
      const serializedState = JSON.stringify(state);
      localStorage.setItem('cart', serializedState);
    } catch (err) {
      console.error("Could not save state", err);
    }
};

export const loadReduxState = () => {
    try {
      const serializedState = localStorage.getItem('cart');
      if (serializedState === null) {
        return undefined;
      }

      return {
        cart: JSON.parse(serializedState)
      };
    } catch (err) {
      console.error("Could not load state", err);
      return undefined;
    }
  };
  
  