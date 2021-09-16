import { RenderAPI } from '@testing-library/react-native';
import { RootState } from './src/state/reducers/index';

//State property types.
export type IProps ={
  key?:string;
  row: number;
  col: number;
  number?:number;
}
//Type for color state property.
export interface Colors {
  [key: string]: string | string[]
}
//Type for notes state property.
export interface Notes {
  [key: string]: number[]
}
//Type for timer state property.
export interface Timer {
  [key: string]: number
}
//Type for color game state property.
export interface GameState {
  [key: string]: boolean
}
//Type for return type of renderWithRedux function (used for testing).
export interface RenderReduxAPI extends RenderAPI,RootState {};

