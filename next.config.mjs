/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true, // 이 옵션이 SSR 스타일 자동 처리
  },
};

export default nextConfig;
