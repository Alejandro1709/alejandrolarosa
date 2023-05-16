'use client';

import { useTabStore } from '@/stores/tabStore';
import Grid from '../Grid';

function Container() {
  const currentTab = useTabStore((state) => state.currentTab);

  return currentTab === 1 ? <Grid /> : currentTab === 2 ? <Grid /> : null;
}

export default Container;
