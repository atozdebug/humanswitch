import { get, post, request } from '.';
import { CategoryResponseType, type PaginatedFaqResponseType } from '../types';

export async function getRecentFaqKnowledge() {
  const { data } = await get<PaginatedFaqResponseType>('/faqs/?page=1&limit=3');
  return data;
}

export async function addFaq(data) {
  const res = post('/faqs/', data);
}

// export async function deleteFaq(id) {
//   const  = post('/faqs/', data);

// }
