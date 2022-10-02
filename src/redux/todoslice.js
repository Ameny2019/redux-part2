// les données mt3na lehna
// ne5ethha mel counter slice w nmodifiha
import { createSlice } from "@reduxjs/toolkit";
import Todo from "../Components/Todo";
export const todoslice = createSlice({
  //  name
  name: "todo",
  initialState: [
    { title: "t1", id: "1", isDone: true },
    { title: "t2", id: "2", isDone: false },
    { title: "t3", id: "3", isDone: false },
  ],
  // initialState, c'est tableau n7oto fiha donnees n7eb 3lihom  howa array of objects
  reducers: {
    //fassa5t el fwessto
    // el reducer tel9a fih les fonctions
    addTodo: (state, actions) => {
      //create object todo
      const newTodo = {
        title: actions.payload,
        id: 5,
        isDone: false };
      // add object to the liste  of objects in the state
      state.push(newTodo);
    },
     deletetodo :(state, actions) => {
      const sts = state.filter((e) => e.id !== actions.payload)
      return sts ;
     },
     // function toggle
     toggletodo:(state,action)=> {
return state.map((e)=>
{if (e.id=== action.payload){
  return {...e, isDone: !e.isDone}
                            }
else {return e }
})
     },
     //modification
     edittodo:(state,action)=>{
      const index=state.findIndex((e)=>e.id===action.payload)
      state[index].title=prompt('Test');

     }
     
  },


 

});

// Action creators are generated for each case reducer function
export const { addTodo, deletetodo,toggletodo, edittodo,applyFilter } = todoslice.actions;
export default todoslice.reducer

