import { DesktopNav } from "./DesktopNav"
import { MobileNav } from "./MobileNav"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full">
      <div className="md:hidden">
        <MobileNav />
      </div>
      <div className="hidden md:block bg-opacity-50 backdrop-filter backdrop-blur-lg lg:border-foreground lg:border-b">
        <DesktopNav />
      </div>
    </header>
  )
}
