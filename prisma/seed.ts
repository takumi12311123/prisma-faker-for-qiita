import { PrismaClient } from "@prisma/client";
import { faker } from "@faker-js/faker";

const prisma = new PrismaClient();
async function main() {
  for (let index = 0; index < 100; index++) {
    await prisma.user.create({
      data: {
        name: faker.name.fullName(),
        email: faker.internet.email(),
        posts: {
          createMany: {
            data: [
              {
                title: faker.name.jobTitle(),
              },
              {
                title: faker.name.jobTitle(),
              },
              {
                title: faker.name.jobTitle(),
              },
              {
                title: faker.name.jobTitle(),
              },
              {
                title: faker.name.jobTitle(),
              },
            ],
          },
        },
      },
    });
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
