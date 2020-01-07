
interface Actions {
  type: string;
  payload: object;
}

const StoreReducer = (state: any, action: Actions) => {
  switch(action.type) {
    case "ADD_ALARM":
      return [...state,  action.payload ]
  }
}

export default StoreReducer;