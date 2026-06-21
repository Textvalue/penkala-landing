import type { NextConfig } from "next";

// Standalone repo: this app IS the repo root, so no root pinning is needed —
// there's a single lockfile and Vercel's file-tracing root already matches.
const nextConfig: NextConfig = {};

export default nextConfig;
