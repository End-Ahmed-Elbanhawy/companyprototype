import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { EngineeringIcon } from "../ui/EngineeringIcon";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import QuoteForm from "../forms/QuoteForm";
import { useTranslations } from "next-intl";

export default function Questions() {

    const t = useTranslations("questions");

    const items = [
        {
            value: "leadTime",
            trigger: t("items.item1.trigger"),
            content: t("items.item1.content")
        },
        {
            value: "shipping",
            trigger: t("items.item2.trigger"),
            content: t("items.item2.content")
        },
        {
            value: "contracts",
            trigger: t("items.item3.trigger"),
            content: t("items.item3.content")
        },
        {
            value: "safetyCertifications",
            trigger: t("items.item4.trigger"),
            content: t("items.item4.content")
        },
    ];

    return (
        <section className="py-24 Questions bg-brand-tertiary">
            <div className="container grid gap-16 px-4 mx-auto max-w-7xl md:px-10 gid-cols-1 lg:grid-cols-3">
                <div className="left lg:col-span-2">
                    <h2 className="mb-10 text-4xl font-black uppercase md:text-5xl text-brand-secondary">
                        {t("header")}
                    </h2>
                    <Accordion
                        type="multiple"
                        className=""
                        defaultValue={["notifications"]}
                    >
                        {items.map((item) => (
                            <AccordionItem key={item.value} value={item.value} className="p-6 m-2 transition-all bg-white border rounded-md shadow-sm cursor-pointer hover:border-brand-primary group">
                                <AccordionTrigger className="text-xl font-bold uppercase text-brand-secondary">
                                    {item.trigger}
                                </AccordionTrigger>
                                <AccordionContent className="text-brand-neutral text-[16px] leading-6 mt-4">
                                    {item.content}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
                <Card className="relative w-full col-span-1 p-10 overflow-hidden text-center text-white rounded-md shadow-2xl lg:sticky right bg-brand-primary lg:top-32 h-max">
                    <div className="absolute w-40 h-40 rounded-full -right-10 -top-10 bg-white/20 blur-2xl"></div>
                    <div className="absolute w-40 h-40 rounded-full -left-10 -bottom-10 bg-black/10 blur-2xl"></div>
                    <div className="flex items-center justify-center">
                        <EngineeringIcon className="text-white size-20" />
                    </div>
                    <CardHeader>
                        <CardTitle className="text-3xl font-black text-white uppercase">
                            {t("card.title")}
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="mb-8 text-lg font-medium uppercase text-white/90 ">
                            {t("card.content.description")}
                        </p>
                        <Sheet>
                            <SheetTrigger asChild>
                                <Button className="w-full h-full py-4 text-sm font-bold tracking-wider uppercase rounded-sm bg-brand-secondary">
                                    {t("card.content.sheetLabel")}
                                </Button>
                            </SheetTrigger>
                            <SheetContent className="flex justify-center">
                                <QuoteForm />
                            </SheetContent>
                        </Sheet>
                    </CardContent>
                </Card>
            </div>
        </section>
    );
};