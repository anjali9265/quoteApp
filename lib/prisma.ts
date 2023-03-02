// lib/prisma.ts
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export async function getStaticProps() {
    // Get all foods in the "food" db
    const allfoods = await prisma.counter.findMany();
    return {
        props: allfoods,
    };
}

export default prisma;