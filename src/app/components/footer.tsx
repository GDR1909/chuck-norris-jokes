import { prisma } from "../../../lib/prisma";

const Footer = async () => {
  try {
    // Besucheranzahl aus der Datenbank abrufen
    const visitorData = await prisma.visitorCount.findUnique({
      where: { id: 1 }, // Annahme: Besucher-ID ist 1
    });

    const visitorCount = visitorData?.count || 0;

    return (
      <footer>
        <p>Besucheranzahl: {visitorCount}</p>
      </footer>
    );
  } catch (error) {
    console.error("Fehler beim Abrufen der Besucheranzahl:", error);
    return (
      <footer>
        <p>Fehler beim Laden der Besucheranzahl.</p>
      </footer>
    );
  }
};

export default Footer;