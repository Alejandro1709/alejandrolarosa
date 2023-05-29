'use client'

import { useEffect } from "react"
import Hotjar from '@hotjar/browser';

const siteId = 3512046;
const hotjarVersion = 6;

function Analytics() {
  useEffect(() => {
    Hotjar.init(siteId, hotjarVersion);

    const onRouteChange = () => Hotjar.init

    window.addEventListener("routeChange", onRouteChange);
    return () => window.removeEventListener("routeChange", onRouteChange);

  }, [])

  return null
}

export default Analytics