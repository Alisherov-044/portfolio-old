import { prisma } from "@/lib";
import { SkillSetScheme } from "@/utils/types.scheme";
import type { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    try {
      const skillSets = await prisma.skillSet.findMany();
      return res.status(200).json(skillSets);
    } catch (error: any) {
      console.log(error.message);
    }
  }

  if (req.method === "POST") {
    const data = req.body;

    try {
      await prisma.skillSet.create({ data });
      const skillSets = await prisma.skillSet.findMany();
      return res.status(201).json(skillSets);
    } catch (error: any) {
      console.log(error.message);
    }
  }

  if (req.method === "PATCH") {
    const { id, icon, title, description, link }: SkillSetScheme = req.body;

    try {
      await prisma.skillSet.update({
        where: { id },
        data: { title, link, description, icon },
      });
      const skillSets = await prisma.skillSet.findMany();
      return res.status(201).json(skillSets);
    } catch (error: any) {
      console.log(error.message);
    }
  }

  if (req.method === "DELETE") {
    const id = req.body;

    try {
      await prisma.skillSet.delete({ where: { id } });
      const skillSets = await prisma.skillSet.findMany();
      return res.status(200).json(skillSets);
    } catch (error: any) {
      console.log(error.message);
    }
  }
};
