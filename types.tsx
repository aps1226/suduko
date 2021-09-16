import { RenderAPI } from '@testing-library/react-native';
import { RootState } from './src/state/reducers/index' 
import { Store } from './src/state/store';

<<<<<<< HEAD
//Expands object types one level deep.
export type Expand<T> = T extends infer O ? { [K in keyof O]: O[K] } : never;
//Expands object types one level deep with optional flag.
export type ExpandOptional<T> = T extends infer O ? { [K in keyof O]?: O[K] } : never;
=======
>>>>>>> 5bfc99a (Merge commit.)
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
//Type for MockStore (used for testing).
export type MockStore = ExpandOptional<RootState>
//Type for return type of renderWithRedux function (used for testing).
export interface RenderReduxAPI extends RenderAPI {
  store:Store
};
//Type for store argument of renderWithRedux function (used for testing).
export interface IStore {
  initialState?:MockStore;
  store?:Store;
};
