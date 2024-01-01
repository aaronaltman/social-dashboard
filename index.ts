import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // ... you will write your Prisma Client queries here
  const allUsers = await prisma.users.findMany();
  console.log(allUsers);
}

// Path: package.json
