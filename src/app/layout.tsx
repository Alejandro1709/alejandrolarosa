import Navigation from '@/components/navigation';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './globals.css';

export const metadata = {
  title: 'Alejandro LR',
  description: 'Alejandro LR is a software engineer based on Lima, Peru.',
};

const queryClient = new QueryClient()

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className='flex min-h-screen flex-col gap-2 bg-slate-900 p-4 lg:mx-auto lg:max-w-screen-md xl:mx-auto xl:max-w-screen-md'>
        <QueryClientProvider client={queryClient}>
          <Navigation />
          <main className='flex-1'>{children}</main>
        </QueryClientProvider>
      </body>
    </html>
  );
}
