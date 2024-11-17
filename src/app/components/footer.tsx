import { prisma } from "../../../lib/prisma";

const Footer = async () => {
  try {
    const visitorData = await prisma.visitorCount.upsert({
      where: { id: 1 },
      update: { count: { increment: 1 } },
      create: { id: 1, count: 1 },
    });

    return (
      <footer className="flex justify-center p-8">
        <p>Number of visitors: {visitorData.count}</p>
      </footer>
    );
  } catch (error) {
    console.error("Fehler beim Abrufen der Besucheranzahl:", error);
    return (
      <footer className="flex justify-center p-8">
        <p>Error loading visitor count.</p>
      </footer>
    );
  }
};

export default Footer;