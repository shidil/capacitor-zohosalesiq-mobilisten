import { WebPlugin } from '@capacitor/core';

import type { ZohoSalesIqPlugin } from './definitions';

export class ZohoSalesIqWeb extends WebPlugin implements ZohoSalesIqPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
