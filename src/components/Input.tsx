import React, {useState} from 'react';

interface Props {
      onChange: (value: string) => void;
}
interface State {
      value: string
}

export const Input = (props: Props) => {
      const [state, setState] = useState<State>({value: '0'})

      const onChange = (ev:React.ChangeEvent<HTMLInputElement>) => {
            const value = ev.currentTarget.value;
            if(Number(value) >= 0) {
                  setState({value});
                  props.onChange( value || '0')
            }
      }
      return (
            <input type="number" value={state.value} onChange={onChange}/>
      );
}