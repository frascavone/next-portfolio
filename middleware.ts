import createMiddleware from "next-intl/middleware";

import { siteConfig } from "./config/site";

export default createMiddleware({
    // A list of all locales that are supported
    locales: siteConfig.locales,

    // Used when no locale matches
    defaultLocale: siteConfig.defaultLocale,
});

export const config = {
    // Match only internationalized pathnames
    matcher: ["/", "/(it|en)/:path*"],
};
