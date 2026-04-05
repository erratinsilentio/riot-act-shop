import { notFound } from "next/navigation";
import type { Metadata } from "next";

export const dynamic = "force-dynamic";
import Image from "next/image";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ProductDetail from "./ProductDetail";
import ImagePanel from "./ImagePanel";
import { getProductBySlug } from "@/lib/products";
import { formatPrice } from "@/lib/utils";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://riotact.pl";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const result = await getProductBySlug(slug);
  if (!result) return {};

  const { product } = result;
  const image = product.images?.[0];
  const priceFormatted = formatPrice(product.price);

  return {
    title: product.name,
    description: `${product.description} — ${priceFormatted}`,
    openGraph: {
      title: `${product.name} | RIOT ACT`,
      description: `${product.description} — ${priceFormatted}`,
      url: `${SITE_URL}/sklep/${slug}`,
      type: "website",
      ...(image ? { images: [{ url: image, alt: product.name }] } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: `${product.name} | RIOT ACT`,
      description: `${product.description} — ${priceFormatted}`,
      ...(image ? { images: [image] } : {}),
    },
  };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const result = await getProductBySlug(slug);
  if (!result) notFound();

  const { product, variants } = result;
  const image = product.images?.[0];

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    image: image ? [image] : undefined,
    brand: { "@type": "Brand", name: "RIOT ACT" },
    offers: {
      "@type": "Offer",
      url: `${SITE_URL}/sklep/${slug}`,
      priceCurrency: "PLN",
      price: (product.price / 100).toFixed(2),
      availability: variants.some((v) => v.stock > 0)
        ? "https://schema.org/InStock"
        : "https://schema.org/OutOfStock",
    },
  };

  return (
    <div className="min-h-screen bg-surface">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <Nav />

      <main className="pt-20 grid grid-cols-1 lg:grid-cols-[7fr_5fr] min-h-screen">
        {/* Image panel */}
        <ImagePanel>
          {image ? (
            <Image
              src={image}
              alt={product.name}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 1024px) 100vw, 58vw"
            />
          ) : (
            <div className="w-full h-full bg-surface-container-low" />
          )}
        </ImagePanel>

        {/* Info panel */}
        <div className="px-16 py-24 flex flex-col justify-center bg-surface">
          {/* Category label */}
          <p
            className="text-xs uppercase tracking-widest text-on-surface-variant mb-8"
            style={{ fontFamily: "var(--font-space-grotesk)", letterSpacing: "0.1em" }}
          >
            {product.category}
          </p>

          <ProductDetail
            productId={product.id}
            name={product.name}
            description={product.description}
            price={product.price}
            variants={variants}
            image={image}
          />
        </div>
      </main>

      <Footer />
    </div>
  );
}
