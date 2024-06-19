import { createSearchAPI } from 'fumadocs-core/search/server';
import { getPages } from '@/app/source';

// getPages 함수를 이용하여 정적 데이터 로드
const pages = getPages().map((page) => ({
  title: page.data.title,
  structuredData: page.data.exports.structuredData,
  id: page.url,
  url: page.url,
}));

// 검색 API 생성
const searchAPI = createSearchAPI('advanced', {
  indexes: pages,
});

export const GET = async (request: Request) => {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get('query') || '';
  const locale = searchParams.get('locale') || '';
  const tag = searchParams.get('tag') || '';

  const results = searchAPI.search(query, { locale, tag });
  return new Response(JSON.stringify(results), {
    headers: { 'Content-Type': 'application/json' },
  });
};
