import "dotenv/config";
import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";

import * as schema from "../db/schema";

const sql = neon(process.env.DATABASE_URL!);

const db = drizzle(sql, { schema });

const main = async () => {
    try{
        console.log("Seeding database");

        await db.delete(schema.courses);
        await db.delete(schema.userProgress);
        await db.delete(schema.units);
        await db.delete(schema.lessons);
        await db.delete(schema.challenges);
        await db.delete(schema.challengeOptions);
        await db.delete(schema.challengeProgress);
        await db.delete(schema.userSubscription);


        await db.insert(schema.courses).values([
            {
                id: 1,
                title: "Spanish",
                imageSrc: "/flags/es.svg",
                type: "INTERNATIONAL",
            },
            {
                id: 2,
                title: "Japanese",
                imageSrc: "/flags/jp.svg",
                type: "INTERNATIONAL",
            },
            {
                id: 3,
                title: "Tamang",
                imageSrc: "/tamang.png",
                type: "NATIVE",
            },
        ]);


        await db.insert(schema.units).values([
            {
                id:1,
                courseId: 1, //Spanish
                title: "Unit 1",
                description: "Learn the basics of Spanish.",
                order: 1,
            }
        ]);

        await db.insert(schema.lessons).values([
            {
                id:1,
                unitId: 1, //unit 1 (Learn the basics..)
                order: 1,
                title: "Nouns",
            },
            {
                id:2,
                unitId: 1, //unit 1 (Learn the basics..)
                order: 2,
                title: "Verbs",
            },
            {
                id:3,
                unitId: 1, //unit 1 (Learn the basics..)
                order: 3,
                title: "Verbs",
            },
            {
                id:4,
                unitId: 1, //unit 1 (Learn the basics..)
                order: 4,
                title: "Verbs",
            },
            {
                id:5,
                unitId: 1, //unit 1 (Learn the basics..)
                order: 5,
                title: "Verbs",
            },
        ]);

        await db.insert(schema.challenges).values([
            {
                id:1,
                lessonId: 1, // Nouns
                type: "SELECT",
                order: 1,
                question: 'Which one of these is the "The man"?',
            },
            {
                id:2,
                lessonId: 1, // Nouns
                type: "ASSIST",
                order: 2,
                question: '"The man"?',
            },
            {
                id:3,
                lessonId: 1, // Nouns
                type: "SELECT",
                order: 3,
                question: 'Which one of these is the "The Robot"?',
            },

        ]);

        await db.insert(schema.challengeOptions).values([
            {
                challengeId: 1,
                imageSrc: "/man.svg",
                correct: true,
                text: "el hombre",
                audioSrc: "/es_man.mp3",
            },
            {
                challengeId: 1,
                imageSrc: "/woman.svg",
                correct: false,
                text: "la mujer",
                audioSrc: "/es_woman.mp3",
            },
            {
                challengeId: 1,
                imageSrc: "/robot.svg",
                correct: false,
                text: "el robot",
                audioSrc: "/es_robot.mp3",
            },
        ]);

        await db.insert(schema.challengeOptions).values([
            {
                challengeId: 2,
                correct: true,
                text: "el hombre",
                audioSrc: "/es_man.mp3",
            },
            {
                challengeId: 2,
                correct: false,
                text: "la mujer",
                audioSrc: "/es_woman.mp3",
            },
            {
                challengeId: 2,
                correct: false,
                text: "el robot",
                audioSrc: "/es_robot.mp3",
            },
        ]);

        await db.insert(schema.challengeOptions).values([
            {
                challengeId: 3,
                imageSrc: "/man.svg",
                correct: false,
                text: "el hombre",
                audioSrc: "/es_man.mp3",
            },
            {
                challengeId: 3,
                imageSrc: "/woman.svg",
                correct: false,
                text: "la mujer",
                audioSrc: "/es_woman.mp3",
            },
            {
                challengeId: 3,
                imageSrc: "/robot.svg",
                correct: true,
                text: "el robot",
                audioSrc: "/es_robot.mp3",
            },
        ]);

        await db.insert(schema.challenges).values([
            {
                id:4,
                lessonId: 2, // Nouns
                type: "SELECT",
                order: 1,
                question: 'Which one of these is the "The man"?',
            },
            {
                id:5,
                lessonId: 2, // Nouns
                type: "ASSIST",
                order: 2,
                question: '"The man"?',
            },
            {
                id:6,
                lessonId: 2, // Nouns
                type: "SELECT",
                order: 3,
                question: 'Which one of these is the "The Robot"?',
            },

        ]);

        await db.insert(schema.challenges).values([
            {
                id:7,
                lessonId: 3, // Nouns
                type: "SELECT",
                order: 1,
                question: 'Which one of these is the "The man"?',
            },
            {
                id:8,
                lessonId: 3, // Nouns
                type: "ASSIST",
                order: 2,
                question: '"The man"?',
            },
            {
                id:9,
                lessonId: 3, // Nouns
                type: "SELECT",
                order: 3,
                question: 'Which one of these is the "The Robot"?',
            },

        ]);
        


        //Tamang
        await db.insert(schema.units).values([
            {
                id:2,
                courseId: 3, //Spanish
                title: "Unit 1",
                description: "Learn the basics of Tamang.",
                order: 1,
            }
        ]);

        await db.insert(schema.lessons).values([
            {
                id:6,
                unitId: 2, //unit 1 (Learn the basics..)
                order: 1,
                title: "Nouns",
            },
            {
                id:7,
                unitId: 2, //unit 1 (Learn the basics..)
                order: 2,
                title: "Verbs",
            },
            {
                id:8,
                unitId: 2, //unit 1 (Learn the basics..)
                order: 3,
                title: "Verbs",
            },
            {
                id:9,
                unitId: 2, //unit 1 (Learn the basics..)
                order: 4,
                title: "Verbs",
            },
            {
                id:10,
                unitId: 2, //unit 1 (Learn the basics..)
                order: 5,
                title: "Verbs",
            },
        ]);

        await db.insert(schema.challenges).values([
            {
                id:10,
                lessonId: 6, // Nouns
                type: "SELECT",
                order: 1,
                question: 'In tamang "Mother" is Known as?',
            },
            {
                id:11,
                lessonId: 6, // Nouns
                type: "SELECT",
                order: 2,
                question: 'Which one is "GrandMother"?',
            },
            {
                id:12,
                lessonId: 6, // Nouns
                type: "ASSIST",
                order: 3,
                question: 'Mother',
            },
            {
                id:13,
                lessonId: 6, // Nouns
                type: "ASSIST",
                order: 4,
                question: 'GrandMother',
            },

        ]);
        await db.insert(schema.challengeOptions).values([
            {
                challengeId: 10,
                imageSrc: "/pops.svg",
                correct: false,
                text: "ME ME",
                audioSrc: "/audios/tamang/grandfather.mp3",
            },
            {
                challengeId: 10,
                correct: false,
                imageSrc: "/father.svg",
                text: "Aappa",
                audioSrc: "/audios/tamang/father.mp3",
              },
              {
                challengeId: 10,
                correct: true,
                imageSrc: "/mom.svg",
                text: "Aama",
                audioSrc: "/audios/tamang/mother.mp3",
              },
        ]);
        await db.insert(schema.challengeOptions).values([
              {
                challengeId: 11,
                correct: false,
                imageSrc: "/mom.svg",
                text: "Aama",
                audioSrc: "/audios/tamang/mother.mp3",
              },
              {
                challengeId: 11,
                correct: true,
                imageSrc: "/granny.svg",
                text: "Mam",
                audioSrc: "/audios/tamang/grandmother.mp3",
              },
              {
                challengeId: 11,
                correct: false,
                imageSrc: "/girl.svg",
                text: "nana",
                audioSrc: "/audios/tamang/sister.mp3",
              },
        ]);
        await db.insert(schema.challengeOptions).values([
            {
              challengeId: 12,
              correct: true,
              text: "Aama",
              audioSrc: "/audios/tamang/mother.mp3",
            },
            {
              challengeId: 12,
              correct: false,
              text: "Mam",
              audioSrc: "/audios/tamang/grandmother.mp3",
            },
            {
              challengeId: 12,
              correct: false,
              text: "nana",
              audioSrc: "/audios/tamang/sister.mp3",
            },
      ]);
      await db.insert(schema.challengeOptions).values([
        {
          challengeId: 13,
          correct: false,
          text: "la nina",
          audioSrc: "/es_girl.mp3",
        },
        {
          challengeId: 13,
          correct: false,
          text: "el hombre",
          audioSrc: "/es_man.mp3",
        },
        {
          challengeId: 13,
          correct: true,
          text: "nana",
          audioSrc: "/audios/tamang/sister.mp3",
        },
  ]);
        console.log("Seeding finished");
    } catch (error) {
        console.error(error);
        throw new Error("Failed to seed the database");
    }
};
main();