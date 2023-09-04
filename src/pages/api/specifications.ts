import { prisma } from "@/lib";
import { SpecificationScheme } from "@/utils/types.scheme";
import type { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    try {
      const specifications = await prisma.specification.findMany();
      return res.status(200).json(specifications);
    } catch (error: any) {
      console.log(error.message);
    }
  }

  if (req.method === "POST") {
    const data = req.body;

    try {
      await prisma.specification.create({ data });
      const specifications = await prisma.specification.findMany();
      return res.status(201).json(specifications);
    } catch (error: any) {
      console.log(error.message);
    }
  }

  if (req.method === "PATCH") {
    const { id, color, description, title }: SpecificationScheme = req.body;

    try {
      await prisma.specification.update({
        where: { id },
        data: { title, color, description },
      });
      const specifications = await prisma.specification.findMany();
      return res.status(201).json(specifications);
    } catch (error: any) {
      console.log(error.message);
    }
  }

  if (req.method === "DELETE") {
    const id = req.body;

    try {
      await prisma.specification.delete({ where: { id } });
      const specifications = await prisma.specification.findMany();
      return res.status(200).json(specifications);
    } catch (error: any) {
      console.log(error.message);
    }
  }
};
