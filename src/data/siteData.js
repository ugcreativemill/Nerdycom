import {
  BadgeCheck,
  Globe,
  HardDrive,
  Headset,
  Layers3,
  LayoutDashboard,
  MonitorSmartphone,
  Palette,
  ScanSearch,
  ShieldCheck,
  SmartphoneCharging,
  Wrench,
} from 'lucide-react';

export const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export const shopUrl = 'https://shop.nerdycom.co.ke';

export const services = [
  {
    title: 'Laptop & Hardware Sales',
    description:
      'Business-ready laptops, accessories, networking gear, and reliable hardware sourcing tailored to your team.',
    icon: HardDrive,
  },
  {
    title: 'Custom Software Development',
    description:
      'Scalable internal tools, POS systems, business automation, and software built around your workflow.',
    icon: Layers3,
  },
  {
    title: 'Website Design',
    description:
      'Fast, modern websites with strong UX, responsive layouts, and conversion-focused messaging.',
    icon: Globe,
  },
  {
    title: 'Custom Systems Design',
    description:
      'We design tailored business systems, dashboards, and workflows that fit how your company actually operates.',
    icon: LayoutDashboard,
  },
  {
    title: 'IT Support & Maintenance',
    description:
      'Proactive support, troubleshooting, updates, and maintenance to keep your operations running cleanly.',
    icon: Wrench,
  },
];

export const detailedServices = [
  {
    title: 'Infrastructure & Hardware',
    description:
      'We source, configure, and deploy laptops, desktops, routers, accessories, and business hardware with setup support.',
    points: ['Procurement guidance', 'Office hardware deployment', 'Device configuration'],
    icon: HardDrive,
  },
  {
    title: 'Business Software Engineering',
    description:
      'From tailored dashboards to workflow automation, we ship maintainable software for growing teams.',
    points: ['Custom POS systems', 'Admin dashboards', 'Automation tools'],
    icon: LayoutDashboard,
  },
  {
    title: 'Custom Systems Design',
    description:
      'We map your operations, identify friction, and design digital systems around your exact business process.',
    points: ['Workflow architecture', 'Role-based system planning', 'Scalable custom modules'],
    icon: ScanSearch,
  },
  {
    title: 'Digital Experience Design',
    description:
      'We build websites and digital products that look sharp, load fast, and support real business outcomes.',
    points: ['UI/UX strategy', 'Responsive web development', 'SEO-ready structure'],
    icon: SmartphoneCharging,
  },
  {
    title: 'Managed IT Support',
    description:
      'Our support model focuses on uptime, security, and fast response for teams that need dependable technical backup.',
    points: ['Remote troubleshooting', 'Maintenance plans', 'Security best practices'],
    icon: Headset,
  },
];

export const projects = [
  {
    name: 'Retail POS System',
    category: 'Software Platform',
    summary: 'Inventory, checkout, reporting, and staff management for a fast-moving retail business.',
  },
  {
    name: 'Clinic Management System',
    category: 'Custom System Design',
    summary: 'Appointments, patient records, billing, and reporting tailored to a growing care team.',
  },
  {
    name: 'Corporate Website Suite',
    category: 'Web Experience',
    summary: 'A conversion-focused company site with CMS-ready content sections and lead capture.',
  },
  {
    name: 'Analytics Dashboard',
    category: 'Business Intelligence',
    summary: 'Real-time performance views for operations, sales, and executive reporting.',
  },
  {
    name: 'Support Portal',
    category: 'IT Operations',
    summary: 'A streamlined helpdesk interface for client issue tracking and service visibility.',
  },
];

export const portfolioProjects = [
  {
    name: 'Retail POS Platform',
    type: 'Custom System',
    outcome: 'Unified sales, inventory, cashier workflows, and reporting in one operational platform.',
    icon: MonitorSmartphone,
  },
  {
    name: 'School Admin Suite',
    type: 'System Design',
    outcome: 'Admissions, fee tracking, communication, and staff controls designed around school operations.',
    icon: ScanSearch,
  },
  {
    name: 'Corporate Brand Website',
    type: 'Website Design',
    outcome: 'High-conversion web presence with premium visuals, trust sections, and lead capture flow.',
    icon: Palette,
  },
  {
    name: 'Operations Dashboard',
    type: 'Analytics Platform',
    outcome: 'Role-based KPIs, performance monitoring, and management views for better daily decisions.',
    icon: LayoutDashboard,
  },
];

export const designProcess = [
  'We study your current workflow and identify friction points.',
  'We design a cleaner digital flow around your staff, customers, and approvals.',
  'We build custom modules only where your business actually needs them.',
  'We refine the system with feedback so the final product feels native to your operation.',
];

export const whyChooseUs = [
  'Fast Delivery',
  'Affordable Pricing',
  'Reliable Support',
  'Expert Team',
];

export const stats = [
  { value: '120+', label: 'Projects Delivered' },
  { value: '98%', label: 'Client Satisfaction' },
  { value: '24/7', label: 'Support Coverage' },
];

export const testimonials = [
  {
    name: 'Amina K.',
    role: 'Retail Operations Manager',
    quote:
      'Nerdycom helped us modernize our store systems and reduce downtime. The delivery was fast and structured.',
  },
  {
    name: 'Brian O.',
    role: 'Startup Founder',
    quote:
      'Their team built a polished website and internal dashboard that gave our business a much stronger digital presence.',
  },
  {
    name: 'Faith N.',
    role: 'Admin Lead',
    quote:
      'Support is responsive, practical, and easy to work with. We trust them with our day-to-day IT needs.',
  },
];

export const highlights = [
  {
    title: 'Mission',
    description:
      'To equip businesses with smarter technology, dependable support, and digital products that create measurable value.',
    icon: BadgeCheck,
  },
  {
    title: 'Vision',
    description:
      'To become the trusted technology growth partner for ambitious brands across East Africa and beyond.',
    icon: ShieldCheck,
  },
];
