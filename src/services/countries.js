import { client, checkError } from './client';

export async function getCountries() {
  const resp = await client.from('countries').select();
  return checkError(resp);
}