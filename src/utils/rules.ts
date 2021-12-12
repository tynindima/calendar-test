import { Moment } from 'moment';

export const rules = {
  required: (message: string = "Required field") => ({
    required: true, 
    message,
  }),
  idDateAfter: (message: string) => ({
    validator(_: any, value: Moment) {
      if (value.isSameOrAfter()) {
        return Promise.resolve();
      }
      return Promise.reject(new Error(message));
    },
  }),
};