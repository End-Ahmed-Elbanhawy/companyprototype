import { routing } from "./routing";

export default (async ({ requestLocale }: { requestLocale: Promise<string | undefined> }) => {
    let locale = await requestLocale;

    const isValidLocale = routing.locales.includes(
        locale as (typeof routing.locales)[number]
    );

    if (!locale || !isValidLocale) {
        locale = routing.defaultLocale;
    }

    return {
        locale,
        messages: (await import(`../../messages/${locale}.json`)).default
    };
});