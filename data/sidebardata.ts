import { type IconType } from "react-icons";
import { FaComments, FaHouse, FaPerson } from "react-icons/fa6";

interface TypeItem {
  label: string;
  redirect: string;
  Icon: IconType;
}
export const sidebartop: TypeItem[] = [
  {
    label: "Home",
    redirect: "/",
    Icon: FaHouse,
  },
  {
    label: "Profile",
    redirect: "/profile",
    Icon: FaPerson,
  },
];

export const sidebarfav: TypeItem[] = [
  {
    label: "Messages",
    redirect: "/messages",
    Icon: FaComments,
  },
  {
    label: "Friends",
    redirect: "/friends",
    Icon: FaPerson,
  },
  {
    label: "Feed",
    redirect: "/feed",
    Icon: FaPerson,
  },
  {
    label: "Stories",
    redirect: "/stories",
    Icon: FaPerson,
  },
  {
    label: "Events",
    redirect: "/events",
    Icon: FaPerson,
  },
  {
    label: "Memories",
    redirect: "/memories",
    Icon: FaPerson,
  },
];
