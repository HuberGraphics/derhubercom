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
    alternates: {
      canonical: `https://derhuber.com/vergleich/${slug}`,
    },
    openGraph: {
      title: comparison.title,
      description: comparison.description,
      url: `https://derhuber.com/vergleich/${slug}`,
      type: 'article',
      images: [
        {
          url: '/images/og-image.png',
          width: 1200,
          height: 630,
          alt: `${comparison.title} - Der Huber`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: comparison.title,
      description: comparison.description,
      images: ['/images/og-image.png'],
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
