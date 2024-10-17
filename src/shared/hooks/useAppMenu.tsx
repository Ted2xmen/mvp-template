import { useMemo } from "react";
import { Rss, Telescope, User } from "lucide-react";
import { Routes } from "@/lib/enums";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const useAppMenu = (user: any, profileName: string) => {
  const appMenu = useMemo(() => {
    if (!user) {
      return {
        topMenu: [
          {
            title: "Home",
            href: "/",
          },
        ],
        sidebarMenu: [
          {
            title: "Curated Articles",
            href: Routes.curated,
            icon: <Telescope className="size-4" />,
          },
          {
            title: "RSS Feeds",
            href: Routes.feeds,
            icon: <Rss className="size-4" />,
          },
        ],
        footerMenu: [],
        quickMenu: [
          {
            title: "About",
            href: "/about",
          },
        ],
        suggestionMenu: [
          {
            title: "Curated Articles",
            href: Routes.curated,
            icon: <Telescope className="size-4" />,
          },
          {
            title: "RSS Feeds",
            href: Routes.feeds,
            icon: <Rss className="size-4" />,
          },
        ],
      };
    }

    return {
      topMenu: [
        {
          title: "Home",
          href: "/",
        },
      ],
      sidebarMenu: [
        {
          title: "Curated Articles",
          href: Routes.curated,
          icon: <Telescope className="size-4" />,
        },
        {
          title: "RSS Feeds",
          href: Routes.feeds,
          icon: <Rss className="size-4" />,
        },
        {
          title: "Profile",
          href: `/${profileName}`,
          icon: <User className="size-4" />,
        },
      ],
      footerMenu: [],
      accountMenu: [
        {
          title: "Profile",
          href: `/${profileName}`,
          icon: <User className="size-4" />,
        },
        {
          title: "Logout",
          //     onClick: logout,
        },
      ],
      quickMenu: [
        {
          title: "Profile",
          href: `/${profileName}`,
          icon: <User className="size-4" />,
        },
      ],
      suggestionMenu: [
        {
          title: "Clean Code Articles",
          href: Routes.curated,
          icon: <User className="size-4" />,
        },
        {
          title: "Design Related Articles",
          href: Routes.curated,
          icon: <User className="size-4" />,
        },
      ],
    };
  }, [user, profileName]);

  return appMenu;
};

// const {
//   topMenu,
//   sidebarMenu,
//   footerMenu,
//   quickMenu,
//   accountMenu,
//   suggestionMenu,
// } = useAppMenu(user, profileName);
