import {configureStore} from '@reduxjs/toolkit';
import calculateIt from './sliceCalculator';

export const store = configureStore({
    reducer:{
        calculate:calculateIt
    }
})
