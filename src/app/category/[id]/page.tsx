import { FatchCategoriesProduct } from '@/app/component/FatchApi/FatchApi';
import CategoryClient from '@/app/component/Others/CategoryClient';
import { Suspense } from 'react';

export default function CategoryProduct({ params }: { params: Promise<{ id: string }> }) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CategoryContent params={params} />
    </Suspense>
  );
}

const CategoryContent = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const res = await fetch(`${FatchCategoriesProduct}${id}`);
  const data = await res.json();

  return  <CategoryClient id={id} products={data} />;
}


