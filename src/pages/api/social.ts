import { prisma } from "@/lib";
import { SocialNetworkScheme } from "@/utils/types.scheme";
import type { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    try {
      const socialNetworks = await prisma.socialNetwork.findMany();
      return res.status(200).json(socialNetworks);
    } catch (error: any) {
      console.log(error.message);
    }
  }

  if (req.method === "POST") {
    const data = req.body;

    try {
      await prisma.socialNetwork.create({ data });
      const socialNetworks = await prisma.socialNetwork.findMany();
      return res.status(201).json(socialNetworks);
    } catch (error: any) {
      console.log(error.message);
    }
  }

  if (req.method === "PATCH") {
    const { id, icon, link }: SocialNetworkScheme = req.body;

    try {
      await prisma.socialNetwork.update({
        where: { id },
        data: { icon, link },
      });
      const socialNetworks = await prisma.socialNetwork.findMany();
      return res.status(201).json(socialNetworks);
    } catch (error: any) {
      console.log(error.message);
    }
  }

  if (req.method === "DELETE") {
    const id = req.body;

    try {
      await prisma.socialNetwork.delete({ where: { id } });
      const socialNetworks = await prisma.socialNetwork.findMany();
      return res.status(200).json(socialNetworks);
    } catch (error: any) {
      console.log(error.message);
    }
  }
};
