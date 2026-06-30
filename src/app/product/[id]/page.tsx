import ProductDetailClient from './ProductDetailClient';

export function generateStaticParams() {
  return [
    { id: 'bd1' },
    { id: 'bd2' },
    { id: 'bd3' },
    { id: 'bd4' }
  ];
}

export default function ProductPage() {
  return <ProductDetailClient />;
}
