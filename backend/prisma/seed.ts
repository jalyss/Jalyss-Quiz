
import { PrismaClient } from '@prisma/client';

import { level, prop, questions } from './data';

// initialize Prisma Client
const prisma = new PrismaClient();

async function main() {
  const admin = await prisma.admin.findUnique({
    where : {
      email : "basma@jalyss.com"
    }
  });



  const questionss = await Promise.all(
    questions.map(async (e) => {
      return await prisma.question.create({
        data: {
          question: e.question,
          levelId: e.levelId,
          imageUrl: e.imageUrl,
          adminId: admin.id,
          answers: {
            create: e.answers.map((answer) => {
              return answer;
            }),
          },
        },
      });
    }),
  );


}

// execute the main function
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // close Prisma Client at the end
    await prisma.$disconnect();
  });
