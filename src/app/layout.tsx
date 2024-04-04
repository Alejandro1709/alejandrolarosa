import { Analytics } from '@vercel/analytics/react';
import Script from 'next/script';
import './globals.css';

export const metadata = {
  generator: 'Next.js',
  title: 'Alejandro LR',
  description:
    'My name is Alejandro LR, a talented software engineer based in Lima, Peru. With expertise in various programming languages and a passion for creating efficient and scalable solutions, I strive to deliver high-quality software that exceeds expectations. Explore my portfolio and discover how I can help you transform your ideas into reality.',
  keywords: ['Portfolio', 'Enigineer', 'Full Stack', 'Web Dev'],
  authors: [{ name: 'Alejandro LR' }],
  colorScheme: 'dark',
  creator: 'Alejandro LR',
  publisher: 'Alejandro LR',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className='flex min-h-screen flex-col'>
        <div className='flex-1'>{children}</div>
        {/* <Analytics /> */}
        <Script id='onRouteChange'>
          {`
         (function(h,o,t,j,a,r){
          h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
          h._hjSettings={hjid:3512046,hjsv:6};
          a=o.getElementsByTagName('head')[0];
          r=o.createElement('script');r.async=1;
          r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
          a.appendChild(r);
      })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
        `}
        </Script>
        <Analytics />
      </body>
    </html>
  );
}
