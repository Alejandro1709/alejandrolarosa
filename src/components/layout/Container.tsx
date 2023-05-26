'use client';

import { useTabStore } from '@/stores/tabStore';
import Contact from '../Contact';
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
  ) : currentTab === 4 ? (
    <Contact />
  ) : null;
}

export default Container;
