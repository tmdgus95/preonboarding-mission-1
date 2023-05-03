import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface RecommendState {
  name: string;
  id: number;
}

const initialState: RecommendState[] = [
  {
    name: '',
    id: 0,
  },
];

export const recommendSlice = createSlice({
  name: 'recommend',
  initialState,
  reducers: {
    setRecommend: (state, action: PayloadAction) => {
      return action.payload;
    },
  },
});

export const { setRecommend } = recommendSlice.actions;

export default recommendSlice.reducer;
