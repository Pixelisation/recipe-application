const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
  const user = await prisma.user.upsert({
    where: {
      email: "test@test.com",
    },
    update: {},
    create: {
      email: "test@test.com",
      username: "test user",
      password: 
      "f4fe4fg4tb4ugbh487g4g7f4ty948gfbryubgduigs47gt8934t2er4y7fvgeruyfgvberfgv84",
    },
  });
  console.log({ user });
}
main()
  .then(() => prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });