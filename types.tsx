/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

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
  [key: string]: string
}

export interface Notes {
  [key: string]: number[]
}

