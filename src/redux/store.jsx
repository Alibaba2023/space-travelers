import { applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { configureStore } from '@reduxjs/toolkit';
import dragonsSlice from './dragons/dragonsSlice';
import missionSlice from './missions/missionSlice';
import rocketsSlice from './rockets/rocketsSlice';

const store = configureStore({
  reducer: {
    dragon: dragonsSlice,
    missions: missionSlice,
    rockets: rocketsSlice,
  },
},
applyMiddleware(logger));

export default store;
