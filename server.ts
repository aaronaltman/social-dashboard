import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const post = await prisma.post.create({
    data: {
      title: "Prisma makes databases easy",
      content: "You wouldn't believe how much I love Prisma!",
    },
  });
  console.log(post);
}

main();
