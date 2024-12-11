'use client';

import SidebarSection from '../../containers/sidebar-section';
import { getTokenFromLocalStorage } from '../../store/profile.store';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const DashboardPage = () => {
  const router = useRouter();

  useEffect(() => {
    const isAuthenticated = getTokenFromLocalStorage()
    if (!isAuthenticated) {
      router.push('/auth/login');
    }
  }, [router]);

  return (
    <SidebarSection>
      <div className='p-10'>
        <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
        <p>Welcome to your dashboard! Manage your content here.</p>
      </div>
    </SidebarSection>
  );
};

export default DashboardPage;
