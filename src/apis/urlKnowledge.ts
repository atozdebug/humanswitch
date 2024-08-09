import { get } from '.';
import { CategoryResponseType, type PaginatedUrlResponseType } from '../types';

export async function getRecentUrlsKnowledge() {
  const { data } = await get<PaginatedUrlResponseType>('/urls/?page=1&limit=3');
  return data;
}
