import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import houseInterface from "./houseInterface"
import { RootState } from './store';


export interface houseSlice {
 house:houseInterface[]
}
const initialState: houseSlice= { house: []}

const houseSlice = createSlice({
    name: 'house',
    initialState,
    reducers: {
        uploadNewHouse(state, action:PayloadAction<houseInterface>){ state.house.push(action.payload) },

        removeHouse(state, index:PayloadAction<number>){ 
            state.house.splice(index.payload, 1);
                   
         }
        }       
    }
);

// export const { uploadNewHouse, removeHouse } = houseSlice.actions;
export default houseSlice.reducer;
// export const houseUpload = (state: RootState) => state.houseReducer