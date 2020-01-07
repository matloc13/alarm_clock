import { useReducer } from 'react';
import StoreReducer from './../reducers/storeReducer';
import AlarmReducer from './../reducers/alarmReducer';

interface ALARM  {
  hour: string;
  min: string;
  amPm: string;
  power: boolean;
}

const initAlarm: ALARM = {
  hour: " ",
  min: " ",
  amPm: "am",
  power: false
}
const initStore = [{initAlarm}];
const useStore: Function = () => {

  const [store, dispatchStore] = useReducer(StoreReducer, initStore);
  const [alarm, dispatchAlarm] = useReducer(AlarmReducer, initAlarm);
  
  const singleAlarm = { alarm, dispatchAlarm};
  const AlarmStore = { store, dispatchStore };

return [singleAlarm, AlarmStore] as [object, object];
}

export default useStore;