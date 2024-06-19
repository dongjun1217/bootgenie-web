import createMDX from 'fumadocs-mdx/config';

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const debug = process.env.NODE_ENV !== "production";

const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  typescript: {
          // !! WARN !!
          // Dangerously allow production builds to successfully complete even if
          // your project has type errors.
          // !! WARN !!
          ignoreBuildErrors: true,
  },
};

export default withMDX(nextConfig);
