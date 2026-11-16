# Updating prices and reviews

All editable store content lives in `content/store.json`. There is no database or admin login to maintain. Changes go live after a successful deployment; editing a local file alone does not update the deployed website.

## Change the price

Edit `product.price` (currently `2499`) as a number without currency symbols or commas. `compareAtPrice` is the original price (currently `2999`). Set it to the same price or `0` to hide the discount. Both displayed prices, the savings badge, discount percentage, price FAQ and WhatsApp order messages use these values automatically.

`product.packLabel` and `product.image` control the pack description and main image. Image paths start with `/` and refer to files in `public`.

Prices printed inside an image cannot update automatically. Replace any promotional posters containing old prices before featuring them.

## Package offers

Edit the `packages` array to manage offers. The 1-pack offer uses `product.price` automatically. The 2-pack and 3-pack offers have their own total `price` values (currently `4499` and `5999`). `quantity` is the number of packs, `label` is the short heading, and `featured` highlights a card. Package cards, FAQs and WhatsApp order links all use these values. `packageBenefits` controls the included benefits, currently free delivery and a free diet plan.

## Add a review screenshot

1. Save the approved customer screenshot in `public/reviews/` (create that folder if needed). Use a simple unique filename such as `customer-feedback-07.jpg`.
2. Add an object to the `reviews` array in `content/store.json`:

```json
{
  "id": "feedback-07",
  "image": "/reviews/customer-feedback-07.jpg",
  "alt": "Customer WhatsApp feedback about their SlimLeaf tea routine"
}
```

3. Separate array entries with commas; do not add a comma after the last entry. Use a unique `id` and describe the screenshot in `alt` without adding unsupported claims.
4. Put newer reviews first if you want them in the first three cards. The review count and View all button update automatically. Remove an entry to stop featuring it.

Use customer-approved screenshots and remove private details before uploading. Files in `public` are publicly accessible even if they are not listed in the gallery. The website shows the original images and does not anonymize them.

The Share your experience button opens WhatsApp. Feedback is reviewed and added by the owner; visitors cannot publish directly to the site.

## Publish changes

If your GitHub repository is connected to Vercel with automatic deployments enabled, commit the content file and any new image files to your production branch (usually `main`). Vercel builds and deploys the change. Confirm that the deployment succeeds before checking your live site.

You can also edit `content/store.json` using GitHub's web editor and upload images through GitHub, then commit to the production branch. No local development tools are needed for these content changes.

For local changes, preview with `npm run dev` and check with `npm run build` before committing. Stage the content file and the specific images you intend to publish; review the staged diff first.

Vercel documentation: https://vercel.com/docs/git

## When to add a CMS

For occasional changes, this file-based workflow keeps maintenance simple. If several people will update the store frequently or you need image uploads, draft reviews and an admin dashboard, move this same content structure into a headless CMS with authenticated editors and publishing controls. That requires a separate CMS setup. This version does not include an admin dashboard or updates without deployment.
