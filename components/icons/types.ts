export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
}

export type IconName =
  | 'PencilSquare'
  | 'Translate'
  | 'CameraVideo'
  | 'Files'
  | 'ClockHistory'
  | 'LayoutSidebarReverse'
  | 'Google'
  | 'Facebook'
  | 'Apple'
  | 'PeopleCircle';
