import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";
import Image from "next/image";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ProductDetail from "./ProductDetail";
import { getProductBySlug } from "@/lib/products";

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const result = await getProductBySlug(slug);
  if (!result) notFound();

  const { product, variants } = result;
  const image = product.images?.[0];

  return (
    <div className="min-h-screen bg-surface">
      <Nav />

      <main className="pt-20 grid grid-cols-1 lg:grid-cols-[7fr_5fr] min-h-screen">
        {/* Image panel */}
        <div className="relative bg-surface-container-low min-h-[60vh] lg:min-h-screen flex items-center justify-center">
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
        </div>

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
