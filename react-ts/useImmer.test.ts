import { act, renderHook } from '@testing-library/react-hooks';

import useImmer from './useImmer';

interface IState {
  a: number;
  b: number;
}

test('should increment counter', () => {
  const { result } = renderHook(() => useImmer<IState>({ a: 1, b: 2 }));

  act(() => {
    const [, produce] = result.current;
    produce((draft: IState) => {
      draft.a = 2;
    });
  });

  const [state] = result.current;
  expect(state).toEqual({ a: 2, b: 2 });
});
