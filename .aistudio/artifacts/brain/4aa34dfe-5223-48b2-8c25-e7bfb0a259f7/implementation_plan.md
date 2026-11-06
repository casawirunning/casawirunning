# Casawi Running — Urban Streetwear & Athletic Drops Storefront

A high-energy, dark-mode Moroccan streetwear and running apparel e-commerce web app built for **Casawi Running**. Engineered as a pure static web application ready for instant deployment on GitHub Pages, featuring trilingual localization (Français, العربية with full RTL layout, English), Moroccan Dirham (MAD) pricing, interactive product drawer & sizing, customer checkout form with Moroccan city delivery data, and seamless WhatsApp order dispatch to **+212 694-940173** and TikTok profile integration for **@casawirunning1**.

---

## User Review & Critical Decisions

> [!IMPORTANT]
> The following parameters were confirmed during interactive discovery and are locked into the system blueprint:

- **Confirmed Store WhatsApp**: `+212 694-940173` (international wa.me link: `https://wa.me/212694940173?text=...`).
- **Confirmed Social Channel**: TikTok `@casawirunning1` prominently linked in header, banner, and order confirmation.
- **Confirmed Visual Direction**: Dark mode Casablanca urban streetwear with bold neon accents (deep charcoal/onyx surfaces `#09090b` paired with electric volt-lime `#CCFF00` highlights and sleek typography).
- **Confirmed Product Lineup**: Streetwear and athletic tops & bottoms — Nike running windbreakers, track pants, tech fleece, oversized street hoodies, running cargo pants, utility gilets, and dri-fit drops (multi-brand curated drops, not sneakers-focused).
- **Target Platform**: Pure static client application optimized for GitHub Pages or any static host with zero backend dependencies, preserving state via browser `localStorage`.
- **Payment & Delivery Model**: Cash on Delivery (*Paiement à la livraison / الدفع عند الاستلام*) across all Moroccan cities (Casablanca, Rabat, Marrakech, Tangier, Agadir, Fes, etc.).

---

## 1. Overview & Core Concept

- **What It Does**: Allows Moroccan and international streetwear enthusiasts to browse limited drops, select sizes and colors, add items to a responsive cart drawer, fill in shipping details (Name, Phone, Moroccan City, Address, and TikTok handle), and generate an instant, itemized WhatsApp order message routed directly to the shop owner.
- **Target Audience**: Moroccan urban youth, street runners, sportswear collectors, and streetwear fans looking for authentic, curated tracksuits, windbreakers, and streetwear apparel in Casablanca and nationwide.
- **Key Value**: Bridges modern e-commerce browsing with Morocco's most trusted, high-conversion purchasing channel (direct WhatsApp chat + Cash on Delivery).

---

## 2. User Experience & Visual Design

### Key User Flows

1. **Discovery & Exploration**:
   - Hero banner spotlighting the latest "Casablanca Drop" with quick category filters: *All Drops, Windbreakers & Jackets, Track Pants & Joggers, Hoodies & Crews, Training & Dri-Fit*.
   - Clean search and real-time category filtering.
   - Trilingual toggle (`FR | عربي | EN`) instantly switching all UI copy and flipping layout direction to RTL for Arabic.

2. **Product Interaction & Sizing**:
   - High-impact photography cards showing apparel in urban athletic environments.
   - Quick view / PDP modal with size selector (`S`, `M`, `L`, `XL`, `XXL`), fabric/fit breakdown, stock status, and single-click "Add to Cart".

3. **Cart Drawer & Moroccan Courier Checkout**:
   - Slide-over cart displaying line items, selected sizes, quantities, and real-time MAD subtotal calculation.
   - Checkout drawer form capturing:
     - Customer Full Name
     - Moroccan Phone Number (with validation for `06/07...` or `+212...`)
     - Destination City (Casablanca, Rabat, Marrakech, Tangier, etc. with estimated delivery time)
     - Delivery Address / Quartier
     - Customer TikTok or Instagram username (`@casawirunning1` tag community)
     - Delivery Notes (e.g., preferred delivery hours)

4. **One-Click WhatsApp Order Redirection**:
   - Generates a beautifully formatted receipt message in the customer's chosen language:
     ```text
     🇲🇦 *COMMANDE CASAWI RUNNING*
     --------------------------------
     👤 Client: Karim Tazi
     📱 Téléphone: 0612345678
     📍 Ville: Casablanca (Maârif)
     🎵 TikTok: @karim_runner

     🛍️ *ARTICLES COMMANDÉS:*
     • 1x Nike Windrunner Jacket (Taille: L) — 650 MAD
     • 1x Cargo Track Pant Black (Taille: M) — 450 MAD

     💰 *TOTAL:* 1,100 MAD
     🚚 *Livraison:* Paiement à la livraison (Cash on Delivery)
     ```
   - Auto-opens WhatsApp via `wa.me/212694940173` on mobile or WhatsApp Web on desktop.
   - Provides a fallback "Copy Order Receipt" button and instant order summary modal if the user does not have WhatsApp opened immediately.

### Visual Identity & Theme

- **Aesthetic Direction**: High-energy Casablanca urban streetwear and night-running culture. Clean, modern, high-contrast, strictly anti-slop (no generic gradient pills or decorative fake indicators).
- **Color Tokens**:
  - Dominant Neutral Canvas (60%): Deep Obsidian `#09090b` and Charcoal `#121214`.
  - Structural Surfaces (30%): Elevated card panels `#18181b` with subtle hairline borders `border-zinc-800`.
  - Accent Budget (10%): Electric Volt Neon `#ccff00` / `#d4ff00` for primary CTA buttons, active filters, and cart badges.
- **Typography & Hierarchy**:
  - Display & Headings: Punchy athletic sans (`Outfit` / `Barlow Condensed`) with optical letter-spacing.
  - Body: High-legibility `Plus Jakarta Sans`.
  - Numerals & Pricing: Tabular figures (`tabular-nums`) with `MAD` / `د.م.` currency.
  - Arabic Typography: Clean Naskh/Kufic font rendering with proper directional margins and padding.

---

## 3. Key Product Decisions & Trade-Offs

- **Static vs. Server Architecture**:
  - *Chosen*: Pure static client-side React + TypeScript architecture with `localStorage` persistence.
  - *Why*: Allows the owner to host the site for free on GitHub Pages (as requested) without database costs or backend server upkeep.
- **Direct WhatsApp API Redirect**:
  - *Chosen*: Direct `https://wa.me/212694940173?text=...` URI encoding with interactive modal preview and clipboard fallback.
  - *Why*: Eliminates high abandonment rates associated with online payment gateways in Morocco where Cash on Delivery (COD) accounts for >90% of apparel retail.
- **Trilingual Localization Engine (FR / AR / EN)**:
  - *Chosen*: Zero-dependency client-side localization dictionary with dynamic `dir="rtl"` and `lang` attribute switching on the root container.
  - *Why*: Guarantees instant switching without page reload or external translation latency.
- **Configurable Settings Drawer**:
  - *Chosen*: Hidden or quick-access shop settings toggle allowing the owner to update the WhatsApp number or TikTok handle on the fly.
  - *Why*: Gives the store owner maximum flexibility if their business phone or social handle changes.

---

## 4. Technical Architecture & Data Strategy

```
┌────────────────────────────────────────────────────────────────────────┐
│                        CASAWI RUNNING STOREFRONT                       │
└────────────────────────────────────┬───────────────────────────────────┘
                                     │
           ┌─────────────────────────┼─────────────────────────┐
           ▼                         ▼                         ▼
┌─────────────────────┐   ┌─────────────────────┐   ┌────────────────────┐
│   Top Navigation    │   │  Hero & Drop Reel   │   │  Language Switch   │
│ Wordmark · TikTok   │   │ Casablanca Street   │   │   FR | AR | EN     │
│ Cart Indicator      │   │ Curated Apparel     │   │  (Dynamic RTL)     │
└──────────┬──────────┘   └──────────┬──────────┘   └─────────┬──────────┘
           │                         │                        │
           └─────────────────────────┼────────────────────────┘
                                     │
                                     ▼
                  ┌─────────────────────────────────────┐
                  │    Catalog & Category Filtering     │
                  │  Windbreakers · Track Pants · Tops  │
                  └──────────────────┬──────────────────┘
                                     │
           ┌─────────────────────────┴─────────────────────────┐
           ▼                                                   ▼
┌─────────────────────────┐                         ┌────────────────────┐
│   Product Card Grid     │ ──[ Add with Size ]──>  │    Cart Drawer     │
│  High-Res Imagery       │                         │ Line items, sizes, │
│  Pricing in MAD         │                         │ quantity, MAD total│
└─────────────────────────┘                         └─────────┬──────────┘
                                                              │
                                                              ▼
                                                    ┌────────────────────┐
                                                    │  Checkout Modal    │
                                                    │ Name, Phone, City, │
                                                    │ Address, TikTok ID │
                                                    └─────────┬──────────┘
                                                              │
                                                              ▼
                                                    ┌────────────────────┐
                                                    │ WhatsApp Generator │
                                                    │ wa.me/212694940173 │
                                                    │ + Clipboard Backup │
                                                    └────────────────────┘
```

### Data Model & State

- **`Product`**: `id`, `name`, `brand`, `category`, `priceMAD`, `originalPriceMAD`, `images`, `sizes`, `colors`, `description`, `tag`, `isNewDrop`.
- **`CartItem`**: `product`, `selectedSize`, `selectedColor`, `quantity`.
- **`CustomerInfo`**: `fullName`, `phone`, `city`, `address`, `tiktokOrIgHandle`, `deliveryNotes`.
- **`Language`**: `'fr' | 'ar' | 'en'`.

### Implementation Sequence Plan

1. **Foundation & Assets**: Set up trilingual translations, fonts (`Outfit` / `Plus Jakarta Sans`), Tailwind volt-neon palette, and initial curated product drops (tracksuits, running jackets, street cargo pants, dri-fit tops).
2. **Catalog & Filters**: Build top navigation contract (Casawi Running brand, TikTok link `@casawirunning1`, language toggle, cart count) and responsive grid with size pickers.
3. **Cart & Moroccan Checkout**: Slide-out cart drawer with size modifications, item removal, and Moroccan shipping form (with cities dropdown).
4. **WhatsApp Order Redirection**: Automated receipt formatting in French/Arabic/English with direct WhatsApp opening and fallback copy.
5. **Static Deployment Ready**: Configure Vite relative base paths for seamless GitHub Pages deployment.
