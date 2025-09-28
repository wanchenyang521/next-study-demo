import {PrismaClient} from "@/generated/prisma";


export const db = new PrismaClient();
db.snipper.create({
    data: {
        title: 'React',
        code: 'code'
    }
}).then(console.log)