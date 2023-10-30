import 'i18next';

import message from '../../public/locales/en/message.json';

declare module 'i18next' {
  interface CustomTypeOptions {
    resources: {
      message: typeof message;
    };
  }
}
