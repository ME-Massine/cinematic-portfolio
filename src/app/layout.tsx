import "./globals.css";
import { Inter, Space_Grotesk } from "next/font/google";
import MotionProvider from "@/components/layout/MotionProvider";
import TransitionLayout from "@/components/layout/TransitionLayout";
import RouteOverlayTransition from "@/components/layout/RouteOverlayTransition";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata = {
  title: "Massine | Frontend Developer",
  description: "Cinematic, interaction-driven web experiences",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="bg-background text-foreground font-body antialiased">
        <MotionProvider>
          <RouteOverlayTransition />
          <TransitionLayout>{children}</TransitionLayout>
        </MotionProvider>
      </body>
    </html>
  );
}
