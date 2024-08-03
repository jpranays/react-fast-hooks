import { useState, useEffect, useCallback, useRef } from 'react';
import { isBrowser } from '../utils';

interface SwipeState {
  startX: number | null;
  startY: number | null;
  endX: number | null;
  endY: number | null;
  direction: 'left' | 'right' | 'up' | 'down' | null;
}

interface UseTouchSwipe {
  swipeState: SwipeState;
  reset: () => void;
}

/**
 * Hook to detect touch swipe gestures.
 * 
 * @param {React.RefObject<HTMLElement>} ref - The ref of the element to attach the touch events to.
 * @returns {UseTouchSwipe} The current swipe state and a reset function.
 */
const useTouchSwipe = (ref: React.RefObject<HTMLElement>): UseTouchSwipe => {
  const [swipeState, setSwipeState] = useState<SwipeState>({
    startX: null,
    startY: null,
    endX: null,
    endY: null,
    direction: null,
  });

  const handleTouchStart = useCallback((event: TouchEvent) => {
    const touch = event.touches[0];
    setSwipeState((prevState) => ({
      ...prevState,
      startX: touch.clientX,
      startY: touch.clientY,
    }));
  }, []);

  const handleTouchMove = useCallback((event: TouchEvent) => {
    const touch = event.touches[0];
    setSwipeState((prevState) => ({
      ...prevState,
      endX: touch.clientX,
      endY: touch.clientY,
    }));
  }, []);

  const handleTouchEnd = useCallback(() => {
    setSwipeState((prevState) => {
      const { startX, startY, endX, endY } = prevState;
      if (startX === null || startY === null || endX === null || endY === null) {
        return prevState;
      }
      const deltaX = endX - startX;
      const deltaY = endY - startY;
      let direction: 'left' | 'right' | 'up' | 'down' | null = null;
      if (Math.abs(deltaX) > Math.abs(deltaY)) {
        direction = deltaX > 0 ? 'right' : 'left';
      } else {
        direction = deltaY > 0 ? 'down' : 'up';
      }
      return { ...prevState, direction };
    });
  }, []);

  useEffect(() => {
    if (!isBrowser() || !ref.current) return;

    const element = ref.current;

    element.addEventListener('touchstart', handleTouchStart);
    element.addEventListener('touchmove', handleTouchMove);
    element.addEventListener('touchend', handleTouchEnd);

    return () => {
      element.removeEventListener('touchstart', handleTouchStart);
      element.removeEventListener('touchmove', handleTouchMove);
      element.removeEventListener('touchend', handleTouchEnd);
    };
  }, [ref, handleTouchStart, handleTouchMove, handleTouchEnd]);

  const reset = () => {
    setSwipeState({
      startX: null,
      startY: null,
      endX: null,
      endY: null,
      direction: null,
    });
  };

  return { swipeState, reset };
};

export default useTouchSwipe;
