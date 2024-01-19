import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
async function main() {
  const aras = await prisma.user.upsert({
    where: { email: 'aras@gmail.io' },
    update: {},
    create: {
      email: 'aras@gmail.com',
      name: 'Aras',
      password: '1234'
    },
  })
  const arsy = await prisma.user.upsert({
    where: { email: 'arsy@prisma.io' },
    update: {},
    create: {
      email: 'arsy@prisma.io',
      name: 'Arsy',
      password: '1234'
    },
  })
  console.log({ aras, arsy })
}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })