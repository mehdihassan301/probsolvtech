'use client';

import { useRouter } from 'next/navigation';
import type { Page } from '@/src/legacy/types';
import PricingPage from '@/src/legacy/pages/PricingPage';

export default function PricingClient() {
  const router = useRouter();

  const setPage = (page: Page, id?: string) => {
    switch (page) {
      case 'Home':
        router.push('/');
        break;
      case 'Services':
        router.push('/services');
        break;
      case 'ServiceDetail':
        router.push(id ? `/services/${id}` : '/services');
        break;
      case 'Pricing':
        router.push('/pricing');
        break;
      case 'Portfolio':
        router.push('/portfolio');
        break;
      case 'CaseStudy':
        router.push(id ? `/portfolio/${id}` : '/portfolio');
        break;
      case 'ProjectBrief':
        router.push(id ? `/brief/${id}` : '/brief');
        break;
      case 'About':
        router.push('/about');
        break;
      case 'Testimonials':
        router.push('/testimonials');
        break;
      case 'Careers':
        router.push('/careers');
        break;
      case 'Contact':
        router.push('/contact');
        break;
      case 'Blog':
        router.push('/blog');
        break;
      case 'BlogPost':
        router.push(id ? `/blog/${id}` : '/blog');
        break;
      case 'Visibility':
        router.push('/visibility');
        break;
      case 'PrivacyPolicy':
        router.push('/privacy');
        break;
      case 'TermsOfService':
        router.push('/terms');
        break;
      default:
        router.push('/');
    }
  };

  return <PricingPage setPage={setPage} />;
}