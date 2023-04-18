import { useEffect } from 'react';

export function useScrollToId() {
  return useEffect(() => {
    const href = window.location.href;
    if (href.includes('#')) {
      const id = `${href.substring(href.indexOf('#') + 1)}`;
      const anchor = document.getElementById(id);
      console.log('anchor', anchor);
      if (anchor) {
        anchor.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);
}
