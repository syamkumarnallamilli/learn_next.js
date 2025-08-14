import {create, StateCreator} from 'zustand'
import { persist } from 'zustand/middleware';

interface CounterState {
  counter: number;
  increment: () => void;
}
const initialCounterStore: StateCreator<CounterState> = (set) => {

    return{
    //define initial state
    counter:0,
    //define action
    increment:function(){
        set(function(state){
           return{ counter:state.counter+1}
        })
    },
}
}

 export const UseCounter=create(persist(initialCounterStore,{
  name:"counter-storage"
 }))
