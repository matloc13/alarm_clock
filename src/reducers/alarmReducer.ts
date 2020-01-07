import useStore from './../hooks/useStore';

interface Actions {
  type: string;
  payload: {
    hour: string;
    min: string;
    amPm: string;
    power: boolean;
  }
}

const [singleAlarm, AlarmStore] = useStore();
const alarmReducer = (state: any, action: Actions) => {
  switch (action.type) {
    case "CREATE_ALARM":
      const alarm: object = 
        {...state, hour: action.payload.hour, min:    action.payload.min, amPm: action.payload.amPm, power: action.payload.power }
      return AlarmStore.dispatchStore({type: "ADD_ALARM", payload: alarm})
    case "DELETE_ALARM":
      return ;
    default:
      return;
  }
}

export default alarmReducer;