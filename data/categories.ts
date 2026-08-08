import type { Category } from '@/types';

const IMG_BASE = 'https://www.veilcraft.in/public/images/products/';

export const categories: Category[] = [
  {
    id: 'wpc-doors',
    slug: 'wpc-doors',
    name: 'WPC Doors',
    description:
      'Waterproof, termite-proof WPC doors for residential and commercial spaces, plus purpose-built waterproof doors for bathrooms and kitchens.',
    image: IMG_BASE + '1758176225-wpc-doors.webp',
    productCount: 2,
    icon: 'DoorOpen',
  },
  {
    id: 'wpc-windows',
    slug: 'wpc-windows',
    name: 'WPC Windows & Frames',
    description:
      'Insulated, weatherproof WPC windows and matching window frames engineered to resist moisture, termites and UV fading.',
    image: IMG_BASE + '1758178183-wpc-window.webp',
    productCount: 2,
    icon: 'Square',
  },
  {
    id: 'wpc-door-frames',
    slug: 'wpc-door-frames',
    name: 'WPC Door Frames & Chaukhat',
    description:
      'Waterproof WPC door frames and chaukhat — a dimensionally stable, maintenance-free foundation for every door.',
    image: IMG_BASE + '1758179336-wpc-door-frame.webp',
    productCount: 2,
    icon: 'RectangleHorizontal',
  },
  {
    id: 'wpc-boards',
    slug: 'wpc-boards',
    name: 'WPC Boards',
    description:
      'The waterproof plywood alternative for furniture, cabinetry, partitions and interior construction.',
    image: IMG_BASE + '1758185242-wpc-board.jpg',
    productCount: 1,
    icon: 'Layers',
  },
  {
    id: 'wpc-grills-jali',
    slug: 'wpc-grills-jali',
    name: 'WPC Grills & Jali',
    description:
      'Decorative, weatherproof WPC grills and jali panels for facades, balconies, partitions and privacy screens.',
    image: IMG_BASE + '1758186677-wpc-grill.webp',
    productCount: 2,
    icon: 'AlignJustify',
  },
  {
    id: 'pvc-range',
    slug: 'pvc-range',
    name: 'PVC Range',
    description:
      'Solid PVC doors, door frames and foam boards — lightweight, waterproof and hygienic for interiors and exteriors.',
    image: IMG_BASE + '1766064487-pvc-doors.webp',
    productCount: 3,
    icon: 'LayoutGrid',
  },
];
