export * from './authorization.actions';

export interface IAction {
  type: string;
}

export interface IAsyncAction extends IAction {
  correlationId: string;
}

export interface IAsyncActionCompletion extends IAsyncAction {
  error? :string;
}