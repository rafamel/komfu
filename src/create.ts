import { TFu, IFuInstance } from './types';
import { of } from 'rxjs';

export default create;

function create<A extends {}, B extends A>(
  provider: TFu<A, B>,
  initial: A
): Required<IFuInstance<B>>;
function create<B extends {}>(provider: TFu<{}, B>): Required<IFuInstance<B>>;

function create(
  provider: TFu<any, any>,
  initial?: any
): Required<IFuInstance<any>> {
  if (!initial) initial = {};

  return provider({
    initial,
    subscriber: of(initial),
    teardown: () => {}
  });
}
