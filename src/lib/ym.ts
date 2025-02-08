import { EventParameters } from './types/events';
import { YM } from './types/ym';

export const ym = (tagID: number | null, ...parameters: EventParameters) => {
  // @ts-ignore
  const ym = window.ym as YM | undefined;

  if (!ym || !tagID) {
    return;
  }

  ym(tagID, ...parameters);
};
