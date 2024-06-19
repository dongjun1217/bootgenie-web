// app/api/search/route.tsx
import { createSearchAPI } from 'fumadocs-core/search/server';
import { loadSearchData } from './loadSearchData';

const searchIndexes = loadSearchData();

export const { GET } = createSearchAPI('advanced', {
  indexes: searchIndexes.map((page) => ({
    title: page.title,
    structuredData: page.structuredData,
    id: page.id,
    url: page.url,
  })),
});
