import { prisma } from "../../../lib/prisma";

const Footer = async () => {
  try {
    const visitorData = await prisma.visitorCount.findUnique({
      where: { id: 1 },
    });

    const visitorCount = visitorData?.count || 0;

    return (
      <footer className="flex justify-center p-8">
        <p>Number of visitors: {visitorCount}</p>
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