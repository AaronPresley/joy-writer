export interface State {
  pathIsSet: boolean;
}

export interface Actions {
  setPath: (path: string) => State;
}
