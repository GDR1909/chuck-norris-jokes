import { PrismaClient } from "@prisma/client";


// Global variable to store the Prisma client instance in a way that ensures it is reused in development mode
const globalForPrisma = global as unknown as { prisma: PrismaClient };


/**
 * Prisma client instance.
 * 
 * The Prisma client is instantiated here and reused in development mode to avoid creating multiple client instances
 * when hot-reloading occurs. In production, a new instance of PrismaClient is created each time the app runs.
 * 
 * The Prisma client also logs database queries in development for debugging purposes.
 */
export const prisma = globalForPrisma.prisma || new PrismaClient({ log: ["query"] });


// In development, we store the Prisma client instance in the global object to prevent 
// creating multiple instances of PrismaClient during hot reloading
if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;