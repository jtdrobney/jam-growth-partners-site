import PartnerNetworkClient from './PartnerNetworkClient';

export const metadata = {
  title: 'Strategic Partner Opportunity | JAM Growth Partners',
  description:
    'Private partner opportunity for executives, consultants, and business development professionals.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function PartnerNetworkPage() {
  return <PartnerNetworkClient />;
}
