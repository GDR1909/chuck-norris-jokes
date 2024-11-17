import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";


/**
 * Custom font setup for the layout.
 * 
 * This setup uses two local fonts: Geist Sans and Geist Mono.
 * The fonts are loaded using Next.js' `localFont` function and applied with CSS variables.
 */
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});


/**
 * Metadata for the application.
 * 
 * This contains key information about the web application like the title, description,
 * and favicon for proper browser display.
 */
export const metadata: Metadata = {
  title: "Chuck Norris Quotes",
  description: "A Next.Js-based web-app that shows different quotes of Chuck Norris",
  icons: {
    icon: "./favicon.ico"
  }
};


/**
 * RootLayout component.
 * 
 * The RootLayout component wraps around the entire application layout and applies global settings.
 * It also loads the custom fonts and ensures that the children (other components or pages) are rendered inside the body.
 * 
 * @param {Object} props - The properties passed to this layout component.
 * @param {React.ReactNode} props.children - The child elements (pages or components) to render within the layout.
 * @returns {JSX.Element} The root layout with applied global styles and fonts.
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}