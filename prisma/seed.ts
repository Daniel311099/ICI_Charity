// prisma/seed.ts
import { PrismaClient } from '@prisma/client';
import { faqs, impacts, pages, partners, sections, stats, testimonials } from './seedData';
// const runtime = 'edge'
// const sections = [
//     {
//         title: "Contact Us",
//         content: [
//             {
//                 title: "Contact Us",
//                 content: "Reach out for support, to ask questions, or to join our cause. Together, we can make a world of difference. (Use the contact form)"
//             }
//         ]
//     }
// ]

const prisma = new PrismaClient();

async function main() {
    console.log("Seeding")

    // await prisma.page.createMany({ data: pages });


    for (const section of sections) {
        const createdSection = await prisma.section.create({
            data: {
                title: section.title,
            },
        });

        for (const element of section.content) {
            await prisma.sectionElement.create({
                data: {
                    slug: `${createdSection.id}-${element.title.toLowerCase().replace(/ /g, '-')}`,
                    title: element.title,
                    content: element.content,
                    sectionId: createdSection.id,
                },
            });
        }
    }


    // const records = await prisma.fAQ.findMany()

    // console.log({records})


    await prisma.partner.createMany({ data: partners });
    // await prisma.testimonial.createMany({ data: testimonials });
    await prisma.impact.createMany({ data: impacts });
    await prisma.stat.createMany({ data: stats });
    await prisma.fAQ.createMany({ data: faqs });

    console.log('Seeding completed.');
}
main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
