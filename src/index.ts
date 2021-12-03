import { registerPlugin } from '@capacitor/core';

import type { ZohoSalesIqPlugin } from './definitions';

const ZohoSalesIq = registerPlugin<ZohoSalesIqPlugin>('ZohoSalesIq', {
  web: () => import('./web').then(m => new m.ZohoSalesIqWeb()),
});

export * from './definitions';
export { ZohoSalesIq };
