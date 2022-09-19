import Image from 'next/image';
import { Container, MenuItem } from './style';
import Link from 'next/link';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import LanguageToggle from '@components/LanguageToggle';
import FullScreenMenu from '@components/FullScreenMenu';
import { useCallback, useEffect, useState } from 'react';
import HamburgerMenu from '@components/HamburgerMenu';

const useMediaQUery = width => {
  const [targetReached, setTargetReached] = useState(false);

  const updateTarget = useCallback(e => {
    if (e.matches) {
      setTargetReached(true);
    } else {
      setTargetReached(false);
    }
  }, []);

  useEffect(() => {
    const media = window.matchMedia(`(max-width: ${width}px)`);
    media.addEventListener('change', updateTarget);

    // check on mount (callback is not called until a change occurs)
    if (media.matches) {
      setTargetReached(true);
    }
  }, []);
  return targetReached;
};

const Navbar = ({ currentPage }) => {
  const isBreakpoint = useMediaQUery(768);

  return (
    <Container>
      {isBreakpoint ? (
        <HamburgerMenu currentPage={currentPage} />
      ) : (
        <FullScreenMenu currentPage={currentPage} />
      )}
    </Container>
  );
};

export default Navbar;
