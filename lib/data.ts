/** Typed fixtures for the ShadowSpark Express demonstration (mock-first, no backend). */

export interface TrackingEvent {
  time: string;
  location: string;
  status: 'info' | 'transit' | 'out-for-delivery' | 'delivered';
  text: string;
}

export interface TrackingRecord {
  ref: string;      // e.g. SSX-10001
  service: 'Express' | 'Express Saver' | 'Freight';
  from: string;
  to: string;
  weightKg: number;
  status: string;
  eta?: string;
  timeline: TrackingEvent[];
}

export interface DropoffPoint {
  id: string;
  name: string;
  city: string;
  address: string;
  hours: string;
  services: string[];
}

export interface CityZone {
  name: string;
  zone: number; // 1 = same-region, 2 = inter-state, 3 = far
}

export const SERVICE_MULT: Record<string, number> = {
  Perimeter: 0.8,
  Express: 1.0,
  'Express Saver': 1.35,
  Freight: 0.6,
};

export const ZONES: CityZone[] = [
  { name: 'Lagos', zone: 1 },
  { name: 'Ikeja', zone: 1 },
  { name: 'Ibadan', zone: 2 },
  { name: 'Port Harcourt', zone: 2 },
  { name: 'Benin City', zone: 2 },
  { name: 'Abuja', zone: 3 },
  { name: 'Enugu', zone: 3 },
  { name: 'Owerri', zone: 3 },
  { name: 'Kano', zone: 4 },
  { name: 'Kaduna', zone: 4 },
];

export const DROPOFFS: DropoffPoint[] = [
  { id: 'lg-1', name: 'VI Service Point', city: 'Lagos', address: '12 Adetokunbo Ademola CI, Victoria Island', hours: 'Mon–Sat 8:00–19:00', services: ['Express', 'Express Saver'] },
  { id: 'lg-2', name: 'Ikeja Main Depot', city: 'Ikeja', address: '5 Obafemi Awolowo Way, Ikeja', hours: 'Mon–Sun 24h', services: ['Express', 'Saver', 'Freight'] },
  { id: 'abj-1', name: 'Wuse Pickup Point', city: 'Abuja', address: '27 Ahmadu Bello Way, Wuse 2', hours: 'Mon–Sat 8:00–18:00', services: ['Express', 'Express Saver'] },
  { id: 'ph-1', name: 'Port Harcourt Hub', city: 'Port Harcourt', address: '9 Aba Rd, GRA Phase 2', hours: 'Mon–Sat 8:00–18:00', services: ['Express', 'Freight'] },
  { id: 'ow-1', name: 'Owerri Service Hub', city: 'Owerri', address: '3 Chukwuma Nhaoda St, Aladinma', hours: 'Mon–Sat 8:30–18:00', services: ['Express', 'Express Saver'] },
  { id: 'kn-1', name: 'Kano Central Point', city: 'Kano', address: '41 Murtala Mohammed Way', hours: 'Mon–Sat 9:00–17:30', services: ['Express', 'Freight'] },
];

export const TRACKING_EXAMPLES: TrackingRecord[] = [
  {
    ref: 'SSX-10001',
    service: 'Express',
    from: 'Lagos, Nigeria',
    to: 'Abuja, Nigeria',
    weightKg: 3.5,
    status: 'Out for delivery',
    eta: 'Today by 18:00',
    timeline: [
      { time: '2026-11-10 09:12', location: 'Abuja', status: 'out-for-delivery', text: 'Out for delivery on route ABJ-42' },
      { time: '2026-11-09 22:40', location: 'Abuja Hub', status: 'transit', text: 'Arrived at destination service hub' },
      { time: '2026-11-09 14:05', location: 'Lagos', status: 'transit', text: 'Departed origin facility — in transit to Abuja' },
      { time: '2026-11-09 08:20', location: 'Lagos', status: 'info', text: 'Shipment picked up and logged' },
    ],
  },
  {
    ref: 'SSX-10002',
    service: 'Express Saver',
    from: 'Ibadan, Nigeria',
    to: 'Enugu, Nigeria',
    weightKg: 7.0,
    status: 'In transit',
    eta: 'Tomorrow by 20:00',
    timeline: [
      { time: '2026-11-10 07:48', location: 'Ibadan', status: 'transit', text: 'Departed Ibadan — heading east' },
      { time: '2026-11-09 16:02', location: 'Ibadan', status: 'info', text: 'Picked up from sender' },
    ],
  },
  {
    ref: 'SSX-10003',
    service: 'Freight',
    from: 'Kano, Nigeria',
    to: 'Port Harcourt, Nigeria',
    weightKg: 420.0,
    status: 'Delivered',
    eta: '',
    timeline: [
      { time: '2026-11-08 16:30', location: 'Port Harcourt', status: 'delivered', text: 'Delivered. Signed by K. Uchema' },
      { time: '2026-11-08 10:10', location: 'Port Harcourt Hub', status: 'out-for-delivery', text: 'Out for delivery on route PH-11' },
      { time: '2026-11-06 08:00', location: 'Kano', status: 'transit', text: 'Departed Kano Origin' },
      { time: '2026-11-05 14:00', location: 'Kano', status: 'info', text: 'Freight booked and loaded' },
    ],
  },
];

export const SERVICES = [
  { id: 'express', title: 'Express', by: '1–2 business days', desc: 'Door-to-door priority delivery to any state. Real-time tracking built in.', highlight: true },
  { id: 'saver', title: 'Express Saver', by: '2–3 business days', desc: 'The same network at a friendlier price for less-urgent parcels.', highlight: false },
  { id: 'freight', title: 'Freight & Bulk', by: 'Scheduled', desc: 'Pallet and bulk freight across Nigerian corridors with trucking partners.', highlight: false },
  { id: 'delivery', title: 'Same-day Delivery', by: 'Lagos metro', desc: 'Local same-day routes in major metro areas for urgent items.', highlight: false },
  { id: 'eshop', title: 'E-commerce Fulfilment', by: 'Plug & play', desc: 'Warehousing, kitting and last-mile for online stores.', highlight: false },
  { id: 'documents', title: 'Document Service', by: 'Envelope', desc: 'Secure courier for contracts, certificates and legal mail.', highlight: false },
];
