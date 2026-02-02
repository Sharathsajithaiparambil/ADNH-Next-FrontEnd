import getHeaderImage from "@/app/api/api";
import Image from "next/image";
import NavLinks from "./NavLinks";
import MobileMenu from "./MobileMenu";

export default async function Header() {
  let logoUrl = "";
  const fallbackLogo = "/images/Icon/logo_dark_logo-dark_1769083126 (2).svg";

  try {
    const result = await getHeaderImage();
    if (result?.success && result?.data?.logo_dark) {
      const logoPath = result.data.logo_dark;
      const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || "";
      logoUrl = `${baseUrl}/storage/${logoPath}`;
    }
  } catch (error) {
    console.error("Failed to fetch header settings:", error);
  }
  const displayLogoUrl = logoUrl || fallbackLogo;

  return (
    <header className="bg-slate-100 py-4">
      <div className="h-full mx-auto flex items-center justify-between container container-padding">
        {/* Logo Section */}
        <div className="flex items-center flex-shrink-0">
          <Image
            src={displayLogoUrl}
            alt="ADNH Catering"
            width={200}
            height={100}
            className="h-20 w-auto"
            unoptimized
          />
        </div>

        <NavLinks />
        <button className="hidden lg:block btn-primary text-white px-4 py-2 rounded-lg text-lg font-semibold cursor-pointer transition-all duration-300 ease-in-out hover:scale-95 flex-shrink-0 whitespace-nowrap">
          Investor Relations
        </button>
        <MobileMenu logoUrl={displayLogoUrl} />
      </div>
    </header>
  );
}

