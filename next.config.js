/** @type {import('next').NextConfig} */
const nextConfig = {
  // next-auth conflict - needs canary, but canary is not compatible yet
  experimental: {
    // ppr: true,
  },
};

module.exports = nextConfig;
