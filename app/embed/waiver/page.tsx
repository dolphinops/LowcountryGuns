import type { Metadata } from 'next';
import { WaiverForm } from '../../(site)/waiver/WaiverForm';

export const metadata: Metadata = {
  title: 'Range waiver (embedded)',
  robots: { index: false, follow: false },
};

export default function WaiverEmbedPage() {
  return (
    <div className="p-4 md:p-6">
      <WaiverForm />
    </div>
  );
}
