import React from 'react';

interface OnChangeProps {
  onChange: (value: any) => void;
}

interface HOCConfigProps {
  store_temporary_onChange: any;
  field_onChange: any;
}

function HOC_on_change<T>(
  WrappedComponent: React.ComponentType<T & OnChangeProps>
) {
  // Create a new functional component that accepts the configuration props
  const EnhancedComponent: React.FC<T & HOCConfigProps> = ({
    store_temporary_onChange,
    field_onChange,
    ...props
  }) => {
    function onChange(value: any) {
      // save value to temporary store to the field
      console.log(store_temporary_onChange, field_onChange, value);
    }

    // Spread the provided props and add the new onChange handler
    return <WrappedComponent {...(props as T)} onChange={onChange} />;
  };

  return EnhancedComponent;
}

export default HOC_on_change;
