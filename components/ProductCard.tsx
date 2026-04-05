import Link from "next/link";
import Image from "next/image";
import type { Product } from "@/types/database";
import { formatPrice } from "@/lib/utils";

export default function ProductCard({ product }: { product: Product }) {
  const image = product.images?.[0];

  return (
    <Link href={`/sklep/${product.slug}`} className="group block">
      {/* Image */}
      <div className="relative w-full aspect-[4/3] bg-surface-container-low overflow-hidden">
        {image ? (
          <Image
            src={image}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        ) : (
          <div className="w-full h-full bg-surface-container-low" />
        )}
      </div>

      {/* Info */}
      <div className="mt-4 space-y-1">
        <p
          className="text-xs uppercase tracking-widest text-on-surface-variant"
          style={{ fontFamily: "var(--font-space-grotesk)", letterSpacing: "0.1em" }}
        >
          {product.category}
        </p>
        <h3
          className="text-sm font-bold uppercase tracking-wide text-on-surface group-hover:text-primary transition-colors"
          style={{ fontFamily: "var(--font-space-grotesk)" }}
        >
          {product.name}
        </h3>
        <p className="text-sm text-on-surface-variant">{formatPrice(product.price)}</p>
      </div>
    </Link>
  );
}
