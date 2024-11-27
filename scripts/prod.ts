import "dotenv/config";
import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";

import * as schema from "../db/schema";

const sql = neon(process.env.DATABASE_URL!);
// @ts-ignore
const db = drizzle(sql, { schema });

const main = async () => {
  try {
    console.log("Seeding database");

    // Delete all existing data
    await Promise.all([
      db.delete(schema.userProgress),
      db.delete(schema.challenges),
      db.delete(schema.units),
      db.delete(schema.lessons),
      db.delete(schema.courses),
      db.delete(schema.challengeOptions),
      db.delete(schema.userSubscription),
    ]);

    // Insert courses
    const courses = await db
      .insert(schema.courses)
      .values([
        { title: "Spanish", imageSrc: "/es.svg", type: "INTERNATIONAL" },
        { title: "Tamang", imageSrc: "/tamang.png", type: "NATIVE" },
      ])
      .returning();

    // For each course, insert units
    for (const course of courses) {
      const units = await db
        .insert(schema.units)
        .values([
          {
            courseId: course.id,
            title: "Unit 1",
            description: `Learn the basics of ${course.title}`,
            order: 1,
          },
          {
            courseId: course.id,
            title: "Unit 2",
            description: `Learn intermediate ${course.title}`,
            order: 2,
          },
        ])
        .returning();

      // For each unit, insert lessons
      for (const unit of units) {
        const lessons = await db
          .insert(schema.lessons)
          .values([
            { unitId: unit.id, title: "Nouns", order: 1 },
            { unitId: unit.id, title: "Verbs", order: 2 },
            { unitId: unit.id, title: "Adjectives", order: 3 },
            { unitId: unit.id, title: "Phrases", order: 4 },
            { unitId: unit.id, title: "Sentences", order: 5 },
          ])
          .returning();

        // For each lesson, insert challenges
        for (const lesson of lessons) {
          const challenges = await db
            .insert(schema.challenges)
            .values([
              {
                lessonId: lesson.id,
                type: "SELECT",
                question: 'Which one of these is "the man"?',
                order: 1,
              },
              {
                lessonId: lesson.id,
                type: "SELECT",
                question: 'Which one of these is "the woman"?',
                order: 2,
              },
              {
                lessonId: lesson.id,
                type: "SELECT",
                question: 'Which one of these is "the boy"?',
                order: 3,
              },
              {
                lessonId: lesson.id,
                type: "ASSIST",
                question: '"the man"',
                order: 4,
              },
              {
                lessonId: lesson.id,
                type: "SELECT",
                question: 'Which one of these is "the zombie"?',
                order: 5,
              },
              {
                lessonId: lesson.id,
                type: "SELECT",
                question: 'Which one of these is "the robot"?',
                order: 6,
              },
              {
                lessonId: lesson.id,
                type: "SELECT",
                question: 'Which one of these is "the girl"?',
                order: 7,
              },
              {
                lessonId: lesson.id,
                type: "ASSIST",
                question: '"the zombie"',
                order: 8,
              },
              {
                lessonId: lesson.id,
                type: "SELECT",
                question: 'Which one of these is "the grandfather"?',
                order: 9,
              },
              {
                lessonId: lesson.id,
                type: "ASSIST",
                question: '"the grandfather"',
                order: 10,
              },
              {
                lessonId: lesson.id,
                type: "SELECT",
                question: 'Which one of these is "the grandmother"?',
                order: 11,
              },
              {
                lessonId: lesson.id,
                type: "ASSIST",
                question: '"the grandmother"',
                order: 12,
              },
              {
                lessonId: lesson.id,
                type: "SELECT",
                question: 'Which one of these is "the mother"?',
                order: 13,
              },
              {
                lessonId: lesson.id,
                type: "ASSIST",
                question: '"the mother"',
                order: 14,
              },
              {
                lessonId: lesson.id,
                type: "SELECT",
                question: 'Which one of these is "the father"?',
                order: 15,
              },
              {
                lessonId: lesson.id,
                type: "ASSIST",
                question: '"the father"',
                order: 16,
              },
              {
                lessonId: lesson.id,
                type: "SELECT",
                question: 'Which one of these is "the brother"?',
                order: 17,
              },
              {
                lessonId: lesson.id,
                type: "ASSIST",
                question: '"the brother"',
                order: 18,
              },
              {
                lessonId: lesson.id,
                type: "SELECT",
                question: 'Which one of these is "the sister"?',
                order: 19,
              },
              {
                lessonId: lesson.id,
                type: "ASSIST",
                question: '"the sister"',
                order: 20,
              },
            ])
            .returning();

          // For each challenge, insert challenge options
          for (const challenge of challenges) {
            if (challenge.order === 1) {
              await db.insert(schema.challengeOptions).values([
                {
                  challengeId: challenge.id,
                  correct: true,
                  text: "el hombre",
                  imageSrc: "/man.svg",
                  audioSrc: "/es_man.mp3",
                },
                {
                  challengeId: challenge.id,
                  correct: false,
                  text: "la mujer",
                  imageSrc: "/woman.svg",
                  audioSrc: "/es_woman.mp3",
                },
                {
                  challengeId: challenge.id,
                  correct: false,
                  text: "el chico",
                  imageSrc: "/boy.svg",
                  audioSrc: "/es_boy.mp3",
                },
              ]);
            }

            if (challenge.order === 2) {
              await db.insert(schema.challengeOptions).values([
                {
                  challengeId: challenge.id,
                  correct: true,
                  text: "la mujer",
                  imageSrc: "/woman.svg",
                  audioSrc: "/es_woman.mp3",
                },
                {
                  challengeId: challenge.id,
                  correct: false,
                  text: "el chico",
                  imageSrc: "/boy.svg",
                  audioSrc: "/es_boy.mp3",
                },
                {
                  challengeId: challenge.id,
                  correct: false,
                  text: "el hombre",
                  imageSrc: "/man.svg",
                  audioSrc: "/es_man.mp3",
                },
              ]);
            }

            if (challenge.order === 3) {
              await db.insert(schema.challengeOptions).values([
                {
                  challengeId: challenge.id,
                  correct: false,
                  text: "la mujer",
                  imageSrc: "/woman.svg",
                  audioSrc: "/es_woman.mp3",
                },
                {
                  challengeId: challenge.id,
                  correct: false,
                  text: "el hombre",
                  imageSrc: "/man.svg",
                  audioSrc: "/es_man.mp3",
                },
                {
                  challengeId: challenge.id,
                  correct: true,
                  text: "el chico",
                  imageSrc: "/boy.svg",
                  audioSrc: "/es_boy.mp3",
                },
              ]);
            }

            if (challenge.order === 4) {
              await db.insert(schema.challengeOptions).values([
                {
                  challengeId: challenge.id,
                  correct: false,
                  text: "la mujer",
                  audioSrc: "/es_woman.mp3",
                },
                {
                  challengeId: challenge.id,
                  correct: true,
                  text: "el hombre",
                  audioSrc: "/es_man.mp3",
                },
                {
                  challengeId: challenge.id,
                  correct: false,
                  text: "el chico",
                  audioSrc: "/es_boy.mp3",
                },
              ]);
            }

            if (challenge.order === 5) {
              await db.insert(schema.challengeOptions).values([
                {
                  challengeId: challenge.id,
                  correct: false,
                  text: "el hombre",
                  imageSrc: "/man.svg",
                  audioSrc: "/es_man.mp3",
                },
                {
                  challengeId: challenge.id,
                  correct: false,
                  text: "la mujer",
                  imageSrc: "/woman.svg",
                  audioSrc: "/es_woman.mp3",
                },
                {
                  challengeId: challenge.id,
                  correct: true,
                  text: "el zombie",
                  imageSrc: "/zombie.svg",
                  audioSrc: "/es_zombie.mp3",
                },
              ]);
            }

            if (challenge.order === 6) {
              await db.insert(schema.challengeOptions).values([
                {
                  challengeId: challenge.id,
                  correct: true,
                  text: "el robot",
                  imageSrc: "/robot.svg",
                  audioSrc: "/es_robot.mp3",
                },
                {
                  challengeId: challenge.id,
                  correct: false,
                  text: "el zombie",
                  imageSrc: "/zombie.svg",
                  audioSrc: "/es_zombie.mp3",
                },
                {
                  challengeId: challenge.id,
                  correct: false,
                  text: "el chico",
                  imageSrc: "/boy.svg",
                  audioSrc: "/es_boy.mp3",
                },
              ]);
            }

            if (challenge.order === 7) {
              await db.insert(schema.challengeOptions).values([
                {
                  challengeId: challenge.id,
                  correct: true,
                  text: "la nina",
                  imageSrc: "/girl.svg",
                  audioSrc: "/es_girl.mp3",
                },
                {
                  challengeId: challenge.id,
                  correct: false,
                  text: "el zombie",
                  imageSrc: "/zombie.svg",
                  audioSrc: "/es_zombie.mp3",
                },
                {
                  challengeId: challenge.id,
                  correct: false,
                  text: "el hombre",
                  imageSrc: "/man.svg",
                  audioSrc: "/es_man.mp3",
                },
              ]);
            }

            if (challenge.order === 8) {
              await db.insert(schema.challengeOptions).values([
                {
                  challengeId: challenge.id,
                  correct: false,
                  text: "la mujer",
                  audioSrc: "/es_woman.mp3",
                },
                {
                  challengeId: challenge.id,
                  correct: true,
                  text: "el zombie",
                  audioSrc: "/es_zombie.mp3",
                },
                {
                  challengeId: challenge.id,
                  correct: false,
                  text: "el chico",
                  audioSrc: "/es_boy.mp3",
                },
              ]);
            }
            if (challenge.order === 9) {
              await db.insert(schema.challengeOptions).values([
                {
                  challengeId: challenge.id,
                  correct: false,
                  imageSrc: "/granny.svg",
                  text: "Mam",
                  audioSrc: "/audios/tamang/grandmother.mp3",
                },
                {
                  challengeId: challenge.id,
                  correct: true,
                  imageSrc: "/pops.svg",
                  text: "Meme",
                  audioSrc: "/audios/tamang/grandfather.mp3",
                },
                {
                  challengeId: challenge.id,
                  correct: false,
                  imageSrc: "/mom.svg",
                  text: "Aama",
                  audioSrc: "/audios/tamang/mother.mp3",
                },
              ]);
            }
            if (challenge.order === 10) {
              await db.insert(schema.challengeOptions).values([
                {
                  challengeId: challenge.id,
                  correct: false,
                  text: "Mam",
                  audioSrc: "/audios/tamang/grandmother.mp3",
                },
                {
                  challengeId: challenge.id,
                  correct: true,
                  text: "Meme",
                  audioSrc: "/audios/tamang/grandfather.mp3",
                },
                {
                  challengeId: challenge.id,
                  correct: false,
                  text: "Aama",
                  audioSrc: "/audios/tamang/mother.mp3",
                },
              ]);
            }
            if (challenge.order === 11) {
              await db.insert(schema.challengeOptions).values([
                {
                  challengeId: challenge.id,
                  correct: true,
                  imageSrc: "/granny.svg",
                  text: "Mam",
                  audioSrc: "/audios/tamang/grandmother.mp3",
                },
                {
                  challengeId: challenge.id,
                  correct: false,
                  imageSrc: "/pops.svg",
                  text: "Meme",
                  audioSrc: "/audios/tamang/grandfather.mp3",
                },
                {
                  challengeId: challenge.id,
                  correct: false,
                  imageSrc: "/mom.svg",
                  text: "Aama",
                  audioSrc: "/audios/tamang/mother.mp3",
                },
              ]);
            }
            if (challenge.order === 12) {
              await db.insert(schema.challengeOptions).values([
                {
                  challengeId: challenge.id,
                  correct: true,
                  text: "Mam",
                  audioSrc: "/audios/tamang/grandmother.mp3",
                },
                {
                  challengeId: challenge.id,
                  correct: false,
                  text: "Meme",
                  audioSrc: "/audios/tamang/grandfather.mp3",
                },
                {
                  challengeId: challenge.id,
                  correct: false,
                  text: "Aama",
                  audioSrc: "/audios/tamang/mother.mp3",
                },
              ]);
            }
            if (challenge.order === 13) {
              await db.insert(schema.challengeOptions).values([
                {
                  challengeId: challenge.id,
                  correct: false,
                  imageSrc: "/granny.svg",
                  text: "Mam",
                  audioSrc: "/audios/tamang/grandmother.mp3",
                },
                {
                  challengeId: challenge.id,
                  correct: false,
                  imageSrc: "/pops.svg",
                  text: "Meme",
                  audioSrc: "/audios/tamang/grandfather.mp3",
                },
                {
                  challengeId: challenge.id,
                  correct: true,
                  imageSrc: "/mom.svg",
                  text: "Aama",
                  audioSrc: "/audios/tamang/mother.mp3",
                },
              ]);
            }
            if (challenge.order === 14) {
              await db.insert(schema.challengeOptions).values([
                {
                  challengeId: challenge.id,
                  correct: false,
                  text: "Mam",
                  audioSrc: "/audios/tamang/grandmother.mp3",
                },
                {
                  challengeId: challenge.id,
                  correct: false,
                  text: "Meme",
                  audioSrc: "/audios/tamang/grandfather.mp3",
                },
                {
                  challengeId: challenge.id,
                  correct: true,
                  text: "Aama",
                  audioSrc: "/audios/tamang/mother.mp3",
                },
              ]);
            }
            if (challenge.order === 15) {
              await db.insert(schema.challengeOptions).values([
                {
                  challengeId: challenge.id,
                  correct: false,
                  imageSrc: "/granny.svg",
                  text: "Mam",
                  audioSrc: "/audios/tamang/grandmother.mp3",
                },
                {
                  challengeId: challenge.id,
                  correct: true,
                  imageSrc: "/father.svg",
                  text: "Aappa",
                  audioSrc: "/audios/tamang/father.mp3",
                },
                {
                  challengeId: challenge.id,
                  correct: false,
                  imageSrc: "/mom.svg",
                  text: "Aama",
                  audioSrc: "/audios/tamang/mother.mp3",
                },
              ]);
            }
            if (challenge.order === 16) {
              await db.insert(schema.challengeOptions).values([
                {
                  challengeId: challenge.id,
                  correct: false,
                  text: "Mam",
                  audioSrc: "/audios/tamang/grandmother.mp3",
                },
                {
                  challengeId: challenge.id,
                  correct: true,
                  text: "Aappa",
                  audioSrc: "/audios/tamang/father.mp3",
                },
                {
                  challengeId: challenge.id,
                  correct: false,
                  text: "Aama",
                  audioSrc: "/audios/tamang/mother.mp3",
                },
              ]);
            }
            if (challenge.order === 17) {
              await db.insert(schema.challengeOptions).values([
                {
                  challengeId: challenge.id,
                  correct: true,
                  imageSrc: "/bro.svg",
                  text: "Jyojo",
                  audioSrc: "/audios/tamang/brother.mp3",
                },
                {
                  challengeId: challenge.id,
                  correct: false,
                  imageSrc: "/father.svg",
                  text: "Aappa",
                  audioSrc: "/audios/tamang/father.mp3",
                },
                {
                  challengeId: challenge.id,
                  correct: false,
                  imageSrc: "/mom.svg",
                  text: "Aama",
                  audioSrc: "/audios/tamang/mother.mp3",
                },
              ]);
            }
            if (challenge.order === 18) {
              await db.insert(schema.challengeOptions).values([
                {
                  challengeId: challenge.id,
                  correct: true,
                  text: "Jyojo",
                  audioSrc: "/audios/tamang/brother.mp3",
                },
                {
                  challengeId: challenge.id,
                  correct: false,
                  text: "Aappa",
                  audioSrc: "/audios/tamang/father.mp3",
                },
                {
                  challengeId: challenge.id,
                  correct: false,
                  text: "Aama",
                  audioSrc: "/audios/tamang/mother.mp3",
                },
              ]);
            }
            if (challenge.order === 19) {
              await db.insert(schema.challengeOptions).values([
                {
                  challengeId: challenge.id,
                  correct: false,
                  imageSrc: "/bro.svg",
                  text: "Jyojo",
                  audioSrc: "/audios/tamang/brother.mp3",
                },
                {
                  challengeId: challenge.id,
                  correct: false,
                  imageSrc: "/father.svg",
                  text: "Aappa",
                  audioSrc: "/audios/tamang/father.mp3",
                },
                {
                  challengeId: challenge.id,
                  correct: true,
                  imageSrc: "/girl.svg",
                  text: "nana",
                  audioSrc: "/audios/tamang/sister.mp3",
                },
              ]);
            }
            if (challenge.order === 20) {
              await db.insert(schema.challengeOptions).values([
                {
                  challengeId: challenge.id,
                  correct: false,
                  text: "Jyojo",
                  audioSrc: "/audios/tamang/brother.mp3",
                },
                {
                  challengeId: challenge.id,
                  correct: false,
                  text: "Aappa",
                  audioSrc: "/audios/tamang/father.mp3",
                },
                {
                  challengeId: challenge.id,
                  correct: true,
                  text: "nana",
                  audioSrc: "/audios/tamang/sister.mp3",
                },
              ]);
            }
          }
        }
      }
    }
    console.log("Database seeded successfully");
  } catch (error) {
    console.error(error);
    throw new Error("Failed to seed database");
  }
};

main();
