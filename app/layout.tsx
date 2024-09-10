import './globals.css';
import type { Metadata } from 'next';
import { Roboto_Condensed } from 'next/font/google';
import Navbar from '@/components/Navbar/Navbar'
import Footer from '@/components/Footer/Footer'

const inter = Roboto_Condensed({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'Next App',
    template: '%s | Next App',
  },
  description: 'Create next app description',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='container'>
          <Navbar />
            {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
