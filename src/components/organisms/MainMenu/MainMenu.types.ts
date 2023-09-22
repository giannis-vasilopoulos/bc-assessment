export type MenuItem = { id: string; link: string; title: string };
export type MenuItemList = MenuItem & { submenu?: MenuItem[] };
export type MainMenuTypes = { data: MenuItemList[] };
