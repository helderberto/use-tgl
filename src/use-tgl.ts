import { SetStateAction, Dispatch, useState, useMemo } from 'react';

interface ReturnType {
  enabled: boolean;
  on: () => void;
  off: () => void;
  toggle: () => void;
}

type HandleState = [boolean, Dispatch<SetStateAction<boolean>>];

type optionalInitialvalue = boolean;

function useTgl(enabled: optionalInitialvalue = true): ReturnType {
  const [state, setState]: HandleState = useState(enabled);

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

export default useTgl;
