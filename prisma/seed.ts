import { faker } from "@faker-js/faker";
import { PrismaClient } from "../src/generated/prisma";

const prisma = new PrismaClient();

function capitalizeFirstLetter(word: string): string {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

const userIds = ["google-oauth2|113741891674067498133"];

async function main() {
  for (const userId of userIds) {
    const project = await prisma.project.create({
      data: {
        user_id: userId,
        name: capitalizeFirstLetter(faker.word.noun()),
      },
    });

    for (let i = 1; i <= 2; i++) {
      await prisma.task.create({
        data: {
          user_id: userId,
          project_id: i % 2 === 0 ? project.id : null, // Alternate between assigning to the project and leaving it null
          name: `${capitalizeFirstLetter(faker.word.verb())} ${faker.word.noun()}`,
          description: faker.lorem.sentence(),
          dueDate: faker.date.future(),
        },
      });
    }
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
