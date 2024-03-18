/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  transpilePackages: ["@repo/ui"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ysctqzmvjoqsftxjrvto.supabase.co",
        port: "",
        pathname:
          "/storage/v1/object/public/images/6cfca6ca-9faf-415e-a37b-5f9e78fcdb84/**",
      },
    ],
  },
};
