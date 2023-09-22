// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import mockData from "@/mocks/main-layout.json";
import { MenuItem, MenuItemList } from "@/components/organisms/MainMenu";

type Data = {
  mainMenu: MenuItemList[];
  footer: { id: string; items: MenuItem[] }[];
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json(mockData);
}
