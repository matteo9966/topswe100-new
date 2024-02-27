export interface ListItem {
  description: string;
  href: string;
}
export interface ListItemWithState extends ListItem {
  completed: boolean;
}
