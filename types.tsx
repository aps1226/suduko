import { RenderAPI } from '@testing-library/react-native';
import { RootState } from './src/state/reducers/index';

export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
};

export type BottomTabParamList = {
  TabOne: undefined;
  TabTwo: undefined;
};

export type TabOneParamList = {
  TabOneScreen: undefined;
};

export type TabTwoParamList = {
  TabTwoScreen: undefined;
};
//State property types.
export type IProps ={
  key?:string;
  row: number;
  col: number;
  number?:number;
}

export interface Colors {
  [key: string]: string | string[]
}

export interface Notes {
  [key: string]: number[]
}

export interface Timer {
  [key: string]: number
}

export interface GameState {
  [key: string]: boolean
}

export interface RenderReduxAPI extends RenderAPI,RootState {};

