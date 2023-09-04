import { prisma } from "@/lib";
import { ProjectScheme } from "@/utils/types.scheme";
import type { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    try {
      const projects = await prisma.project.findMany();
      return res.status(200).json(projects);
    } catch (error: any) {
      console.log(error.message);
    }
  }

  if (req.method === "POST") {
    const data = req.body;

    try {
      await prisma.project.create({ data });
      const projects = await prisma.project.findMany();
      return res.status(201).json(projects);
    } catch (error: any) {
      console.log(error.message);
    }
  }

  if (req.method === "PATCH") {
    const { id, image, title, description, link }: ProjectScheme = req.body;

    try {
      await prisma.project.update({
        where: { id },
        data: { title, link, description, image },
      });
      const projects = await prisma.project.findMany();
      return res.status(201).json(projects);
    } catch (error: any) {
      console.log(error.message);
    }
  }

  if (req.method === "DELETE") {
    const id = req.body;

    try {
      await prisma.project.delete({ where: { id } });
      const projects = await prisma.project.findMany();
      return res.status(200).json(projects);
    } catch (error: any) {
      console.log(error.message);
    }
  }
};
