import { Code, Palette, Globe, Smartphone } from 'lucide-react';
import { Service } from '../types';

export const services: Service[] = [
  {
    icon: Code,
    title: 'Web Development',
    description: 'Custom web applications built with modern technologies and best practices.'
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Beautiful and intuitive interfaces that enhance user experience.'
  },
  {
    icon: Globe,
    title: 'Digital Strategy',
    description: 'Strategic planning and consulting for digital transformation.'
  },
  {
    icon: Smartphone,
    title: 'Mobile Development',
    description: 'Native and cross-platform mobile applications.'
  }
];