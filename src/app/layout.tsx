import Navigation from '@/components/navigation';
import QueryProvider from '@/components/QueryProvider';
import Footer from '@/components/navigation/Footer';
import './globals.css';

export const metadata = {
  title: 'Alejandro LR',
  description: 'Alejandro LR is a software engineer based on Lima, Peru.',
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
