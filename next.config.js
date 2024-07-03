// next.config.ts
module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'merakiui.com',
        pathname: '**',
      },
    ],
  },
};
