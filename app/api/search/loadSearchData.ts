// app/api/search/loadSearchData.ts
import { getPages } from '@/app/source';

export const loadSearchData = () => {
  return getPages().map((page) => ({
    title: page.data.title,
    structuredData: page.data.exports.structuredData,
    id: page.url,
    url: page.url,
  }));
};
