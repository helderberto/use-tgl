import { useState, useMemo } from 'react';

interface UseTgl {
  state: boolean;
  on(): void;
  off(): void;
  switch(): void;
}

type initialState = boolean;

export function useTgl(initial: initialState = true): UseTgl {
  const [state, setState] = useState(initial);

  const handlers = useMemo(
    () => ({
      on: () => setState(true),
      off: () => setState(false),
      switch: () => setState(!state),
    }),
    [],
  );

  return { state, ...handlers };
}
