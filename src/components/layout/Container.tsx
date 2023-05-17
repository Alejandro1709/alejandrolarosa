'use client';

import { useTabStore } from '@/stores/tabStore';
import Grid from '../Grid';
import Skills from '../Skills';

function Container() {
  const currentTab = useTabStore((state) => state.currentTab);

  return currentTab === 1 ? (
    <Grid />
  ) : currentTab === 2 ? (
    <Grid />
  ) : currentTab === 3 ? (
    <Skills />
  ) : null;
}

export default Container;
