/** @type {import('next').NextConfig} */
module.exports = {
  rewrites: async () => {
    return [{ source: "/", destination: "/root" }];
  },
  reactStrictMode: true,
};
