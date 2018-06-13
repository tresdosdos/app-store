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

export interface IUser {
  username: string;
  logo: string;
  id: number;
  rights: string;
}

export interface IApp {
  logo: string;
  content_rating: number;
  app_name: string;
  content_rating_info: string;
  requires_os: string;
  publisher_name: string;
  id: string;
  downloads: string;
  all_rating: number;
  top_developer: boolean;
  price: string;
}

export interface ILoginData {
  bio: string;
  counts: {
    media: number;
    follows: number;
    followed_by: number;
  };
  full_name: string;
  id: string;
  is_business: boolean;
  profile_picture: string;
  username: string;
  website: string;
}

export interface ITheme {
  color: string;
  categories: boolean;
  logIn: boolean;
}
