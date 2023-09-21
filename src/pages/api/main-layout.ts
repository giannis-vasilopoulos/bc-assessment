// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import mockData from "@/mocks/main-layout.json";

type MenuItem = { id: string; link: string; title: string };

type Data = {
  mainMenu: (MenuItem & { submenu?: MenuItem[] })[];
  footer: MenuItem[][];
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json(mockData);
}
