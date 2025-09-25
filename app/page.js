import Image from "next/image";
import { ShoppingCart, Phone, MapPin, Sparkles, Star, Shield, Award, Leaf, Clock, Users, MessageCircle, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-emerald-50 via-green-50 to-yellow-50">

      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-white/90 border-b border-green-100 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-green-600 to-emerald-700 rounded-xl flex items-center justify-center">
                <Leaf className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">SlimLeaf</h1>
                <p className="text-xs text-gray-600">Organic Wellness</p>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <a href="#benefits" className="text-gray-700 hover:text-green-600 transition-colors">Benefits</a>
              <a href="#ingredients" className="text-gray-700 hover:text-green-600 transition-colors">Ingredients</a>
              <a href="#testimonials" className="text-gray-700 hover:text-green-600 transition-colors">Reviews</a>
              <a href="tel:+923215445474" className="flex items-center text-green-600 font-medium">
                <Phone className="w-4 h-4 mr-2" />
                <span className="hidden lg:inline">+92 321 5445474</span>
              </a>
            </div>
            <Button variant="outline" size="icon" className="md:hidden">
              <Menu className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-600/10 via-emerald-500/5 to-yellow-400/10"></div>
        <div className="w-full px-4 py-16 lg:py-24">
          <div className="flex flex-col lg:flex-row  items-center   gap-12">

            {/* Product Image */}
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-center">
              <div className="relative group w-full max-w-md">
                <div className="absolute -inset-4 bg-gradient-to-r from-green-400 to-emerald-500 rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity -z-10"></div>
                <div className="relative bg-green-100 rounded-3xl p-8 shadow-2xl w-full">
                  <Image
                    src="/slimleaf.png"
                    alt="SlimLeaf Organic Tea"
                    width={400}
                    height={400}
                    className="rounded-2xl shadow-lg w-full h-auto bg-green-300"
                    priority
                  />
                  <div className="absolute -top-4 -right-4 bg-gradient-to-r from-red-500 to-orange-500 text-white px-4 py-2 text-sm font-bold rounded-full shadow-lg animate-pulse z-20">
                    -33% OFF
                  </div>
                  <div className="absolute -bottom-4 -left-4 bg-green-600 text-white px-3 py-1 text-sm font-semibold rounded-full shadow-lg z-20">
                    ✨ Premium Quality
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="w-full lg:w-1/2 text-center lg:text-left max-w-2xl mx-auto lg:mx-0">
              <div className="inline-flex items-center bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Award className="w-4 h-4 mr-2" />
                #1 Organic Tea in Pakistan
              </div>

              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                  SlimLeaf
                </span>
                <br />
                <span className="text-3xl lg:text-4xl text-gray-700">Organic Tea</span>
              </h1>

              <p className="text-lg lg:text-xl text-gray-600 mb-8 leading-relaxed">
                Transform your wellness journey with nature&apos;s most powerful ingredients.
                Each cup delivers premium organic herbs crafted for
                <span className="font-semibold text-green-600"> natural weight management</span> and
                <span className="font-semibold text-green-600"> vibrant health</span>.
              </p>

              {/* Features */}
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <Shield className="w-5 h-5 text-green-500" />
                  <span>100% Organic</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <Clock className="w-5 h-5 text-green-500" />
                  <span>70-80 Cups</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <Users className="w-5 h-5 text-green-500" />
                  <span>1000+ Happy Customers</span>
                </div>
              </div>

              {/* Pricing */}
              <div className="bg-white rounded-2xl p-6 shadow-xl mb-8 border border-green-100">
                <div className="flex items-center justify-center lg:justify-start space-x-4 mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">(500+ Reviews)</span>
                </div>

                <div className="flex items-center justify-center lg:justify-start space-x-4">
                  <span className="text-2xl text-gray-400 line-through">Rs. 2,999</span>
                  <span className="text-4xl lg:text-5xl font-bold text-green-600">Rs. 1,999</span>
                  <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm font-semibold">
                    Save Rs. 1,000
                  </span>
                </div>
                <p className="text-gray-600 mt-2">125g Premium Pack • 70-80 Servings</p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start relative z-10">
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-8 py-6 text-lg rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-200"
                >
                  <a
                    href="https://wa.me/923215445474?text=Hello!%20I%20want%20to%20order%20SlimLeaf%20Tea%20for%20Rs.%201999"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center"
                  >
                    <ShoppingCart className="mr-3 h-6 w-6" />
                    Order Now via WhatsApp
                  </a>
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  asChild
                  className="border-green-200 hover:bg-green-50 px-8 py-6 text-lg rounded-2xl"
                >
                  <a href="tel:+923215445474" className="inline-flex items-center">
                    <Phone className="mr-3 h-5 w-5" />
                    Call Now
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">
              Why Choose <span className="text-green-600">SlimLeaf Tea</span>?
            </h2>
            <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the perfect blend of traditional wisdom and modern wellness.
              Our carefully crafted formula delivers results you can feel.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Leaf className="w-8 h-8 text-green-500" />,
                title: "100% Natural Ingredients",
                description: "Pure organic herbs with no artificial additives or preservatives"
              },
              {
                icon: <Shield className="w-8 h-8 text-green-500" />,
                title: "Clinically Tested",
                description: "Scientifically proven ingredients for safe and effective results"
              },
              {
                icon: <Award className="w-8 h-8 text-green-500" />,
                title: "Premium Quality",
                description: "Carefully sourced and processed to maintain maximum potency"
              },
              {
                icon: <Clock className="w-8 h-8 text-green-500" />,
                title: "Long Lasting",
                description: "Each 125g pack provides 70-80 cups of delicious tea"
              },
              {
                icon: <Users className="w-8 h-8 text-green-500" />,
                title: "Trusted by Thousands",
                description: "Join 1000+ satisfied customers who've transformed their wellness"
              },
              {
                icon: <Sparkles className="w-8 h-8 text-green-500" />,
                title: "Visible Results",
                description: "Notice the difference in energy and well-being within weeks"
              }
            ].map((benefit, index) => (
              <Card key={index} className="text-center hover:shadow-xl transition-all duration-300 border-green-100">
                <CardHeader>
                  <div className="mx-auto mb-4 p-3 bg-green-100 rounded-2xl w-fit">
                    {benefit.icon}
                  </div>
                  <CardTitle className="text-xl text-gray-900">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Ingredients & Usage Section */}
      <section id="ingredients" className="py-16 lg:py-24 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* How to Use */}
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="text-2xl lg:text-3xl text-gray-900 flex items-center">
                  <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center mr-4">
                    🌿
                  </div>
                  How to Use
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Morning Boost</h4>
                      <p className="text-gray-600">Take ½ teaspoon with warm water on empty stomach</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Evening Ritual</h4>
                      <p className="text-gray-600">Mix with your favorite tea or warm milk before dinner</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Consistency is Key</h4>
                      <p className="text-gray-600">Use daily for 30 days to see optimal results</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Ingredients */}
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="text-2xl lg:text-3xl text-gray-900 flex items-center">
                  <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center mr-4">
                    🍵
                  </div>
                  Premium Ingredients
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    "Organic Ginger",
                    "Asian Ginseng",
                    "Turmeric Root",
                    "Ceylon Cinnamon",
                    "Black Pepper",
                    "Cumin Seeds",
                    "Green Coffee Extract",
                    "Dandelion Leaf",
                    "Premium Green Tea"
                  ].map((ingredient, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-gray-700 text-sm lg:text-base">{ingredient}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">
              What Our Customers Say
            </h2>
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-current" />
                ))}
              </div>
              <span className="text-lg font-semibold text-gray-700">4.9/5 Rating</span>
              <span className="text-gray-500">(500+ Reviews)</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Ahmed",
                location: "Karachi",
                rating: 5,
                text: "Amazing results in just 3 weeks! I feel more energetic and my clothes fit better. Highly recommended!"
              },
              {
                name: "Ali Hassan",
                location: "Lahore",
                rating: 5,
                text: "The taste is actually really good, and I&apos;ve noticed significant improvement in my digestion and energy levels."
              },
              {
                name: "Fatima Khan",
                location: "Islamabad",
                rating: 5,
                text: "Best organic tea I&apos;ve tried! Natural ingredients and real results. Worth every penny."
              }
            ].map((review, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300">
                <CardContent className="pt-6">
                  <div className="flex text-yellow-400 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 italic">&ldquo;{review.text}&rdquo;</p>
                  <div className="border-t pt-4">
                    <p className="font-semibold text-gray-900">{review.name}</p>
                    <p className="text-sm text-gray-500">{review.location}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-green-600 to-emerald-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-4">
            Ready to Start Your Wellness Journey?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers and transform your wellness journey today!
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button
              asChild
              size="lg"
              className="bg-white text-green-600 hover:bg-gray-100 px-10 py-6 text-lg rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-200"
            >
              <a
                href="https://wa.me/923215445474?text=Hello!%20I%20want%20to%20order%20SlimLeaf%20Tea%20for%20Rs.%201999"
                target="_blank"
                className="inline-flex items-center"
              >
                <MessageCircle className="mr-3 h-6 w-6" />
                Order via WhatsApp
              </a>
            </Button>

            <div className="text-white">
              <div className="text-3xl font-bold">Rs. 1,999</div>
              <div className="text-green-200 line-through text-lg">Rs. 2,999</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">

            {/* Brand */}
            <div>
              <div className="flex items-center justify-center md:justify-start space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-green-600 to-emerald-700 rounded-xl flex items-center justify-center">
                  <Leaf className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">SlimLeaf</h3>
                  <p className="text-sm text-gray-400">Organic Wellness</p>
                </div>
              </div>
              <p className="text-gray-400">
                Premium organic tea for natural wellness and weight management.
              </p>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Contact Us</h4>
              <div className="space-y-3">
                <div className="flex items-center justify-center md:justify-start space-x-3">
                  <Phone className="w-5 h-5 text-green-400" />
                  <a href="tel:+923215445474" className="hover:text-green-400 transition-colors">
                    +92 321 5445474
                  </a>
                </div>
                <div className="flex items-center justify-center md:justify-start space-x-3">
                  <MessageCircle className="w-5 h-5 text-green-400" />
                  <a
                    href="https://wa.me/923215445474"
                    target="_blank"
                    className="hover:text-green-400 transition-colors"
                  >
                    WhatsApp Chat
                  </a>
                </div>
                <div className="flex items-center justify-center md:justify-start space-x-3">
                  <MapPin className="w-5 h-5 text-green-400" />
                  <span>Faisalabad, Pakistan</span>
                </div>
              </div>
            </div>

            {/* Info */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Information</h4>
              <div className="space-y-2 text-gray-400">
                <p>✅ 100% Organic Ingredients</p>
                <p>🏆 Premium Quality Assured</p>
                <p>💰 30-Day Money Back Guarantee</p>
                <p>📞 24/7 Customer Support</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © 2025 SlimLeaf Tea. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}