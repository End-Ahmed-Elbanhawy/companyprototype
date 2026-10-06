import { Mail, Phone, Share2 } from "lucide-react";
import { Button } from "../ui/button";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "../ui/navigation-menu";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function TopHeader() {

    const pathname = usePathname();
    const isArabic = pathname.startsWith("/ar");

    return (
        <div className="flex flex-col w-full bg-black">
            <div className="container flex items-center justify-between w-full px-4 mx-auto text-xs text-surface-white UtilBar md:px-10 py-2">
                <div className="flex gap-6 contact-info">
                    {/* <a
                        href="tel:+201110502810"
                        className="flex items-center gap-1"
                        dir={isArabic ? "rtl" : "ltr"}
                    >
                        <Phone
                            className={`${isArabic ? "ml-2" : "mr-2"} size-4`}
                        />
                        +20 111 050 2810
                    </a> */}
                    {/* <a href="mailto:info@internationaleas.net" className="flex items-center">
                        <Mail
                            className={`${isArabic ? "ml-2" : "mr-2"} size-4`}
                        />
                        info@internationaleas.net
                    </a> */}
                </div>
                <div className="flex Utils items-center gap-5">
                    {
                        isArabic ? (
                            <Link href={"/en"}>
                                English
                            </Link>
                        ) : (
                            <Link href={"/ar"}>
                                عربي
                            </Link>)
                    }
                </div>
            </div>
        </div>
    );
}