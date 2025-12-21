import * as Icons from './icons';
import { IconName, IconProps } from './icons/types';

interface GenericIconProps extends IconProps {
  name: IconName;
}

export const Icon: React.FC<GenericIconProps> = ({
  name,
  size = 16,
  ...props
}) => {
  const Svg = Icons[name];
  if (!Svg) return null;
  return <Svg size={size} {...props} />;
};
