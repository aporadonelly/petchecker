export {};

declare global {
  type Nullable<T extends object> = {
    [P in keyof T]: T[P] | null;
  };

  type NotEmpty<T extends object> = keyof T extends never ? never : T;

  type First<T extends any[]> = T extends [] ? never : T[0];

  type Last<T extends any[]> = T extends [...any[], infer Rest] ? Rest : never;

  type ReducerAction<T extends object> = {
    [K in keyof T]: T[K] extends (...args: infer Args) => any
      ? First<Args> extends never
        ? { type: K }
        : { type: K; payload: First<Args> }
      : { type: K; payload: T[K] };
  }[keyof T];

  interface ObjectConstructor {
    keys<T extends object>(obj: T): Array<keyof T>;
  }
}
