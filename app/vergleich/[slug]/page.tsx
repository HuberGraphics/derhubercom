import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import ServiceComparison from '@/components/ServiceComparison';
import Footer from '@/components/Footer';
import { getComparisonBySlug, getAllComparisonSlugs } from '@/data/comparisons';

// Generate static params for all comparison pages
export async function generateStaticParams() {
  return getAllComparisonSlugs().map((slug) => ({
    slug,
  }));
}

// Generate metadata for each comparison page
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const comparison = getComparisonBySlug(slug);

  if (!comparison) {
    return {
      title: 'Vergleich nicht gefunden',
    };
  }

  return {
    title: `${comparison.title} | Der Huber`,
    description: comparison.description,
    openGraph: {
      title: comparison.title,
      description: comparison.description,
      type: 'article',
    },
  };
}

export default async function ComparisonPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const comparison = getComparisonBySlug(slug);

  if (!comparison) {
    notFound();
  }

  return (
    <>
      <Header />
      <ServiceComparison comparison={comparison} />
      <Footer />
    </>
  );
}
