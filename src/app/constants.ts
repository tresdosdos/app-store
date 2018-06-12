export const KEYBOARD = {
  ENTER: 13
};

export const CLIENT_ID = 'e538cfcbe2e6441ca9575cc7e7873b62';

//export const REDIRECT_URI = 'https://smartextask-app-store.herokuapp.com';
export const REDIRECT_URI = 'http://localhost:5000';

export const ACCESS_TOKEN_URL = 'https://api.instagram.com/v1/users/self/?access_token=';

export const ADMINS = {
  FIRST_ADMIN: 4165236905
};

export const RIGHTS = {
  ADMIN: 'admin',
  LOGGED: 'logged',
  NON_LOGGED: 'non-logged'
}


export const enum THEMES  {
  DARK = 'dark',
  LIGHT = 'light'
}


export const enum TOGGLE_BUTTONS {
  ON = 'on',
  OFF = 'off'
}

export const CATEGORIES = {
  KIDS: {
    ID: 'kids',
    PARAM: 6
  },
  ADULTS: {
   ID: 'adults',
   PARAM: 18
  },
  MULTIPLAYER: {
    ID: 'multiplayer',
    PARAM: 'Multiplayer'
  }
};

export const enum LOCALSTORAGE {
  AUTH_TOKEN = 'appStoreToken'
}

export const STATIC_PATH = '../../assets/';

export const IMAGES = {
  LOGO: 'logo.png'
};

export const enum ICONS {
  ARRROW_LEFT = 'arrow-left',
  ARROW_RIGHT = 'arrow-right'
}
