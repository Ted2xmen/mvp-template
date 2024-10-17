import {
  Bookmark,
  BookmarkCheck,
  ExternalLink,
  Hash,
  Heart,
  Home,
  LibraryBig,
  Newspaper,
  RssIcon,
  UserRoundPen,
  X,
  Cloud,
  CreditCard,
  Keyboard,
} from "lucide-react";

export type Icons = keyof typeof iconMap;

export const iconMap = {
  BookmarkCheck: BookmarkCheck,
  ExternalLink: ExternalLink,
  Heart: Heart,
  UserRoundPen: UserRoundPen,
  Home: Home,
  Hash: Hash,
  Bookmark: Bookmark,
  RssIcon: RssIcon,
  LibraryBig: LibraryBig,
  Newspaper: Newspaper,
  X: X,
  Cloud: Cloud,
  CreditCard: CreditCard,
  Github: CreditCard,
  Keyboard: Keyboard,
};
