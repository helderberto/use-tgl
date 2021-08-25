import { useState, useMemo } from 'react';

interface UseTgl {
  enabled: boolean;
  on(): void;
  off(): void;
  toggle(): void;
}

type optionalInitialvalue = boolean;

export function useTgl(enabled: optionalInitialvalue = true): UseTgl {
  const [state, setState] = useState(enabled);

  const handlers = useMemo(
    () => ({
      on: () => setState(true),
      off: () => setState(false),
      toggle: () => setState(!state),
    }),
    [],
  );

  return { enabled: state, ...handlers };
}
