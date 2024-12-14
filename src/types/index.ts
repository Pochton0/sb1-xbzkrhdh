export interface Service {
  icon: JSX.Element;
  title: string;
  description: string;
}

export interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
}

export interface NavItem {
  label: string;
  href: string;
}