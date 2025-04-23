interface EllipsisItem {
  label: string;
  redirect?: string;
}

export const ellipsisData: EllipsisItem[] = [
  {
    label: "Messages",
    redirect: "/messages",
  },
  {
    label: "Notifications",
    redirect: "/notifications",
  },
  {
    label: "Search",
  },
];
