import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

export const getReadTime = (content: string | null, wpm = 265): number => {
  if (!content) {
    return 0;
  }

  return Math.ceil(content.trim().split(/\s+/).length / wpm);
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const formatDate = (date: any, type?: string) => {
  if (type === "relative") {
    return dayjs(date).fromNow();
  }
  return dayjs(date).format(type || "DD MMMM YYYY");
};
