import type { Metadata } from 'next';
import Link from 'next/link';

import '@/styles/globals.css';

export const metadata: Metadata = {
  title: 'Bio-AI',
  description: 'Bio-AI static knowledge portal',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN">
      <body>
        <div className="site-shell">
          <header className="site-header site-header-bio">
            <Link href="/">
              <strong>Bio-AI</strong>
            </Link>
          </header>
          {children}
        </div>
      </body>
    </html>
  );
}
