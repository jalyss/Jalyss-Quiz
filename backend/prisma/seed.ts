
import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';
import { answer, level, prop, questions } from './data';

// initialize Prisma Client
const prisma = new PrismaClient();

async function main() {
  const salt = await bcrypt.genSalt();
    const admin = await prisma.admin.create({
        data : {
            email : "basma@jalyss.com",
            password : await bcrypt.hash("jalyss7",salt),
            fullName : "بسمة كريم"
        }
    })

    const levels = await prisma.level.createMany({
        data: level
    })
    const questionss = await prisma.question.createMany({
        data:questions
    })
    const wheelRewards = await prisma.wheelProposition.createMany({
        data : prop
    })
    const answers = await prisma.answer.createMany({
        data :answer
    })
    
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
