// app/page.tsx
import Image from "next/image";
import { ShoppingCart, Phone, MapPin, Sparkles } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col justify-between bg-gradient-to-b from-green-900 via-green-700 to-yellow-100">

      {/* Hero Section */}
      <section className="flex flex-col items-center text-center py-16 px-6">
        <div className="relative">
          <Image
            src="/slimleaf.jpg" // place your product image in public/slimleaf.jpg
            alt="SlimLeaf Tea"
            width={240}
            height={240}
            className="rounded-3xl shadow-2xl border-4 border-white"
          />
          <div className="absolute -top-3 -right-3 bg-yellow-400 text-green-900 px-3 py-1 text-sm font-bold rounded-full shadow-lg">
            -65%
          </div>
        </div>

        <h1 className="text-4xl font-bold mt-6 text-white drop-shadow-lg">
          ✨ Organic Slim™ ✨
        </h1>
        <p className="text-lg mt-4 max-w-2xl text-yellow-100 leading-relaxed">
          Sip your way to a <span className="font-semibold">slimmer, healthier you!</span>
          Crafted with nature’s purest ingredients, each pack gives you a generous
          <span className="font-bold"> 70–80 cups</span> of transformative tea. 💖
        </p>

        {/* Pricing */}
        <div className="mt-6 flex flex-col items-center">
          <p className="text-2xl text-yellow-200 line-through">Rs. 2,299 PKR</p>
          <p className="text-4xl font-bold text-yellow-400">Rs. 799 PKR</p>
          <p className="text-sm text-white mt-1">130g | 70–80 Cups</p>
        </div>

        {/* Order Button */}
        <a
          href="https://wa.me/923215445474?text=Hello!%20I%20want%20to%20order%20Organic%20Slim%20Tea"
          target="_blank"
          className="inline-flex items-center mt-8 bg-yellow-400 hover:bg-yellow-500 text-green-900 font-semibold px-8 py-4 rounded-2xl shadow-2xl transition transform hover:scale-105"
        >
          <ShoppingCart className="mr-2 h-6 w-6" /> Order Now
        </a>
      </section>

      {/* Product Info */}
      <section className="px-6 py-12 bg-white text-green-900 rounded-t-3xl shadow-xl">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 text-green-800 flex items-center justify-center gap-2">
            <Sparkles className="h-6 w-6 text-yellow-500" /> Why Choose Organic Slim?
          </h2>
          <p className="text-lg leading-relaxed mb-8">
            Ready for a real change? <span className="font-semibold">Organic Slim™ Organic Fat Loss Tea</span>
            is your delicious daily ritual for <span className="font-semibold">effective weight management</span>
            and vibrant wellness. Crafted with nature's finest herbs, it's a gentle yet powerful way to
            support your health goals naturally.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mt-8">
          <div className="bg-yellow-100 p-6 rounded-2xl shadow-md">
            <h3 className="text-xl font-bold mb-3">🌿 How to Use</h3>
            <p>Take half a teaspoon with warm water or tea daily.</p>
          </div>
          <div className="bg-yellow-100 p-6 rounded-2xl shadow-md">
            <h3 className="text-xl font-bold mb-3">🍵 Ingredients</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Ginger</li>
              <li>Asian Ginseng</li>
              <li>Turmeric</li>
              <li>Cinnamon</li>
              <li>Black Pepper</li>
              <li>Cumin</li>
              <li>Green Coffee Bean Extract</li>
              <li>Dandelion</li>
              <li>Green Tea</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-900 text-yellow-200 py-6 text-center mt-6">
        <div className="flex flex-col items-center gap-2">
          <div className="flex items-center gap-2">
            <Phone className="h-4 w-4" />
            <span>+92 321 5445474</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4" />
            <span>Lahore, Pakistan</span>
          </div>
          <p className="text-sm mt-2">© 2025 SlimLeaf / Organic Slim Tea</p>
        </div>
      </footer>
    </main>
  );
}
