
import * as Lodash from 'lodash';
  declare module 'egg' {
    export interface Application {
      _: typeof Lodash
    }
  };