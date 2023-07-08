import React from 'react';

interface HOCConfigProps {
  store_temporary: any;
  field: any;
}

interface ProvidedProps {
  onChange: (value: any) => void;
}

type ExcludeProvidedProps<P> = Pick<P, Exclude<keyof P, keyof ProvidedProps>>;

function typeGuard<T extends ProvidedProps>(props: any): props is T {
  return props.onChange !== undefined;
}

function HOC_on_change<T extends ProvidedProps>(
  WrappedComponent: React.ComponentType<T>
) {
  return function EnhancedComponent({
    store_temporary,
    field,
    ...props
  }: HOCConfigProps & ExcludeProvidedProps<T>) {
    function onChange(value: any) {
      // console.log(store_temporary, field, value);
    }
    const newProps = { ...props, onChange }; // adds onChange to all the other props of the WrappedComponent
    if (typeGuard<T>(newProps)) {
      return <WrappedComponent {...newProps} />;
    } else {
      return <div>error occured in HOC on change in store</div>;
    }
  };
}

export default HOC_on_change;
