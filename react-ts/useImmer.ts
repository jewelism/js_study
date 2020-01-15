import produce, { Draft } from 'immer';
import { useCallback, useState } from 'react';

function useImmer<S = any>(
  initialState: (() => S) | S,
): [S, (recipe: (draft: Draft<S>) => void) => void];

function useImmer(initialState: any) {
  const [state, setState] = useState(initialState);

  return [
    state,
    useCallback(recipe => {
      setState(produce(recipe));
    }, []),
  ];
}

export default useImmer;
