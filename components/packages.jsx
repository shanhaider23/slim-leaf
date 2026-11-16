import { Check, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { store, formatPrice, packagePrice, packageOrderLink } from "@/lib/store";

export default function Packages() {
  return (
    <section id="packages" className="scroll-mt-24 bg-emerald-950 py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-emerald-300">Choose your pack</p>
          <h2 className="mb-4 text-3xl font-bold text-white lg:text-5xl">Your tea. Your routine.</h2>
          <p className="text-lg text-emerald-100">Pick your SlimLeaf package and order directly on WhatsApp.</p>
          <div className="mt-5 flex flex-wrap justify-center gap-3">
            {store.packageBenefits.map((benefit) => <span key={benefit} className="inline-flex items-center gap-2 rounded-full bg-emerald-900 px-4 py-2 text-sm text-emerald-100"><Check aria-hidden="true" className="h-4 w-4" />{benefit} on every package</span>)}
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
          {store.packages.map((offer) => (
            <article key={offer.id} className={`flex flex-col rounded-3xl border-2 p-6 lg:p-8 ${offer.featured ? "border-lime-300 bg-lime-50" : "border-transparent bg-white"}`}>
              <p className="mb-5 text-sm font-semibold text-green-700">{offer.label}</p>
              <h3 className="mb-3 text-2xl font-bold text-gray-900">{offer.quantity} {offer.quantity === 1 ? "Pack" : "Packs"}</h3>
              <p className="text-4xl font-bold tracking-tight text-green-800">{formatPrice(packagePrice(offer))}</p>
              <p className="mb-6 mt-2 text-sm text-gray-500">Total package price</p>
              <ul className="mb-8 space-y-3 text-gray-700">
                {store.packageBenefits.map((benefit) => <li key={benefit} className="flex items-center gap-2"><Check aria-hidden="true" className="h-4 w-4 text-green-700" />{benefit}</li>)}
              </ul>
              <Button asChild className="mt-auto w-full bg-green-700 text-white hover:bg-green-800">
                <a href={packageOrderLink(offer)} target="_blank" rel="noopener noreferrer"><ShoppingCart aria-hidden="true" className="h-4 w-4" />Order {offer.quantity} {offer.quantity === 1 ? "pack" : "packs"}</a>
              </Button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
