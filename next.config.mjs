import createMDX from 'fumadocs-mdx/config';

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const debug = process.env.NODE_ENV !== "production";

const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  output: "export",
};

// MDX 설정을 nextConfig와 통합
const finalConfig = withMDX({
  ...nextConfig,
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'], // 필요 시 확장자 설정 추가
});

export default withMDX(nextConfig);
