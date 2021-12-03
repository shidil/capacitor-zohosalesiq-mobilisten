export interface ZohoSalesIqPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
