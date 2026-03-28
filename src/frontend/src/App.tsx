import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Menu, Search, ShoppingBag, X } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

// ─────────────────────────────────────────────────────────────────────────────
// BUSINESS CONFIGURATION — edit these two constants to personalise your site
// ─────────────────────────────────────────────────────────────────────────────
const WHATSAPP_NUMBER = "923081634657";
const WHATSAPP_MESSAGE = "Hello! I'm interested in your collection.";
// ─────────────────────────────────────────────────────────────────────────────

const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

const NAV_LINKS = ["ALL", "DENIM", "ESSENTIALS", "STYLE GUIDE"];

const PRODUCTS = [
  {
    name: "Classic Straight Jeans",
    category: "Denim",
    image: "/assets/generated/jeans-flatlay.dim_600x700.jpg",
  },
  {
    name: "Relaxed Chinos",
    category: "Essentials",
    image: "/assets/generated/chinos-flatlay.dim_600x700.jpg",
  },
  {
    name: "Wide-Leg Trousers",
    category: "Essentials",
    image: "/assets/generated/trousers-flatlay.dim_600x700.jpg",
  },
  {
    name: "Easy Denim",
    category: "Denim",
    image: "/assets/generated/style-guide-1.dim_700x500.jpg",
  },
];

function WhatsAppIcon({ size = 24 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="WhatsApp"
    >
      <title>WhatsApp</title>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

function Header({
  mobileOpen,
  setMobileOpen,
}: {
  mobileOpen: boolean;
  setMobileOpen: (v: boolean) => void;
}) {
  const navSections: Record<string, string> = {
    ALL: "essentials",
    DENIM: "essentials",
    ESSENTIALS: "essentials",
    "STYLE GUIDE": "style",
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-[#D7D7D7]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="font-serif text-base font-bold tracking-wider text-foreground uppercase"
            data-ocid="nav.link"
          >
            DENIM &amp; STONE
          </button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <button
                key={link}
                type="button"
                onClick={() => scrollTo(navSections[link] ?? "essentials")}
                className="text-xs font-sans font-medium tracking-widest text-foreground/70 hover:text-foreground transition-colors uppercase"
                data-ocid="nav.link"
              >
                {link}
              </button>
            ))}
          </nav>

          {/* Right icons */}
          <div className="hidden md:flex items-center gap-5">
            <button
              type="button"
              className="text-foreground/60 hover:text-foreground transition-colors"
              aria-label="Search"
            >
              <Search size={18} />
            </button>
            <button
              type="button"
              className="text-foreground/60 hover:text-foreground transition-colors"
              aria-label="Bag"
            >
              <ShoppingBag size={18} />
            </button>
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-medium tracking-wider text-[#25D366] hover:opacity-80 transition-opacity uppercase"
              data-ocid="nav.link"
            >
              <WhatsAppIcon size={16} />
              <span className="hidden lg:inline">WhatsApp</span>
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            className="md:hidden text-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            data-ocid="nav.toggle"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white border-t border-[#D7D7D7] px-6 py-4 flex flex-col gap-4"
        >
          {NAV_LINKS.map((link) => (
            <button
              key={link}
              type="button"
              onClick={() => {
                scrollTo(navSections[link] ?? "essentials");
                setMobileOpen(false);
              }}
              className="text-left text-xs font-sans font-medium tracking-widest text-foreground/70 hover:text-foreground uppercase"
              data-ocid="nav.link"
            >
              {link}
            </button>
          ))}
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs font-medium tracking-wider text-[#25D366] uppercase mt-2"
            data-ocid="nav.link"
          >
            <WhatsAppIcon size={16} /> WhatsApp
          </a>
        </motion.div>
      )}
    </header>
  );
}

function HeroSection() {
  return (
    <section
      className="relative w-full h-[90vh] min-h-[560px] flex items-center overflow-hidden"
      data-ocid="hero.section"
    >
      <img
        src="/assets/generated/hero-denim.dim_1400x800.jpg"
        alt="Denim & Stone hero — editorial fashion on a cobblestone street"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to right, rgba(17,19,21,0.85) 0%, rgba(17,19,21,0.6) 40%, rgba(17,19,21,0.1) 75%, transparent 100%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-lg"
        >
          <p className="text-[#EFE7DC]/70 text-xs font-sans tracking-widest uppercase mb-4">
            Unisex Collection 2026
          </p>
          <h1 className="font-serif text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.05] uppercase mb-6">
            THE ART OF
            <br />
            ENDURING
            <br />
            STYLE
          </h1>
          <p className="text-[#EFE7DC]/80 text-sm lg:text-base font-sans mb-8 leading-relaxed">
            Wear it your way. Built for everyone.
          </p>
          <button
            type="button"
            onClick={() => scrollTo("essentials")}
            className="inline-block bg-[#EFE7DC] text-[#1A1A1A] text-xs font-sans font-semibold tracking-widest uppercase px-8 py-4 hover:bg-white transition-colors"
            data-ocid="hero.primary_button"
          >
            SHOP NOW
          </button>
        </motion.div>
      </div>
    </section>
  );
}

function ProductCard({
  product,
  index,
}: {
  product: (typeof PRODUCTS)[0];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group cursor-pointer"
      data-ocid={`products.item.${index + 1}`}
    >
      <div className="overflow-hidden bg-[#E8E5DF] aspect-[3/4] mb-3">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="px-1">
        <h3 className="font-sans font-semibold text-sm text-foreground tracking-wide">
          {product.name}
        </h3>
        <p className="font-sans text-xs text-foreground/50 uppercase tracking-wider mt-0.5">
          {product.category}
        </p>
      </div>
    </motion.div>
  );
}

function EssentialsSection() {
  return (
    <section
      id="essentials"
      className="py-20 lg:py-28 bg-background"
      data-ocid="essentials.section"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-xs font-sans tracking-widest text-foreground/40 uppercase mb-3">
            Curated Selection
          </p>
          <h2 className="font-sans font-bold text-2xl lg:text-3xl tracking-widest uppercase text-foreground">
            OUR ESSENTIALS
          </h2>
          <div className="w-12 h-px bg-foreground/30 mx-auto mt-4" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {PRODUCTS.map((product, i) => (
            <ProductCard key={product.name} product={product} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StyleBanner() {
  return (
    <section
      id="style"
      className="py-16 lg:py-20 bg-[#1D2A3A]"
      data-ocid="style.section"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-serif text-3xl lg:text-4xl xl:text-5xl font-bold text-white uppercase leading-tight mb-4">
            Crafted for everyone who
            <br />
            <em className="not-italic text-[#EFE7DC]">
              &ldquo;Wears Their Story&rdquo;
            </em>
          </h2>
          <p className="font-sans text-sm text-white/60 tracking-wider mt-6">
            Each piece is cut for all bodies — timeless in the wardrobe,
            effortless on the street.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function WhatsAppSection() {
  return (
    <section
      id="contact"
      className="py-20 lg:py-28 bg-[#F3F1EC]"
      data-ocid="contact.section"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-xl mx-auto text-center"
        >
          <p className="text-xs font-sans tracking-widest text-foreground/40 uppercase mb-3">
            We&apos;re here for you
          </p>
          <h2 className="font-sans font-bold text-2xl lg:text-3xl tracking-widest uppercase text-foreground mb-4">
            GET IN TOUCH
          </h2>
          <div className="w-12 h-px bg-foreground/30 mx-auto mb-10" />

          <div className="bg-white shadow-card rounded-sm p-8 lg:p-10 mb-8">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-[#25D366] flex items-center justify-center text-white">
                <WhatsAppIcon size={20} />
              </div>
              <div className="text-left">
                <p className="font-sans text-xs text-foreground/40 uppercase tracking-wider">
                  WhatsApp
                </p>
                <p className="font-sans font-semibold text-foreground text-sm">
                  +92 308 163 4657
                </p>
              </div>
            </div>

            <div className="bg-[#F3F1EC] rounded-sm px-5 py-4 mb-8 text-left">
              <p className="font-sans text-xs text-foreground/40 uppercase tracking-wider mb-1">
                Your message
              </p>
              <p className="font-sans text-sm text-foreground/80 italic">
                &ldquo;{WHATSAPP_MESSAGE}&rdquo;
              </p>
            </div>

            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full bg-[#25D366] hover:bg-[#1ebe59] text-white font-sans font-semibold text-sm tracking-widest uppercase py-4 px-8 transition-colors"
              data-ocid="contact.primary_button"
            >
              <WhatsAppIcon size={20} />
              CHAT ON WHATSAPP
            </a>
          </div>

          <p className="font-sans text-xs text-foreground/40 leading-relaxed">
            Click the button above to open WhatsApp and start chatting with us
            directly. We typically reply within minutes.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <section className="py-16 bg-[#F3F1EC] border-t border-[#D7D7D7]">
      <div className="max-w-xl mx-auto px-6 text-center">
        <h3 className="font-sans font-bold text-lg tracking-widest uppercase text-foreground mb-2">
          Stay in the Loop
        </h3>
        <p className="font-sans text-sm text-foreground/50 mb-6">
          New arrivals, style tips, and exclusive offers.
        </p>
        {submitted ? (
          <p
            className="font-sans text-sm text-[#25D366] font-medium"
            data-ocid="newsletter.success_state"
          >
            ✓ You&apos;re subscribed! Welcome to Denim &amp; Stone.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="flex gap-2 max-w-sm mx-auto">
            <Input
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 rounded-none border-foreground/20 bg-white text-sm font-sans"
              data-ocid="newsletter.input"
            />
            <Button
              type="submit"
              className="rounded-none bg-foreground text-background hover:bg-foreground/80 font-sans font-semibold text-xs tracking-widest uppercase px-5"
              data-ocid="newsletter.submit_button"
            >
              SUBSCRIBE
            </Button>
          </form>
        )}
      </div>
    </section>
  );
}

function Footer() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined"
      ? encodeURIComponent(window.location.hostname)
      : "";

  return (
    <footer className="bg-[#1D2A3A] text-[#E9EEF5]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Shop */}
          <div>
            <h4 className="font-sans font-semibold text-xs tracking-widest uppercase text-white mb-5">
              Shop
            </h4>
            <ul className="space-y-3">
              {[
                "New Arrivals",
                "Denim",
                "Essentials",
                "Wide Leg",
                "Relaxed Fit",
              ].map((item) => (
                <li key={item}>
                  <button
                    type="button"
                    onClick={() => scrollTo("essentials")}
                    className="font-sans text-xs text-[#E9EEF5]/60 hover:text-white transition-colors tracking-wide text-left"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Info */}
          <div>
            <h4 className="font-sans font-semibold text-xs tracking-widest uppercase text-white mb-5">
              Info
            </h4>
            <ul className="space-y-3">
              {[
                "About Us",
                "Style Guide",
                "Size Chart",
                "Returns & Exchanges",
                "Contact",
              ].map((item) => (
                <li key={item}>
                  <button
                    type="button"
                    onClick={() => scrollTo("contact")}
                    className="font-sans text-xs text-[#E9EEF5]/60 hover:text-white transition-colors tracking-wide text-left"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-sans font-semibold text-xs tracking-widest uppercase text-white mb-5">
              Connect
            </h4>
            <p className="font-sans text-xs text-[#E9EEF5]/60 mb-4 leading-relaxed">
              Questions about sizing, orders, or just want to say hello?
              We&apos;d love to hear from you.
            </p>
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-sans font-semibold tracking-wider text-[#25D366] hover:opacity-80 transition-opacity uppercase"
              data-ocid="footer.primary_button"
            >
              <WhatsAppIcon size={14} /> Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-sans text-xs text-[#E9EEF5]/40">
            &copy; {year} Denim &amp; Stone. All rights reserved.
          </p>
          <a
            href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${hostname}`}
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans text-xs text-[#E9EEF5]/30 hover:text-[#E9EEF5]/60 transition-colors"
          >
            Built with ♥ using caffeine.ai
          </a>
        </div>
      </div>
    </footer>
  );
}

function FloatingWhatsApp() {
  return (
    <a
      href={waUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 bg-[#25D366] hover:bg-[#1ebe59] text-white font-sans font-semibold text-xs tracking-widest uppercase px-5 py-3.5 rounded-full shadow-lg hover:shadow-xl transition-all"
      data-ocid="whatsapp.primary_button"
    >
      <WhatsAppIcon size={18} />
      <span>CHAT WITH US</span>
    </a>
  );
}

export default function App() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Header mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />
      <main className="pt-16">
        <HeroSection />
        <EssentialsSection />
        <StyleBanner />
        <WhatsAppSection />
        <NewsletterSection />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
