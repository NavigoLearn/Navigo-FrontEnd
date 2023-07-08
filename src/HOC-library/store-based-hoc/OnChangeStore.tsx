import React from 'react';
import { WritableAtom } from 'nanostores';
import { HashMap } from '@type/roadmap/stores/roadmap';

interface HOCConfigProps<T> {
  store_temporary: WritableAtom<HashMap<T>>;
  field: string;
}

interface ProvidedProps<T> {
  onChange: (value: T) => void;
  value: T;
}

type ExcludeProvidedProps<R, T> = Pick<
  T,
  Exclude<keyof T, keyof ProvidedProps<R>>
>;

function typeGuard<R, T extends ProvidedProps<R>>(props: any): props is T {
  return 'onChange' in props && 'value' in props;
}

function HOC_on_change<R, T extends ProvidedProps<R>>(
  WrappedComponent: React.ComponentType<T>
) {
  return function EnhancedComponent({
    store_temporary,
    field,
    ...props
  }: HOCConfigProps<R> & ExcludeProvidedProps<R, T>) {
    function onChange(value: R) {
      const modifiedStore = { ...store_temporary.get() };
      modifiedStore[field] = value;
      store_temporary.set(modifiedStore);
    }

    const newProps = {
      ...props,
      onChange,
      value: store_temporary.get()[field],
    }; // adds onChange to all the other props of the WrappedComponent

    if (typeGuard<R, T>(newProps)) {
      return <WrappedComponent {...newProps} />;
    } else {
      return <div>error occured in HOC on change in store</div>;
    }
  };
}

export default HOC_on_change;
