import { useState, useMemo } from 'react';

interface UseTgl {
  enabled: boolean;
  on(): void;
  off(): void;
  switch(): void;
}

type initialState = boolean;

export function useTgl(enabled: initialState = true): UseTgl {
  const [state, setState] = useState(enabled);

  const handlers = useMemo(
    () => ({
      on: () => setState(true),
      off: () => setState(false),
      switch: () => setState(!state),
    }),
    [],
  );

  return { enabled: state, ...handlers };
}
