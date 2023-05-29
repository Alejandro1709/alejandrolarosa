import Navigation from '@/components/navigation';
import QueryProvider from '@/components/QueryProvider';
import Footer from '@/components/navigation/Footer';
import './globals.css';

export const metadata = {
  generator: 'Next.js',
  title: 'Alejandro LR',
  description: 'My name is Alejandro LR, a talented software engineer based in Lima, Peru. With expertise in various programming languages and a passion for creating efficient and scalable solutions, I strive to deliver high-quality software that exceeds expectations. Explore my portfolio and discover how I can help you transform your ideas into reality.',
  keywords: ['Portfolio', 'Enigineer', 'Full Stack', 'Web Dev'],
  authors: [{ name: 'Alejandro LR' }],
  colorScheme: 'dark',
  creator: 'Alejandro LR',
  publisher: 'Alejandro LR'
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className='relative flex min-h-screen flex-col gap-2 bg-slate-900 p-4 lg:mx-auto lg:max-w-screen-md xl:mx-auto xl:max-w-screen-md'>
        <QueryProvider>
          <Navigation />
          <main className='flex-1'>{children}</main>
          <Footer />
        </QueryProvider>
      </body>
    </html>
  );
}
