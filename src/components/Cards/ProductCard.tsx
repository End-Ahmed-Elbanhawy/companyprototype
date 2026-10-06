import { Card, CardAction, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "../ui/sheet";
import QuoteForm from "../forms/QuoteForm";
import { useTranslations } from "next-intl";

export interface products {
  id: number;
  title: string;
  description: string;
  StartingPrice: number;
  img: string;
  link: string;
}

interface ProductProps {
  props: products;
}

export default function ProductCard({ props }: ProductProps) {

  const t = useTranslations("directpurchase");

  return (
    <Card className="w-full h-full max-w-3xl p-5 transition-colors duration-200 ease-in-out border border-transparent rounded-sm shadow-md hover:border-brand-primary">
      <div className="relative w-full h-48 overflow-hidden bg-gray-200 rounded-md" >
        <img
          src={props.img}
          alt="Event cover"
          className="absolute inset-0 z-20 object-cover w-full"
        />
      </div>
      <CardHeader className="flex flex-col gap-5 px-0" >
        <CardTitle className="text-xl font-bold leading-tight uppercase text-start min-h-12 text-brand-secondary ">{props.title}</CardTitle>
        <CardDescription>
          <div className="ProductDescription text-brand-neutral line-clamp-2 min-h-10">
            {props.description}
          </div>
        </CardDescription>

        <Sheet>
          <SheetTrigger asChild>
            <Button className="w-full text-sm font-bold tracking-wider uppercase transition-transform duration-200 ease-in-out rounded-sm text-brand-tertiary bg-brand-primary py-7 hover:bg-brand-primary hover:-translate-y-1 hover:brightness-90">
              {t("productCard.buttonLabel")}
            </Button>
          </SheetTrigger>
          <SheetContent className="flex justify-centerw-full h-full px-8 py-10 bg-white border-none rounded-lg shadow-2xl outline-none text-brand-secondary lg:max-w-lg sm:py-12 sm:px-10">
            <QuoteForm />
          </SheetContent>
        </Sheet>
      </CardHeader>
    </Card>
  );
};