import React, { useEffect, useMemo, useState } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  BadgeCheck,
  Banknote,
  CalendarDays,
  Camera,
  Check,
  ChevronDown,
  CircleUserRound,
  Clock3,
  CreditCard,
  Edit3,
  GraduationCap,
  Heart,
  Home,
  Image,
  LayoutDashboard,
  LogIn,
  LogOut,
  MapPin,
  Menu,
  PackageCheck,
  PartyPopper,
  Search,
  ShieldCheck,
  ShoppingBag,
  SlidersHorizontal,
  Sparkles,
  Star,
  Store,
  TicketCheck,
  Users,
  Utensils,
  WalletCards,
  X,
} from 'lucide-react';

const IMG = {
  hero: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1800&q=85',
  wedding: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=900&q=80',
  seminar: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=80',
  birthday: 'https://images.unsplash.com/photo-1464349153735-7db50ed83c84?auto=format&fit=crop&w=900&q=80',
  graduation: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=900&q=80',
  gathering: 'https://images.unsplash.com/photo-1507501336603-6e31db2be093?auto=format&fit=crop&w=900&q=80',
  workshop: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=900&q=80',
  campus: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=900&q=80',
  other: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=900&q=80',
  venue: 'https://images.unsplash.com/photo-1507501336603-6e31db2be093?auto=format&fit=crop&w=1000&q=80',
  catering: 'https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=1000&q=80',
  decor: 'https://images.unsplash.com/photo-1478146896981-b80fe463b330?auto=format&fit=crop&w=1000&q=80',
  photo: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1000&q=80',
  packageWedding: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1000&q=80',
  packageSeminar: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=1000&q=80',
  packageBirthday: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=1000&q=80',
  packageCampus: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1000&q=80',
};

const categories = [
  { id: 'Wedding', label: 'Wedding', image: IMG.wedding, description: 'Pernikahan hangat dan elegan.', budget: 'Mulai Rp12 jt' },
  { id: 'Seminar', label: 'Seminar', image: IMG.seminar, description: 'Seminar, talkshow, dan konferensi.', budget: 'Mulai Rp5,5 jt' },
  { id: 'Birthday', label: 'Birthday', image: IMG.birthday, description: 'Ulang tahun dengan konsep personal.', budget: 'Mulai Rp3,8 jt' },
  { id: 'Graduation', label: 'Wisuda', image: IMG.graduation, description: 'Selebrasi kelulusan yang berkesan.', budget: 'Mulai Rp4,5 jt' },
  { id: 'Gathering', label: 'Gathering', image: IMG.gathering, description: 'Kebersamaan organisasi dan komunitas.', budget: 'Mulai Rp6 jt' },
  { id: 'Workshop', label: 'Workshop', image: IMG.workshop, description: 'Kelas, pelatihan, dan edukasi.', budget: 'Mulai Rp4 jt' },
  { id: 'Campus', label: 'Event Kampus', image: IMG.campus, description: 'Acara kampus dan organisasi mahasiswa.', budget: 'Mulai Rp5 jt' },
  { id: 'Other', label: 'Lainnya', image: IMG.other, description: 'Bazar, family event, dan kebutuhan lain.', budget: 'Fleksibel' },
];

const packages = [
  {
    id: 'wedding-premium',
    type: 'Wedding',
    name: 'Wedding Package',
    tier: 'Premium',
    price: 18500000,
    pax: 200,
    location: 'Hotel Grand Malang',
    image: IMG.packageWedding,
    badge: 'Best Seller',
    includes: ['Venue', 'Catering', 'Dekorasi', 'Dokumentasi', 'Sound System'],
  },
  {
    id: 'seminar-standard',
    type: 'Seminar',
    name: 'Seminar Package',
    tier: 'Standard',
    price: 7500000,
    pax: 100,
    location: 'Hotel Savana',
    image: IMG.packageSeminar,
    badge: 'Recommended',
    includes: ['Venue', 'Catering', 'Kursi & Meja', 'Dokumentasi'],
  },
  {
    id: 'seminar-basic',
    type: 'Seminar',
    name: 'Basic Seminar',
    tier: 'Basic',
    price: 5500000,
    pax: 70,
    location: 'Malang Creative Center',
    image: IMG.seminar,
    badge: 'Budget Friendly',
    includes: ['Venue', 'Catering', 'Kursi & Meja'],
  },
  {
    id: 'seminar-premium',
    type: 'Seminar',
    name: 'Premium Seminar',
    tier: 'Premium',
    price: 9500000,
    pax: 150,
    location: 'Grand Mercure Malang',
    image: IMG.packageCampus,
    badge: 'Popular',
    includes: ['Venue', 'Catering', 'Dekorasi', 'Dokumentasi', 'Equipment'],
  },
  {
    id: 'birthday-deluxe',
    type: 'Birthday',
    name: 'Birthday Package',
    tier: 'Deluxe',
    price: 4800000,
    pax: 50,
    location: 'The Garden Cafe',
    image: IMG.packageBirthday,
    badge: 'Popular',
    includes: ['Venue', 'Catering', 'Dekorasi', 'Cake Table'],
  },
  {
    id: 'campus-standard',
    type: 'Campus',
    name: 'Campus Event Package',
    tier: 'Standard',
    price: 9000000,
    pax: 300,
    location: 'UMM Malang',
    image: IMG.packageCampus,
    badge: 'Recommended',
    includes: ['Stage', 'Sound System', 'Dokumentasi', 'Booth'],
  },
  {
    id: 'workshop-focus',
    type: 'Workshop',
    name: 'Workshop Focus',
    tier: 'Standard',
    price: 6200000,
    pax: 80,
    location: 'Malang',
    image: IMG.workshop,
    badge: 'Popular',
    includes: ['Venue', 'Coffee Break', 'Projector', 'Documentation'],
  },
  {
    id: 'gathering-fun',
    type: 'Gathering',
    name: 'Fun Gathering',
    tier: 'Standard',
    price: 6800000,
    pax: 120,
    location: 'Batu',
    image: IMG.gathering,
    badge: 'Best Value',
    includes: ['Venue', 'Catering', 'Games', 'Dokumentasi'],
  },
];

const vendors = [
  { id: 'venue-1', category: 'Venue', name: 'Grand Arunika Hall', rating: 4.8, price: 2000000, location: 'Malang', image: IMG.venue },
  { id: 'venue-2', category: 'Venue', name: 'Savana Convention', rating: 4.7, price: 2500000, location: 'Malang', image: IMG.seminar },
  { id: 'catering-1', category: 'Catering', name: 'Cahaya Catering', rating: 4.9, price: 2500000, location: 'Malang', image: IMG.catering },
  { id: 'catering-2', category: 'Catering', name: 'Dapur Rasa', rating: 4.8, price: 2000000, location: 'Batu', image: IMG.catering },
  { id: 'decor-1', category: 'Dekorasi', name: 'Mawar Decoration', rating: 4.8, price: 1500000, location: 'Malang', image: IMG.decor },
  { id: 'decor-2', category: 'Dekorasi', name: 'Luma Decor', rating: 4.7, price: 1250000, location: 'Malang', image: IMG.wedding },
  { id: 'photo-1', category: 'Dokumentasi', name: 'Pixel Moment', rating: 4.7, price: 750000, location: 'Malang', image: IMG.photo },
  { id: 'photo-2', category: 'Dokumentasi', name: 'Frame Story', rating: 4.9, price: 1000000, location: 'Malang', image: IMG.photo },
];

const customOptions = {
  venue: [
    { id: 'venue-a', label: 'Venue A', price: 2000000 },
    { id: 'venue-b', label: 'Venue B', price: 2500000 },
    { id: 'venue-c', label: 'Venue C', price: 3000000 },
  ],
  catering: [
    { id: 'cat-50', label: '50 Pax', price: 1250000 },
    { id: 'cat-100', label: '100 Pax', price: 2500000 },
    { id: 'cat-150', label: '150 Pax', price: 3650000 },
  ],
  decoration: [
    { id: 'dec-basic', label: 'Basic', price: 750000 },
    { id: 'dec-standard', label: 'Standard', price: 1500000 },
    { id: 'dec-premium', label: 'Premium', price: 2500000 },
  ],
  documentation: [
    { id: 'doc-none', label: 'Tidak Ada', price: 0 },
    { id: 'doc-photo', label: 'Foto', price: 500000 },
    { id: 'doc-video', label: 'Foto + Video', price: 1000000 },
  ],
};

const currency = (value) => new Intl.NumberFormat('id-ID', {
  style: 'currency', currency: 'IDR', maximumFractionDigits: 0,
}).format(value);

function usePersistentState(key, initialValue) {
  const [state, setState] = useState(() => {
    try {
      const saved = localStorage.getItem(key);
      return saved ? JSON.parse(saved) : initialValue;
    } catch {
      return initialValue;
    }
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
}

function Logo({ onClick }) {
  return (
    <button className="brand" onClick={onClick} aria-label="EVENTBOX Home">
      <span className="brand-icon"><CalendarDays size={20} strokeWidth={2.1} /></span>
      <span>EVENTBOX</span>
    </button>
  );
}

function Navbar({ loggedIn, currentPage, setPage, onLogin, onLogout }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navBefore = [
    ['home', 'Home'], ['explore', 'Event'], ['vendors', 'Vendor'], ['orders', 'Paket Saya'],
  ];
  const navAfter = [
    ['dashboard', 'Dashboard'], ['explore', 'Eksplorasi'], ['filter', 'Buat Event'], ['orders', 'Pesanan'], ['profile', 'Profile'],
  ];
  const nav = loggedIn ? navAfter : navBefore;

  const go = (page) => {
    setMobileOpen(false);
    setPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="site-header">
      <div className="nav-shell">
        <Logo onClick={() => go('home')} />
        <nav className={`main-nav ${mobileOpen ? 'open' : ''}`}>
          {nav.map(([id, label]) => (
            <button key={id} className={currentPage === id ? 'active' : ''} onClick={() => go(id)}>{label}</button>
          ))}
        </nav>
        <div className="nav-actions">
          <button className="icon-btn" aria-label="Cari" onClick={() => go('explore')}><Search size={19} /></button>
          <span className="nav-divider" />
          {loggedIn ? (
            <button className="btn btn-outline btn-sm" onClick={onLogout}><LogOut size={16} /> Logout</button>
          ) : (
            <>
              <button className="btn btn-ghost btn-sm desktop-only" onClick={onLogin}>Login</button>
              <button className="btn btn-primary btn-sm desktop-only" onClick={() => go('login')}>Daftar</button>
            </>
          )}
          <button className="menu-btn" aria-label="Buka menu" onClick={() => setMobileOpen(v => !v)}>
            {mobileOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>
    </header>
  );
}

function SectionHeading({ eyebrow, title, subtitle, action, onAction }) {
  return (
    <div className="section-heading">
      <div>
        {eyebrow && <span className="eyebrow">{eyebrow}</span>}
        <h2>{title}</h2>
        {subtitle && <p>{subtitle}</p>}
      </div>
      {action && <button className="text-link" onClick={onAction}>{action} <ArrowRight size={16} /></button>}
    </div>
  );
}

function CategoryStrip({ onSelect }) {
  return (
    <section className="section shell">
      <SectionHeading title="Event yang Bisa Kamu Pilih" subtitle="Temukan berbagai jenis event sesuai kebutuhanmu." action="Lihat Semua Event" onAction={() => onSelect(null)} />
      <div className="category-grid">
        {categories.map((item) => (
          <button key={item.id} className="category-card" onClick={() => onSelect(item.id)}>
            <img src={item.image} alt={item.label} />
            <div className="category-card-body">
              <span className="category-mini-icon">{item.id === 'Graduation' ? <GraduationCap size={19} /> : item.id === 'Birthday' ? <PartyPopper size={19} /> : <Sparkles size={18} />}</span>
              <strong>{item.label}</strong>
            </div>
          </button>
        ))}
      </div>
    </section>
  );
}

function VendorHighlights({ goVendors }) {
  const cards = [
    { title: 'Venue', image: IMG.venue, icon: <MapPin size={18} />, items: ['Hotel', 'Gedung', 'Cafe', 'Outdoor'] },
    { title: 'Catering', image: IMG.catering, icon: <Utensils size={18} />, items: ['Paket 50 pax', 'Paket 100 pax', 'Paket 200 pax', 'Paket custom'] },
    { title: 'Dekorasi', image: IMG.decor, icon: <Sparkles size={18} />, items: ['Minimalis', 'Elegant', 'Modern', 'Custom'] },
    { title: 'Dokumentasi', image: IMG.photo, icon: <Camera size={18} />, items: ['Foto', 'Video', 'Foto + Video', 'Custom'] },
  ];
  return (
    <section className="section shell section-tight-top">
      <SectionHeading title="Vendor Pilihan" subtitle="Temukan vendor terbaik untuk melengkapi acaramu." action="Lihat Semua Vendor" onAction={goVendors} />
      <div className="vendor-highlight-grid">
        {cards.map(card => (
          <button className="vendor-highlight-card" key={card.title} onClick={goVendors}>
            <img src={card.image} alt={card.title} />
            <div className="vendor-highlight-body">
              <div className="vendor-highlight-title"><span>{card.icon}</span><strong>{card.title}</strong></div>
              <ul>{card.items.map(v => <li key={v}>{v}</li>)}</ul>
              <span className="round-arrow"><ArrowRight size={15} /></span>
            </div>
          </button>
        ))}
      </div>
    </section>
  );
}

function QuickFilter({ filters, setFilters, onApply }) {
  return (
    <section className="section shell">
      <div className="quick-filter-card">
        <div className="filter-intro">
          <div className="filter-illustration"><CalendarDays size={35} /></div>
          <div><h3>Belum menemukan<br />yang sesuai?</h3><p>Sesuaikan event berdasarkan kebutuhanmu.</p></div>
          <button className="btn btn-primary" onClick={onApply}><SlidersHorizontal size={16} /> Atur Event Saya</button>
        </div>
        <div className="quick-filter-form">
          <SelectField label="Jenis Event" value={filters.type} onChange={v => setFilters({ ...filters, type: v })} options={['', ...categories.map(c => c.id)]} placeholder="Pilih jenis event" />
          <SelectField label="Lokasi" value={filters.location} onChange={v => setFilters({ ...filters, location: v })} options={['', 'Malang', 'Batu']} placeholder="Pilih lokasi" />
          <SelectField label="Jumlah Peserta" value={filters.pax} onChange={v => setFilters({ ...filters, pax: v })} options={['', '< 20', '20–50', '50–100', '100–200', '> 200']} placeholder="Pilih jumlah peserta" />
          <SelectField label="Budget" value={filters.budget} onChange={v => setFilters({ ...filters, budget: v })} options={['', '< Rp3 juta', 'Rp3–5 juta', 'Rp5–8 juta', 'Rp8–10 juta', '> Rp10 juta']} placeholder="Pilih budget" />
          <label className="field"><span>Tanggal</span><input type="date" value={filters.date} onChange={e => setFilters({ ...filters, date: e.target.value })} /></label>
          <button className="btn btn-primary full-height" onClick={onApply}>Terapkan Filter</button>
        </div>
      </div>
    </section>
  );
}

function SelectField({ label, value, onChange, options, placeholder }) {
  return (
    <label className="field">
      <span>{label}</span>
      <div className="select-wrap">
        <select value={value} onChange={e => onChange(e.target.value)}>
          {options.map((opt, index) => <option key={`${label}-${index}`} value={opt}>{opt || placeholder}</option>)}
        </select>
        <ChevronDown size={15} />
      </div>
    </label>
  );
}

function PackageCard({ pack, onDetail, compact = false }) {
  return (
    <article className={`package-card ${compact ? 'compact' : ''}`}>
      <div className="package-image-wrap">
        <img src={pack.image} alt={pack.name} />
        {pack.badge && <span className="badge badge-coral">{pack.badge}</span>}
      </div>
      <div className="package-body">
        <h3>{pack.name}</h3>
        <div className="package-meta"><span><Users size={14} /> {pack.pax} pax</span><span><MapPin size={14} /> {pack.location}</span></div>
        <span className="tier-chip">{pack.tier}</span>
        {!compact && <div className="package-includes">{pack.includes.slice(0, 4).map(i => <span key={i}><Check size={13} /> {i}</span>)}</div>}
        <div className="package-footer"><strong>{currency(pack.price)}</strong><button className="round-arrow" onClick={() => onDetail(pack)} aria-label={`Lihat ${pack.name}`}><ArrowRight size={15} /></button></div>
      </div>
    </article>
  );
}

function PopularPackages({ onDetail, onAll }) {
  return (
    <section className="section shell">
      <SectionHeading title="Paket Event Populer" subtitle="Rekomendasi paket terbaik sesuai kebutuhan dan budget kamu." action="Lihat Semua Paket" onAction={onAll} />
      <div className="package-grid four">{packages.slice(0, 4).map(pack => <PackageCard key={pack.id} pack={pack} onDetail={onDetail} compact />)}</div>
    </section>
  );
}

function HomePage({ setPage, selectCategory, onDetail, filters, setFilters }) {
  return (
    <>
      <section className="hero">
        <div className="hero-inner shell">
          <div className="hero-copy">
            <span className="eyebrow">EVENTBOX</span>
            <h1>Temukan Pilihan<br />untuk <em>Acara Impianmu.</em></h1>
            <p>Jelajahi berbagai event, venue, dan vendor terbaik sesuai kebutuhan dan budget kamu, dalam satu platform.</p>
            <div className="hero-actions">
              <button className="btn btn-primary" onClick={() => setPage('explore')}><Search size={17} /> Eksplor Event</button>
              <button className="btn btn-outline" onClick={() => setPage('vendors')}><CircleUserRound size={17} /> Cari Vendor</button>
            </div>
          </div>
          <div className="hero-visual">
            <img src={IMG.hero} alt="Dekorasi acara EVENTBOX" />
            <div className="hero-note">Lebih mudah<br />lebih lengkap<br />lebih hemat!</div>
          </div>
        </div>
      </section>

      <CategoryStrip onSelect={selectCategory} />
      <VendorHighlights goVendors={() => setPage('vendors')} />
      <QuickFilter filters={filters} setFilters={setFilters} onApply={() => setPage('filter')} />
      <PopularPackages onDetail={onDetail} onAll={() => setPage('explore')} />
      <StatsBanner setPage={setPage} />
      <Footer setPage={setPage} />
    </>
  );
}

function StatsBanner({ setPage }) {
  return (
    <section className="section shell footer-cta-wrap">
      <div className="stats-banner">
        <div className="stats-copy"><Sparkles size={23} /><strong>Wujudkan<br />acara impianmu<br />bersama EventBox!</strong><ArrowRight size={18} /></div>
        <div className="stat"><CalendarDays /><div><strong>1000+</strong><span>Pilihan Event</span></div></div>
        <div className="stat"><Store /><div><strong>500+</strong><span>Vendor Terpercaya</span></div></div>
        <div className="stat"><ShieldCheck /><div><strong>100%</strong><span>Aman & Terpercaya</span></div></div>
        <button className="btn btn-light" onClick={() => setPage('explore')}>Mulai Sekarang <ArrowRight size={17} /></button>
      </div>
    </section>
  );
}

function Footer({ setPage }) {
  return (
    <footer className="footer shell">
      <Logo onClick={() => setPage('home')} />
      <div className="footer-links"><button>Tentang Kami</button><button>Bantuan</button><button>Syarat & Ketentuan</button><button>Kebijakan Privasi</button></div>
      <div className="socials"><span>◎</span><span>♪</span><span>▶</span><span>✉</span></div>
      <p>© 2026 EventBox. All rights reserved.</p>
    </footer>
  );
}

function ExplorePage({ selectedType, setSelectedType, onDetail, setPage }) {
  const visible = selectedType ? packages.filter(p => p.type === selectedType) : packages;
  return (
    <main className="inner-page shell">
      <div className="page-hero compact-hero">
        <span className="eyebrow">DISCOVER</span>
        <h1>Acara seperti apa yang ingin kamu buat?</h1>
        <p>Pilih visual yang paling mendekati kebutuhanmu. Kamu masih bisa menyesuaikannya nanti.</p>
      </div>
      <div className="explore-category-grid">
        {categories.map(cat => (
          <button className={`explore-category-card ${selectedType === cat.id ? 'selected' : ''}`} key={cat.id} onClick={() => setSelectedType(cat.id)}>
            <img src={cat.image} alt={cat.label} />
            <div><strong>{cat.label}</strong><p>{cat.description}</p><span>{cat.budget}</span></div>
          </button>
        ))}
      </div>
      <div className="explore-packages-head">
        <div><span className="eyebrow">PILIH PAKET</span><h2>{selectedType ? `Paket ${selectedType} yang Cocok Untukmu` : 'Paket Event Pilihan'}</h2><p>Lihat konsep, fasilitas, harga, dan kapasitas sebelum memilih.</p></div>
        {selectedType && <button className="btn btn-ghost" onClick={() => setSelectedType('')}>Reset kategori</button>}
      </div>
      {visible.length ? <div className="package-grid three">{visible.map(pack => <PackageCard key={pack.id} pack={pack} onDetail={onDetail} />)}</div> : <EmptyState title="Belum ada paket siap pilih" text="Gunakan filter untuk menemukan kombinasi event yang paling sesuai." onClick={() => setPage('filter')} button="Sesuaikan Kebutuhan" />}
      <div className="custom-callout">
        <div><SlidersHorizontal /><div><h3>Belum menemukan yang cocok?</h3><p>Atur jenis event, jumlah peserta, budget, lokasi, dan kebutuhanmu.</p></div></div>
        <button className="btn btn-primary" onClick={() => setPage('filter')}>Sesuaikan dengan Kebutuhanmu <ArrowRight size={16} /></button>
      </div>
    </main>
  );
}

function FilterPage({ filters, setFilters, onDetail }) {
  const [needs, setNeeds] = useState([]);
  const [applied, setApplied] = useState(false);

  const filtered = useMemo(() => {
    return packages.filter(pack => {
      if (filters.type && pack.type !== filters.type) return false;
      if (filters.location && !pack.location.toLowerCase().includes(filters.location.toLowerCase())) return false;
      if (filters.pax === '< 20' && pack.pax >= 20) return false;
      if (filters.pax === '20–50' && (pack.pax < 20 || pack.pax > 50)) return false;
      if (filters.pax === '50–100' && (pack.pax < 50 || pack.pax > 100)) return false;
      if (filters.pax === '100–200' && (pack.pax < 100 || pack.pax > 200)) return false;
      if (filters.pax === '> 200' && pack.pax <= 200) return false;
      if (filters.budget === '< Rp3 juta' && pack.price >= 3000000) return false;
      if (filters.budget === 'Rp3–5 juta' && (pack.price < 3000000 || pack.price > 5000000)) return false;
      if (filters.budget === 'Rp5–8 juta' && (pack.price < 5000000 || pack.price > 8000000)) return false;
      if (filters.budget === 'Rp8–10 juta' && (pack.price < 8000000 || pack.price > 10000000)) return false;
      if (filters.budget === '> Rp10 juta' && pack.price <= 10000000) return false;
      if (needs.length && !needs.every(n => pack.includes.some(i => i.toLowerCase().includes(n.toLowerCase())))) return false;
      return true;
    });
  }, [filters, needs]);

  const toggleNeed = (need) => setNeeds(current => current.includes(need) ? current.filter(n => n !== need) : [...current, need]);
  const needOptions = ['Venue', 'Catering', 'Dekorasi', 'Dokumentasi', 'Sound System', 'Kursi & Meja', 'Undangan', 'Souvenir'];

  return (
    <main className="inner-page shell filter-layout">
      <aside className="filter-panel">
        <div className="filter-panel-head"><span className="icon-box"><SlidersHorizontal size={20} /></span><div><h2>Temukan Paket</h2><p>Atur kebutuhan acara kamu.</p></div></div>
        <SelectField label="Jenis Event" value={filters.type} onChange={v => setFilters({ ...filters, type: v })} options={['', ...categories.map(c => c.id)]} placeholder="Semua event" />
        <SelectField label="Jumlah Peserta" value={filters.pax} onChange={v => setFilters({ ...filters, pax: v })} options={['', '< 20', '20–50', '50–100', '100–200', '> 200']} placeholder="Semua kapasitas" />
        <SelectField label="Budget" value={filters.budget} onChange={v => setFilters({ ...filters, budget: v })} options={['', '< Rp3 juta', 'Rp3–5 juta', 'Rp5–8 juta', 'Rp8–10 juta', '> Rp10 juta']} placeholder="Semua budget" />
        <SelectField label="Lokasi" value={filters.location} onChange={v => setFilters({ ...filters, location: v })} options={['', 'Malang', 'Batu']} placeholder="Semua lokasi" />
        <div className="needs-group"><span>Kebutuhan</span>{needOptions.map(need => <label key={need} className="check-row"><input type="checkbox" checked={needs.includes(need)} onChange={() => toggleNeed(need)} /><span>{need}</span></label>)}</div>
        <button className="btn btn-primary full" onClick={() => setApplied(true)}>Tampilkan Paket</button>
      </aside>
      <section className="filter-results">
        <div className="page-hero compact-hero left">
          <span className="eyebrow">CUSTOM DISCOVERY</span>
          <h1>Paket yang Cocok Untukmu</h1>
          <p>Hasil berubah mengikuti filter. Tekan tombol “Tampilkan Paket” saat selesai mengatur kebutuhan.</p>
        </div>
        {!applied ? <div className="filter-placeholder"><Search size={34} /><h3>Atur filter untuk mulai mencari</h3><p>Kami akan menampilkan paket yang paling mendekati kebutuhanmu.</p></div> : filtered.length ? <div className="package-grid two">{filtered.map(pack => <PackageCard key={pack.id} pack={pack} onDetail={onDetail} />)}</div> : <EmptyState title="Belum ada paket yang persis cocok" text="Coba longgarkan filter, atau mulai dari paket terdekat lalu sesuaikan sendiri." onClick={() => { setFilters({ type: '', location: '', pax: '', budget: '', date: '' }); setNeeds([]); }} button="Reset Filter" />}
      </section>
    </main>
  );
}

function VendorsPage({ selectedVendors, setSelectedVendors, setPage }) {
  const toggleVendor = (vendor) => {
    setSelectedVendors(current => current.some(v => v.id === vendor.id) ? current.filter(v => v.id !== vendor.id) : [...current, vendor]);
  };
  return (
    <main className="inner-page shell">
      <div className="page-hero compact-hero"><span className="eyebrow">MARKETPLACE VENDOR</span><h1>Pilih vendor untuk event kamu</h1><p>Pilih satu atau beberapa vendor. Pilihanmu akan dibawa ke checkout.</p></div>
      <div className="vendor-market-grid">
        {vendors.map(vendor => {
          const selected = selectedVendors.some(v => v.id === vendor.id);
          return (
            <article key={vendor.id} className={`vendor-card ${selected ? 'selected' : ''}`}>
              <img src={vendor.image} alt={vendor.name} />
              <div className="vendor-card-body">
                <div className="vendor-topline"><span className="tier-chip">{vendor.category}</span><span className="rating"><Star size={14} fill="currentColor" /> {vendor.rating}</span></div>
                <h3>{vendor.name}</h3>
                <p><MapPin size={14} /> {vendor.location}</p>
                <div className="vendor-price">Mulai <strong>{currency(vendor.price)}</strong></div>
                <button className={`btn ${selected ? 'btn-selected' : 'btn-outline'} full`} onClick={() => toggleVendor(vendor)}>{selected ? <><Check size={16} /> Dipilih</> : 'Pilih Vendor'}</button>
              </div>
            </article>
          );
        })}
      </div>
      <div className="sticky-bottom-action"><div><strong>{selectedVendors.length} vendor dipilih</strong><span>Kamu masih bisa mengubahnya sebelum pembayaran.</span></div><button className="btn btn-primary" onClick={() => setPage('checkout')}>Lanjut Checkout <ArrowRight size={16} /></button></div>
    </main>
  );
}

function DetailModal({ pack, onClose, onChoose, onCustomize }) {
  if (!pack) return null;
  return (
    <div className="modal-backdrop" onMouseDown={onClose}>
      <div className="modal detail-modal" onMouseDown={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}><X /></button>
        <div className="detail-image"><img src={pack.image} alt={pack.name} /><span className="badge badge-coral">{pack.badge}</span></div>
        <div className="detail-content">
          <span className="eyebrow">DETAIL PAKET</span><h2>{pack.name}</h2>
          <div className="detail-price">{currency(pack.price)}</div>
          <p>Paket siap pilih untuk {pack.pax} peserta di {pack.location}. Cocok untuk pengguna yang ingin proses cepat tetapi tetap dapat melakukan penyesuaian.</p>
          <div className="detail-info-grid"><div><Users /><span>Kapasitas</span><strong>{pack.pax} peserta</strong></div><div><MapPin /><span>Lokasi</span><strong>{pack.location}</strong></div><div><Store /><span>Vendor</span><strong>Vendor terverifikasi</strong></div><div><ShieldCheck /><span>Fasilitas</span><strong>{pack.includes.length} komponen</strong></div></div>
          <div className="detail-list"><h3>Isi paket</h3>{pack.includes.map(item => <span key={item}><Check size={16} /> {item}</span>)}</div>
          <div className="modal-actions"><button className="btn btn-outline" onClick={() => onCustomize(pack)}><SlidersHorizontal size={16} /> Sesuaikan Paket</button><button className="btn btn-primary" onClick={() => onChoose(pack)}>Pilih Paket <ArrowRight size={16} /></button></div>
        </div>
      </div>
    </div>
  );
}

function CustomizePage({ basePackage, custom, setCustom, setPage }) {
  const chosen = {
    venue: customOptions.venue.find(o => o.id === custom.venue),
    catering: customOptions.catering.find(o => o.id === custom.catering),
    decoration: customOptions.decoration.find(o => o.id === custom.decoration),
    documentation: customOptions.documentation.find(o => o.id === custom.documentation),
  };
  const subtotal = Object.values(chosen).reduce((sum, item) => sum + (item?.price || 0), 0);
  const service = Math.round(subtotal * 0.05);
  const total = subtotal + service;

  const optionGroup = (key, label) => (
    <div className="custom-section"><h3>{label}</h3><div className="option-list">{customOptions[key].map(option => <label className={`option-row ${custom[key] === option.id ? 'selected' : ''}`} key={option.id}><input type="radio" name={key} checked={custom[key] === option.id} onChange={() => setCustom({ ...custom, [key]: option.id, total })} /><span><strong>{option.label}</strong><small>{currency(option.price)}</small></span><span className="radio-dot" /></label>)}</div></div>
  );

  useEffect(() => {
    if (custom.total !== total) setCustom(prev => ({ ...prev, total }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [total]);

  return (
    <main className="inner-page shell custom-layout">
      <section>
        <button className="back-link" onClick={() => setPage('explore')}><ArrowLeft size={16} /> Kembali ke paket</button>
        <div className="page-hero compact-hero left"><span className="eyebrow">CUSTOM PACKAGE</span><h1>Sesuaikan Acara Kamu</h1><p>Ubah komponen sesuai kebutuhan. Total harga diperbarui otomatis.</p>{basePackage && <div className="base-package-chip">Basis: {basePackage.name}</div>}</div>
        {optionGroup('venue', 'Venue')}
        {optionGroup('catering', 'Catering')}
        {optionGroup('decoration', 'Dekorasi')}
        {optionGroup('documentation', 'Dokumentasi')}
      </section>
      <aside className="summary-card sticky-summary">
        <span className="eyebrow">RINGKASAN HARGA</span><h2>Custom Event</h2>
        <div className="summary-lines">
          {Object.entries(chosen).map(([key, item]) => item && <div key={key}><span>{item.label}</span><strong>{currency(item.price)}</strong></div>)}
          <div><span>Subtotal</span><strong>{currency(subtotal)}</strong></div>
          <div><span>Service Fee (5%)</span><strong>{currency(service)}</strong></div>
        </div>
        <div className="summary-total"><span>Total</span><strong>{currency(total)}</strong></div>
        <button className="btn btn-primary full" onClick={() => setPage('vendors')}>Lanjut Pilih Vendor <ArrowRight size={16} /></button>
        <p className="summary-note"><ShieldCheck size={15} /> Harga pada prototype bersifat simulasi.</p>
      </aside>
    </main>
  );
}

function CheckoutPage({ selectedPackage, custom, selectedVendors, order, setOrder, setPage }) {
  const packageTotal = custom?.total || selectedPackage?.price || 7250000;
  const vendorsTotal = selectedVendors.reduce((sum, vendor) => sum + vendor.price, 0);
  const subtotal = packageTotal + vendorsTotal;
  const serviceFee = Math.round(subtotal * 0.05);
  const total = subtotal + serviceFee;
  const dp = Math.round(total * 0.3);
  const [showSuccess, setShowSuccess] = useState(false);
  const [form, setForm] = useState({
    name: order.eventName || 'Seminar Teknologi 2026',
    date: order.date || '2026-11-15',
    location: order.location || 'Malang',
    pax: order.pax || 100,
    payment: order.paymentMethod || 'QRIS',
  });

  const pay = () => {
    const next = {
      ...order,
      eventName: form.name,
      date: form.date,
      location: form.location,
      pax: Number(form.pax),
      total,
      dp,
      paymentMethod: form.payment,
      paymentStatus: 'DP TERBAYAR',
      status: 'Sedang Diproses',
      package: selectedPackage?.name || 'Custom Event',
      vendors: selectedVendors,
      orderNumber: '#EVB-2026-001',
    };
    setOrder(next);
    setShowSuccess(true);
  };

  return (
    <main className="inner-page shell checkout-layout">
      <section>
        <div className="page-hero compact-hero left"><span className="eyebrow">CHECKOUT</span><h1>Checkout Event</h1><p>Periksa informasi event, paket, vendor, dan metode pembayaran DP.</p></div>
        <div className="checkout-card"><h3>Informasi Event</h3><div className="form-grid two-col"><label className="field"><span>Nama Event</span><input value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} /></label><label className="field"><span>Tanggal</span><input type="date" value={form.date} onChange={e => setForm({ ...form, date: e.target.value })} /></label><label className="field"><span>Lokasi</span><input value={form.location} onChange={e => setForm({ ...form, location: e.target.value })} /></label><label className="field"><span>Jumlah Peserta</span><input type="number" value={form.pax} onChange={e => setForm({ ...form, pax: e.target.value })} /></label></div></div>
        <div className="checkout-card"><h3>Paket</h3><div className="order-line-card"><div className="mini-thumb"><img src={selectedPackage?.image || IMG.packageSeminar} alt="Paket" /></div><div><strong>{selectedPackage?.name || 'Custom Event Package'}</strong><span>{selectedPackage?.includes?.join(' • ') || 'Venue • Catering • Dekorasi • Dokumentasi'}</span></div><strong>{currency(packageTotal)}</strong></div></div>
        <div className="checkout-card"><h3>Vendor</h3>{selectedVendors.length ? selectedVendors.map(v => <div className="simple-row" key={v.id}><span>{v.category} — {v.name}</span><strong>{currency(v.price)}</strong></div>) : <p className="muted">Belum memilih vendor tambahan.</p>}</div>
        <div className="checkout-card"><h3>Pembayaran DP</h3><div className="payment-grid">{['QRIS', 'Bank Transfer', 'E-Wallet'].map(method => <label className={`payment-option ${form.payment === method ? 'selected' : ''}`} key={method}><input type="radio" name="payment" checked={form.payment === method} onChange={() => setForm({ ...form, payment: method })} />{method === 'QRIS' ? <CreditCard /> : method === 'Bank Transfer' ? <Banknote /> : <WalletCards />}<strong>{method}</strong></label>)}</div></div>
      </section>
      <aside className="summary-card sticky-summary checkout-summary"><span className="eyebrow">RINCIAN HARGA</span><h2>Ringkasan</h2><div className="summary-lines"><div><span>Paket</span><strong>{currency(packageTotal)}</strong></div><div><span>Vendor</span><strong>{currency(vendorsTotal)}</strong></div><div><span>Service Fee</span><strong>{currency(serviceFee)}</strong></div></div><div className="summary-total"><span>Total</span><strong>{currency(total)}</strong></div><div className="dp-box"><span>DP 30%</span><strong>{currency(dp)}</strong><small>Sisa dibayar sesuai progres event.</small></div><button className="btn btn-primary full" onClick={pay}>Bayar DP {currency(dp)}</button><p className="summary-note"><ShieldCheck size={15} /> Simulasi pembayaran — tidak ada transaksi nyata.</p></aside>
      {showSuccess && <SuccessModal dp={dp} onClose={() => setShowSuccess(false)} onView={() => { setShowSuccess(false); setPage('confirmation'); }} />}
    </main>
  );
}

function SuccessModal({ dp, onClose, onView }) {
  return (
    <div className="modal-backdrop"><div className="modal success-modal"><button className="modal-close" onClick={onClose}><X /></button><div className="success-icon"><PartyPopper /></div><h2>Pembayaran Berhasil!</h2><p>Pembayaran DP sebesar <strong>{currency(dp)}</strong> berhasil disimulasikan.</p><div className="success-checks"><span><Check /> Pembayaran DP</span><span><Check /> Pesanan dibuat</span><span><Check /> Vendor menerima pesanan</span></div><button className="btn btn-primary full" onClick={onView}>Lihat Pesanan <ArrowRight size={16} /></button></div></div>
  );
}

function OrderConfirmation({ order, setPage }) {
  const steps = [
    ['Event dibuat', true], ['DP dibayar', true], ['Pesanan dikonfirmasi', true], ['Vendor memproses', 'active'], ['Persiapan acara', false], ['Event selesai', false],
  ];
  return (
    <main className="inner-page shell order-center"><div className="confirmation-card"><div className="success-icon big"><PartyPopper /></div><span className="eyebrow">ORDER CONFIRMED</span><h1>Pesanan Berhasil Dikonfirmasi!</h1><p>Tim vendor akan mulai memproses kebutuhan event kamu.</p><div className="order-highlight"><div><strong>{order.eventName || 'Seminar Teknologi 2026'}</strong><span><CalendarDays size={15} /> {order.date || '15 November 2026'}</span><span><MapPin size={15} /> {order.location || 'Malang'}</span><span><Users size={15} /> {order.pax || 100} Peserta</span></div><div className="order-number"><span>Nomor Pesanan</span><strong>{order.orderNumber || '#EVB-2026-001'}</strong><span className="status-badge success">DP TERBAYAR</span></div></div><div className="tracker">{steps.map(([label, state], index) => <div className={`tracker-step ${state === true ? 'done' : state === 'active' ? 'active' : ''}`} key={label}><div className="tracker-dot">{state === true ? <Check size={14} /> : index + 1}</div><span>{label}</span></div>)}</div><button className="btn btn-primary" onClick={() => setPage('orders')}>Lihat Status Pesanan <ArrowRight size={16} /></button></div></main>
  );
}

function OrdersPage({ order, setPage }) {
  const hasOrder = Boolean(order?.eventName);
  return (
    <main className="inner-page shell"><div className="page-hero compact-hero left"><span className="eyebrow">ORDER TRACKING</span><h1>Pesanan Saya</h1><p>Pantau proses event dari pembayaran DP sampai acara selesai.</p></div>{hasOrder ? <div className="order-dashboard-card"><div className="order-card-head"><div><span className="status-badge processing">Sedang Diproses</span><h2>{order.eventName}</h2><p>Vendor sedang mempersiapkan kebutuhan event kamu.</p></div><PackageCheck size={35} /></div><div className="tracker horizontal-mobile">{[['Pesanan dibuat', true], ['Pembayaran DP', true], ['Dikonfirmasi', true], ['Vendor memproses', 'active'], ['Persiapan acara', false], ['Event selesai', false]].map(([label, state], index) => <div className={`tracker-step ${state === true ? 'done' : state === 'active' ? 'active' : ''}`} key={label}><div className="tracker-dot">{state === true ? <Check size={14} /> : index + 1}</div><span>{label}</span></div>)}</div><div className="order-detail-grid"><InfoItem label="Paket" value={order.package} /><InfoItem label="Vendor" value={`${order.vendors?.length || 0} vendor`} /><InfoItem label="Total Harga" value={currency(order.total || 0)} /><InfoItem label="DP Dibayar" value={currency(order.dp || 0)} /><InfoItem label="Sisa Pembayaran" value={currency((order.total || 0) - (order.dp || 0))} /><InfoItem label="Tanggal Event" value={order.date} /><InfoItem label="Lokasi Event" value={order.location} /></div></div> : <EmptyState title="Belum ada pesanan aktif" text="Pilih paket event untuk memulai pesanan pertamamu." onClick={() => setPage('explore')} button="Eksplor Paket" />}<section className="history-section"><h2>Riwayat Pesanan</h2><div className="history-card"><div><BadgeCheck /><span><strong>Workshop Kreatif 2025</strong><small>12 Desember 2025 · Malang</small></span></div><span className="status-badge done">Selesai</span></div></section></main>
  );
}

function InfoItem({ label, value }) { return <div className="info-item"><span>{label}</span><strong>{value || '-'}</strong></div>; }

function LoginPage({ setLoggedIn, setPage }) {
  const [form, setForm] = useState({ email: 'demo@eventbox.id', password: '123456' });
  const [error, setError] = useState('');
  const submit = (e) => {
    e.preventDefault();
    if (!form.email || !form.password) return setError('Email dan password wajib diisi.');
    if (form.email !== 'demo@eventbox.id' || form.password !== '123456') return setError('Gunakan akun demo: demo@eventbox.id / 123456');
    setLoggedIn(true); setError(''); setPage('dashboard');
  };
  return (
    <main className="auth-page"><section className="auth-visual"><img src={IMG.hero} alt="Event" /><div className="auth-overlay"><Logo onClick={() => setPage('home')} /><h2>Rencanakan event tanpa ribet.</h2><p>Temukan paket, sesuaikan kebutuhan, pilih vendor, lalu pantau progresnya dari satu tempat.</p></div></section><section className="auth-form-wrap"><form className="auth-card" onSubmit={submit}><span className="eyebrow">WELCOME BACK</span><h1>Login ke EVENTBOX</h1><p>Gunakan akun demo untuk melihat dashboard.</p>{error && <div className="error-box">{error}</div>}<label className="field"><span>Email</span><input type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} /></label><label className="field"><span>Password</span><input type="password" value={form.password} onChange={e => setForm({ ...form, password: e.target.value })} /></label><button className="btn btn-primary full" type="submit"><LogIn size={16} /> Login</button><div className="demo-credential"><span>Email</span><strong>demo@eventbox.id</strong><span>Password</span><strong>123456</strong></div><p className="auth-register">Belum punya akun? <button type="button" onClick={() => alert('Register pada prototype ini bersifat simulasi.')}>Daftar</button></p></form></section></main>
  );
}

function DashboardPage({ order, setPage }) {
  return (
    <main className="inner-page shell"><div className="dashboard-head"><div><span className="eyebrow">DASHBOARD</span><h1>Halo, User! 👋</h1><p>Kelola rencana event dan pesananmu dari sini.</p></div><button className="btn btn-primary" onClick={() => setPage('filter')}><PartyPopper size={17} /> + Buat Event</button></div><div className="dashboard-grid"><button className="dashboard-action-card" onClick={() => setPage('filter')}><span className="dash-icon"><PartyPopper /></span><div><h3>Buat Event Baru</h3><p>Mulai rencanakan event kamu sekarang.</p></div><ArrowRight /></button><button className="dashboard-action-card" onClick={() => setPage('vendors')}><span className="dash-icon"><Store /></span><div><h3>Cari Vendor</h3><p>Jelajahi vendor terpercaya di sekitar Malang.</p></div><ArrowRight /></button></div><section className="dashboard-section"><SectionHeading title="Event Saya" subtitle="Event aktif dan progres terbaru." />{order?.eventName ? <button className="event-dashboard-card" onClick={() => setPage('orders')}><img src={IMG.packageSeminar} alt="Event" /><div><span className="status-badge processing">Sedang Diproses</span><h3>{order.eventName}</h3><p><CalendarDays size={14} /> {order.date}</p><p><MapPin size={14} /> {order.location}</p><p><Users size={14} /> {order.pax} Peserta</p></div><ArrowRight /></button> : <EmptyState title="Kamu belum memiliki event" text="Pilih event dan paket pertama untuk mulai merencanakan." onClick={() => setPage('explore')} button="Buat Event Pertama" />}</section></main>
  );
}

function ProfilePage() {
  const [profile, setProfile] = usePersistentState('eventbox-profile', { name: 'User Demo', email: 'demo@eventbox.id', phone: '0812-3456-7890', city: 'Malang' });
  const [draft, setDraft] = useState(profile);
  const [editing, setEditing] = useState(false);
  const save = () => { setProfile(draft); setEditing(false); };
  return (
    <main className="inner-page shell profile-page"><div className="page-hero compact-hero left"><span className="eyebrow">PROFILE</span><h1>Profile Saya</h1><p>Kelola informasi dasar yang digunakan pada prototype EVENTBOX.</p></div><div className="profile-card"><div className="profile-avatar">UD</div><div className="profile-fields"><label className="field"><span>Nama</span><input disabled={!editing} value={draft.name} onChange={e => setDraft({ ...draft, name: e.target.value })} /></label><label className="field"><span>Email</span><input disabled={!editing} value={draft.email} onChange={e => setDraft({ ...draft, email: e.target.value })} /></label><label className="field"><span>Nomor Telepon</span><input disabled={!editing} value={draft.phone} onChange={e => setDraft({ ...draft, phone: e.target.value })} /></label><label className="field"><span>Kota</span><input disabled={!editing} value={draft.city} onChange={e => setDraft({ ...draft, city: e.target.value })} /></label></div><div className="profile-actions">{editing ? <><button className="btn btn-ghost" onClick={() => { setDraft(profile); setEditing(false); }}>Batal</button><button className="btn btn-primary" onClick={save}><Check size={16} /> Simpan Perubahan</button></> : <button className="btn btn-primary" onClick={() => setEditing(true)}><Edit3 size={16} /> Edit Profile</button>}</div></div></main>
  );
}

function EmptyState({ title, text, onClick, button }) {
  return <div className="empty-state"><div className="empty-icon"><ShoppingBag /></div><h3>{title}</h3><p>{text}</p>{onClick && <button className="btn btn-primary" onClick={onClick}>{button} <ArrowRight size={16} /></button>}</div>;
}

export default function App() {
  const [page, setPage] = useState('home');
  const [loggedIn, setLoggedIn] = usePersistentState('eventbox-login', false);
  const [selectedType, setSelectedType] = usePersistentState('eventbox-type', '');
  const [selectedPackage, setSelectedPackage] = usePersistentState('eventbox-package', null);
  const [selectedVendors, setSelectedVendors] = usePersistentState('eventbox-vendors', []);
  const [order, setOrder] = usePersistentState('eventbox-order', {});
  const [custom, setCustom] = usePersistentState('eventbox-custom', { venue: 'venue-b', catering: 'cat-100', decoration: 'dec-standard', documentation: 'doc-video', total: 0 });
  const [filters, setFilters] = usePersistentState('eventbox-filters', { type: '', location: '', pax: '', budget: '', date: '' });
  const [detailPack, setDetailPack] = useState(null);

  const go = (next) => { setPage(next); window.scrollTo({ top: 0, behavior: 'smooth' }); };
  const selectCategory = (type) => { setSelectedType(type || ''); go('explore'); };
  const choosePackage = (pack) => { setSelectedPackage(pack); setDetailPack(null); go('vendors'); };
  const customizePackage = (pack) => { setSelectedPackage(pack); setDetailPack(null); go('customize'); };
  const logout = () => { setLoggedIn(false); go('home'); };

  const renderPage = () => {
    switch (page) {
      case 'home': return <HomePage setPage={go} selectCategory={selectCategory} onDetail={setDetailPack} filters={filters} setFilters={setFilters} />;
      case 'explore': return <ExplorePage selectedType={selectedType} setSelectedType={setSelectedType} onDetail={setDetailPack} setPage={go} />;
      case 'filter': return <FilterPage filters={filters} setFilters={setFilters} onDetail={setDetailPack} />;
      case 'vendors': return <VendorsPage selectedVendors={selectedVendors} setSelectedVendors={setSelectedVendors} setPage={go} />;
      case 'customize': return <CustomizePage basePackage={selectedPackage} custom={custom} setCustom={setCustom} setPage={go} />;
      case 'checkout': return <CheckoutPage selectedPackage={selectedPackage} custom={custom} selectedVendors={selectedVendors} order={order} setOrder={setOrder} setPage={go} />;
      case 'confirmation': return <OrderConfirmation order={order} setPage={go} />;
      case 'orders': return <OrdersPage order={order} setPage={go} />;
      case 'login': return <LoginPage setLoggedIn={setLoggedIn} setPage={go} />;
      case 'dashboard': return loggedIn ? <DashboardPage order={order} setPage={go} /> : <LoginPage setLoggedIn={setLoggedIn} setPage={go} />;
      case 'profile': return loggedIn ? <ProfilePage /> : <LoginPage setLoggedIn={setLoggedIn} setPage={go} />;
      default: return <HomePage setPage={go} selectCategory={selectCategory} onDetail={setDetailPack} filters={filters} setFilters={setFilters} />;
    }
  };

  return (
    <div className="app">
      {page !== 'login' && <Navbar loggedIn={loggedIn} currentPage={page} setPage={go} onLogin={() => go('login')} onLogout={logout} />}
      {renderPage()}
      <DetailModal pack={detailPack} onClose={() => setDetailPack(null)} onChoose={choosePackage} onCustomize={customizePackage} />
    </div>
  );
}
