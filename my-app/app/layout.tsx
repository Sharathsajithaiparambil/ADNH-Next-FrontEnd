import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/navbar/Header";
import Footer from "@/components/footer/Footer";
import SmoothScroll from "@/components/providers/SmoothScroll";
import getHeaderImage from "@/app/api/api";


export async function generateMetadata(): Promise<Metadata> {
  try {
    const response = await getHeaderImage();
    const settings = response?.data;
    const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
    const baseUrl = apiBaseUrl ? `${apiBaseUrl}/storage/` : "";

    return {
      title: settings?.site_name || "ADNH Catering",
      description: "ADNH Catering Services",
      icons: {
        icon: settings?.favicon ? `${baseUrl}${settings.favicon}` : "",
      },
    };
  } catch (error) {
    console.error("Error fetching metadata:", error);
    return {
      title: "ADNH Catering",
      description: "ADNH Catering Services",
    };
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <SmoothScroll>
          <Header />
          <div className="pt-[88px]">
            {children}
          </div>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
