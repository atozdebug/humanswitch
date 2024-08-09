import { get } from '.';
import { CategoryResponseType, type PaginatedDocumentResponseType } from '../types';
export async function getCategories() {
  const { data } = await get<CategoryResponseType>('/categories/');

  return data;
}

export async function getRecentDocumentKnowledge() {
  const { data } = await get<PaginatedDocumentResponseType>(
    '/documents/?page=1&limit=3'
  );
  return data;
}

// const { data } = await get<{ id: string }>('/categories', {
//   params: { id: 'dd' },
// });
// await postForm('/config', {
//   id: 'ss',
// });

// await request({
//   method: 'DELETE',
// });
