"use client";

import { useState } from "react";
import Image from "next/image";
import { MessageCircle, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Reviews({ reviews, feedbackLink }) {
  const [showAll, setShowAll] = useState(false);
  const visibleReviews = showAll ? reviews : reviews.slice(0, 3);

  return (
    <section id="testimonials" className="scroll-mt-24 bg-white py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-green-100 px-4 py-2 text-sm font-medium text-green-800">
            <MessageCircle className="h-4 w-4" aria-hidden="true" /> From our WhatsApp community
          </span>
          <h2 className="mb-4 text-3xl font-bold text-gray-900 lg:text-5xl">Your words. Your experience.</h2>
          <p className="text-lg text-gray-600">Read feedback shared by SlimLeaf customers. Open any screenshot to read the full conversation.</p>
          <p className="mt-3 text-sm text-gray-500">{reviews.length ? `${reviews.length} customer conversations • Individual experiences; results vary.` : "Have tried SlimLeaf? Be the first to share your experience."}</p>
        </div>
        <div id="review-gallery" className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visibleReviews.map((review, index) => (
            <a key={review.id} href={review.image} target="_blank" rel="noopener noreferrer"
              className="group overflow-hidden rounded-2xl border border-green-100 bg-green-50/50 transition hover:shadow-xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-green-700">
              <div className="relative h-96 bg-gray-100 p-3">
                <Image src={review.image} alt={review.alt} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-contain p-3" />
              </div>
              <div className="flex items-center justify-between gap-3 border-t border-green-100 px-5 py-4">
                <span className="font-medium text-gray-800">Customer feedback {index + 1}</span>
                <span className="inline-flex items-center gap-1 text-sm text-green-700">Read full review <ArrowUpRight className="h-4 w-4" aria-hidden="true" /><span className="sr-only"> (opens in a new tab)</span></span>
              </div>
            </a>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          {reviews.length > 3 && <Button variant="outline" onClick={() => setShowAll(!showAll)} aria-expanded={showAll} aria-controls="review-gallery" className="border-green-200 text-green-800">{showAll ? "Show fewer reviews" : `View all ${reviews.length} reviews`}</Button>}
          <Button asChild className="bg-green-700 text-white hover:bg-green-800"><a href={feedbackLink} target="_blank" rel="noopener noreferrer"><MessageCircle className="h-4 w-4" /> Share your experience</a></Button>
        </div>
      </div>
    </section>
  );
}
