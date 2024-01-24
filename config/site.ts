import { env } from "@/env.mjs";

export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "AI Fusion Kit",
  description:
    "A web-based AI copilot powered by GPT. Fully built in Next.js",
  links: {
    x: "",
    github: "https://github.com/dayo4/web_ai_assistant",
    docs: "",
  },
};

export const getURL = () => {
  let url = env.NEXT_PUBLIC_APP_URL || "http://localhost:3000/";
  // Make sure to include `https://` when not localhost.
  url = url.includes("http") ? url : `https://${url}`;
  // Make sure to include a trailing `/`.
  url = url.charAt(url.length - 1) === "/" ? url : `${url}/`;
  return url;
};
