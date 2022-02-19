import { CSSProperties, ReactNode } from 'react';

type IBackgroundProps = {
  children: ReactNode;
  color: string;
  classes?: string;
  style?: CSSProperties;
};

const Background = (props: IBackgroundProps) => (
  <div style={props.style} className={`${props.color} ${props.classes}`}>
    {props.children}
  </div>
);

export { Background };
