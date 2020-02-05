import React from 'react';

interface Props {
      onChange: (value: string) => void;
}

export const Input = (props: Props) => {
      return (
            <input type="number"
             onChange={ (ev) => props.onChange(ev.currentTarget.value || '0')}/>
      );
}