import type { Metadata } from "next";
import { Inter, Roboto_Condensed, Quattrocento } from "next/font/google";
import StyledComponentsRegistry from "@/lib/styled-components-registry";
import ClientLayout from "@/lib/client-layout";
import Header from "@components/Header";
import Footer from "@components/Footer";
import { Container } from "./layout.styled";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const roboto_condensed = Roboto_Condensed({
  subsets: ["latin"],
  variable: "--font-roboto_condensed",
  display: "swap",
});

const quattrocento = Quattrocento({
  subsets: ["latin"],
  variable: "--font-quattrocento",
  display: "swap",
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Evob - Plataforma para escalar a educação no digital",
  description: "Aprenda a criar uma plataforma LMS do zero",
  icons: [{ rel: "icon", type: "image/png", url: "/images/favicon-32x32.png" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${inter.variable} ${roboto_condensed.variable} ${quattrocento.variable}`}
      >
        <StyledComponentsRegistry>
          <ClientLayout>
            <Container>
              <Header />
              {children}
              <Footer />
            </Container>
          </ClientLayout>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
