import React from 'react';
import AdminMain from '../components/AdminMain';

export const metadata = {
  title: 'Alejandro LR | Admin',
  description: 'Login page for the admin panel',
};

export function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className='mx-6 space-y-14 md:mx-auto md:max-w-screen-md lg:mx-auto lg:max-w-screen-lg'>
      <AdminMain>{children}</AdminMain>
    </div>
  );
}

export default AdminLayout;
