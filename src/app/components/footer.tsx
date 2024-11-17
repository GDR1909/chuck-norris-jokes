import { prisma } from "../../../lib/prisma";


/**
 * Footer component.
 * 
 * This component fetches and displays the number of visitors to the site. 
 * It interacts with the database to retrieve or increment the visitor count each time the page is loaded.
 * If there's an error while fetching the data, it displays an error message instead.
 * 
 * @returns {JSX.Element} The rendered footer with the visitor count or an error message.
 */
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
    console.error("Error getting visitor count:", error);
    return (
      <footer className="flex justify-center p-8">
        <p>Error loading visitor count.</p>
      </footer>
    );
  }
};

export default Footer;