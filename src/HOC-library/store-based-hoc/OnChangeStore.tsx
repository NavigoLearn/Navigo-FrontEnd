import React from 'react';

interface HOCConfigProps {
  store_temporary: any;
  field: any;
}

interface ProvidedProps {
  onChange: (value: any) => void;
}

type ExcludeProvidedProps<P> = Pick<P, Exclude<keyof P, keyof ProvidedProps>>;

function HOC_on_change<T extends ProvidedProps>(
  WrappedComponent: React.ComponentType<T & ProvidedProps>
) {
  return function EnhancedComponent({
    store_temporary,
    field,
    ...props
  }: HOCConfigProps & ExcludeProvidedProps<T>) {
    function onChange(value: any) {
      // console.log(store_temporary, field, value);
    }
    const newProps: T & ProvidedProps = { ...props };

    return (
      <WrappedComponent
        {...newProps}
        onChange={(value) => {
          onChange(value);
        }}
      />
    );
  };
}

export default HOC_on_change;
