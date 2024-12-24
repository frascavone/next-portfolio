import { DesktopNav } from "./DesktopNav";
import { MobileNav } from "./MobileNav";

export function SiteHeader() {
    return (
        <header className="sticky top-0 z-40 w-full">
            <div className="md:hidden">
                <MobileNav />
            </div>
            <div className="bg-opacity/50 hidden backdrop-blur-lg md:block md:border-b md:border-foreground">
                <DesktopNav />
            </div>
        </header>
    );
}
