import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../generated/prisma/client";
import "dotenv/config";
import { Pool } from "pg"
import { hashSync } from "bcrypt";

const connectionString = `${process.env.DATABASE_URL}`;
const pool = new Pool({ connectionString });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function up() {
    await prisma.user.createMany({
        data: [
            {
                fullName: "Admin User",
                email: "Admin@example.com",
                password: hashSync("Admin1234", 10),
                verified: new Date(),
                role: "ADMIN",
            },
            {
                fullName: "Regular User",
                email: "User@example.com",
                password: hashSync("User1234", 10),
                verified: new Date(),
                role: "USER",
            }
        ]
    });

   
}

async function down() {
    await prisma.$executeRaw`TRUNCATE TABLE "User" RESTART IDENTITY CASCADE`;
}
            

async function main() {
  try {
    await down();
    await up();
  } catch (e) {
    console.error(e);
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });

