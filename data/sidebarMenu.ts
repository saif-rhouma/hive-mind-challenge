import { IconName } from '@/components/icons/types';

export const SIDEBAR_MENU: {
  label: string;
  icon: IconName;
  href: string;
}[] = [
  { label: 'New Chat', icon: 'PencilSquare', href: '/chat' },
  { label: 'Translate Text', icon: 'Translate', href: '/translate/text' },
  { label: 'Translate Video', icon: 'CameraVideo', href: '/translate/video' },
  { label: 'Files', icon: 'Files', href: '/files' },
  { label: 'History', icon: 'ClockHistory', href: '/history' },
];
