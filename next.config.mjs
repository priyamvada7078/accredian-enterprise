/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Needed so next/image will serve public/images/hero-illustration.svg.
    // Locked down per Next's own recommendation: scripts disabled, served
    // as an attachment, since it's only ever our own static asset.
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

export default nextConfig;
