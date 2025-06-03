# How Next.js Dynamic Route Params Work


[1] User visits URL:
    → /products/789/review/1500

        ↓

[2] Next.js matches dynamic route:
    → app/products/[productid]/review/[reviewid]/page.tsx

        ↓

[3] Next.js extracts params:
    → {
         productid: '789',
         reviewid: '1500'
       }

        ↓

[4] Passes params into your component:
    → page({ params })

        ↓

[5] Inside your component:
    const { productid, reviewid } = params;

        ↓

[6] Use values:
    → Render on screen:
         <h1>Review {reviewid} for Product {productid}</h1>
    → Check conditions:
         if (reviewid > 1000) { notFound() }

//params is automatically created by Next.js from the dynamic URL.