import { IconProps } from './types';

export const List: React.FC<IconProps> = ({
  size = 16,
  color = 'currentColor',
  ...props
}) => (
  <svg width={size} height={size} fill={color} viewBox="0 0 16 16" {...props}>
    <path
      fillRule="evenodd"
      d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
    />
  </svg>
);
