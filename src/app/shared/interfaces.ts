import {Subscription} from 'rxjs';

export interface IToggleButtons {
  categories: string;
  logIn: string;
  theme: string;
}

export interface ISubscriptions {
  first: Subscription;
  second?: Subscription;
  third?: Subscription;
}
