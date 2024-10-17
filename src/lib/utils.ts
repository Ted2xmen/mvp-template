import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// export const rssParser = async (url: any) => {
//   const parser = new Parser();
//   const feed = await parser?.parseURL(url);
//   return feed;
// };
