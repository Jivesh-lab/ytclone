import type { NextConfig } from "next";
import { join } from "path";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  env:{
    BACKEND_URL:process.env.BACKEND_URL,
  },
  outputFileTracingRoot: join(__dirname),
};

export default nextConfig;
