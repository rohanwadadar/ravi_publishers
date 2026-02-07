# Product Architecture Documentation
## Ravi Publishers Book Shop - Complete System Architecture

---

## 📋 Table of Contents
1. [Project Overview](#project-overview)
2. [Technology Stack](#technology-stack)
3. [Directory Structure](#directory-structure)
4. [Core Components](#core-components)
5. [Data Architecture](#data-architecture)
6. [Routing & Navigation](#routing--navigation)
7. [State Management](#state-management)
8. [Filtering & Search Algorithm](#filtering--search-algorithm)
9. [Key Features](#key-features)
10. [Component Hierarchy](#component-hierarchy)

---

## 1. Project Overview

**Project Name:** Ravi Publishers Book Shop  
**Type:** E-commerce Web Application for Educational Books  
**Framework:** React + Vite  
**Purpose:** Online catalog and ordering system for educational books across multiple series (Joyway, Enlight, Ravi)

### Business Model
- **Target Audience:** Schools, institutions, teachers, and parents
- **Product Categories:** 
  - Early learning books (Pre-KG to 5th)
  - Semester-based curriculum
  - Term-based curriculum
  - Workbooks and practice materials
  - Regional language books

---

## 2. Technology Stack

### Frontend
- **Framework:** React 18.x
- **Build Tool:** Vite 7.x
- **Routing:** React Router DOM v6
- **Styling:** Tailwind CSS
- **Icons:** Font Awesome
- **Image Hosting:** ImageKit CDN

### Development Tools
- **Package Manager:** npm
- **Version Control:** Git
- **Deployment:** GitHub Pages (static hosting)

---

## 3. Directory Structure

```
client_book_shop/
├── public/                      # Static assets
│   ├── favicon.ico
│   └── images/
├── src/
│   ├── components/              # Reusable UI components
│   │   ├── Navbar.jsx          # Main navigation with dropdowns
│   │   ├── Hero.jsx            # Homepage hero carousel
│   │   ├── Categories.jsx      # Category grid display
│   │   ├── FeaturedProducts.jsx # Featured book showcase
│   │   ├── BookCard.jsx        # Individual book display card
│   │   ├── Footer.jsx          # Site footer
│   │   └── Cart.jsx            # Shopping cart sidebar
│   │
│   ├── pages/                   # Page-level components
│   │   ├── HomePage.jsx        # Main landing page
│   │   ├── SeriesPage.jsx      # Series-specific catalog (Joyway/Enlight/Ravi)
│   │   ├── CategoryPage.jsx    # Category-based filtering
│   │   ├── BookDetailPage.jsx  # Individual book details
│   │   ├── CheckoutPage.jsx    # Order form and checkout
│   │   ├── PriceListPage.jsx   # Complete catalog/price list
│   │   ├── WorkbooksPage.jsx   # Workbooks category
│   │   ├── KitsFlashPage.jsx   # Educational kits
│   │   └── AboutPage.jsx       # Company information
│   │
│   ├── data.js                  # Central data store (books catalog)
│   ├── App.jsx                  # Main app component with routing
│   ├── index.css                # Global styles
│   └── main.jsx                 # Application entry point
│
├── ARCHITECTURE.md              # This file
├── CHANGELOG_REDESIGN.md        # Design change log
├── IMPLEMENTATION_SUMMARY.md    # Implementation notes
├── package.json                 # Dependencies
└── vite.config.js              # Vite configuration

```

---

## 4. Core Components

### 4.1 Navbar.jsx
**Purpose:** Main navigation with multi-level dropdowns  
**Key Features:**
- Sticky header with scroll detection
- Series-based navigation (Joyway, Enlight, Ravi)
- Semester and grade-level sub-navigation
- Live search with autocomplete
- Shopping cart indicator
- User profile management
- Mobile-responsive hamburger menu

**Navigation Structure:**
```javascript
HOME
JOYWAY
  ├── Term Guide
  ├── Workbook
  ├── Coursebooks
  ├── Semester - 1
  │   ├── Pre-KG, LKG, UKG, 1st-5th
  └── Semester - 2
      └── Pre-KG, LKG, UKG, 1st-5th
ENLIGHT
  ├── Term Series
  ├── Semester
  ├── Workbook
  └── Coursebooks
RAVI
  ├── Telugu
  └── GOVT
      ├── A.P
      └── T.G
KITS
CATALOG (Price List)
ABOUT
```

### 4.2 SeriesPage.jsx
**Purpose:** Dynamic series catalog with advanced filtering  
**Key Features:**
- URL parameter-based filtering (semester, grade)
- Multi-dimensional filtering (class, subject, type)
- Real-time search and sort
- Series-specific theming
- Responsive grid layout

**Filtering Algorithm:**
1. Parse URL query parameters (`?semester=1&grade=prekg`)
2. Normalize grade names (prekg → Pre-KG)
3. Apply multi-level filters:
   - Series match (Joyway/Enlight/Ravi)
   - Semester pattern matching
   - Grade/class matching
   - Subject filtering
   - Type/category filtering
4. Sort results (price, name, default)

### 4.3 BookCard.jsx
**Purpose:** Individual book display component  
**Key Features:**
- Book image with lazy loading
- Price display (current + old price)
- Rating stars
- Quick add to cart
- Hover effects and animations
- Link to detail page

### 4.4 Cart.jsx
**Purpose:** Shopping cart sidebar  
**Key Features:**
- Slide-in panel
- Item quantity management
- Price calculation
- Checkout navigation
- Local storage persistence

### 4.5 CheckoutPage.jsx
**Purpose:** Order form and submission  
**Key Features:**
- Customer information form
- Order summary
- Email integration (Web3Forms API)
- Form validation
- Mailto fallback

---

## 5. Data Architecture

### 5.1 Data Structure (data.js)

**Book Object Schema:**
```javascript
{
  id: Number,              // Unique identifier
  name: String,            // Book title
  description: String,     // Detailed description
  series: String,          // "Joyway" | "Enlight" | "RAVI"
  category: String,        // "Enlight Semester Books" | "Joyway Course Books"
  subCategory: String,     // "Pre-KG" | "1st Class" | "Jr.KG"
  price: Number,           // Current price
  oldPrice: Number,        // Original price (for discount display)
  image: String,           // ImageKit CDN URL
  rating: Number,          // 1-5 star rating
  features: Array<String>  // Key features/highlights
}
```

**Category Organization:**
```javascript
navCategories = {
  joyway_series: ["Course Books", "Semester Books", "Term Books", "Workbooks"],
  enlight_series: ["Course Books", "Semester Books", "Term Books", "Kits & Flash", "Workbooks"],
  ravi_series: ["Government (AP)", "Government (TG)", "Telugu Books", "Kannada Books"],
  joyway_semester: ["Pre-KG", "LKG", "UKG", "1st-5th Class"],
  // ... more categories
}
```

### 5.2 Data Flow

```
User Action → URL Change → Query Params → Filter State → Filtered Books → UI Update
```

**Example Flow:**
1. User clicks "Semester 1 → Pre-KG" in Joyway dropdown
2. Navigate to `/series/joyway?semester=1&grade=prekg`
3. SeriesPage parses query params
4. Filters applied:
   - Series: "Joyway"
   - Type: "Semester"
   - Class: "Pre-KG"
   - Semester pattern: "Semester.*1"
5. Display matching books

---

## 6. Routing & Navigation

### 6.1 Route Configuration (App.jsx)

```javascript
Routes:
  / → HomePage
  /series/:seriesName → SeriesPage
  /category/:categoryId → CategoryPage
  /book/:bookId → BookDetailPage
  /checkout → CheckoutPage
  /price-list → PriceListPage
  /workbooks → WorkbooksPage
  /kits-flash → KitsFlashPage
  /about → AboutPage
```

### 6.2 URL Parameter Patterns

**Series Pages:**
- `/series/joyway` - All Joyway books
- `/series/joyway?semester=1&grade=prekg` - Joyway Semester 1 Pre-KG books
- `/series/enlight?type=coursebook` - Enlight coursebooks

**Category Pages:**
- `/category/ravi-telugu` - Ravi Telugu books
- `/category/ravi-govt-ap` - Ravi Government AP books

---

## 7. State Management

### 7.1 Global State (App.jsx)

```javascript
State Variables:
  - cart: Array<{book, quantity}>  // Shopping cart items
  - isCartOpen: Boolean             // Cart sidebar visibility
  - searchQuery: String             // Global search term
  - searchCategory: String          // Search category filter
```

### 7.2 Component-Level State

**SeriesPage:**
```javascript
  - sortBy: String                  // Sort method
  - filters: {
      class: Array<String>,
      subject: Array<String>,
      type: Array<String>,
      language: Array<String>,
      region: Array<String>,
      semester: Array<String>,
      grade: Array<String>
    }
```

**Navbar:**
```javascript
  - activeDropdown: String          // Currently open dropdown
  - mobileMenuOpen: Boolean         // Mobile menu state
  - searchStr: String               // Search input value
  - liveResults: {books, categories} // Search autocomplete results
  - profile: {name, location}       // User profile
```

### 7.3 Local Storage

**Persisted Data:**
- `ravibooks_cart` - Shopping cart items
- `ravibooks_profile` - User profile information

---

## 8. Filtering & Search Algorithm

### 8.1 Semester & Grade Filtering

**Input:** URL parameters `?semester=1&grade=prekg`

**Process:**
1. **Parse Parameters:**
   ```javascript
   const semesterParam = queryParams.get('semester'); // "1"
   const gradeParam = queryParams.get('grade');       // "prekg"
   ```

2. **Normalize Grade:**
   ```javascript
   normalizeGrade("prekg") → "Pre-KG"
   normalizeGrade("1st") → "1st Class"
   ```

3. **Apply Filters:**
   ```javascript
   filters = {
     class: ["Pre-KG"],
     type: ["Semester"],
     semester: ["1"],
     grade: ["prekg"]
   }
   ```

4. **Match Books:**
   ```javascript
   // Semester pattern matching
   /semester.*1|semester.*coursebook.*1|semester.*workbook.*1/i
   
   // Examples that match:
   - "Enlight Semester Coursebook 1 - Pre-KG"
   - "Joyway Semester Workbook 1 - Pre-KG"
   - "Semester 1 - Pre-KG"
   ```

### 8.2 Search Algorithm

**Live Search (Navbar):**
```javascript
Input: User types "english pre"
↓
Filter books: name.includes("english") && name.includes("pre")
Filter categories: categoryName.includes("english") || categoryName.includes("pre")
↓
Display top 4 books + top 3 categories
```

**Global Search:**
```javascript
Input: Search query + optional category
↓
Navigate to: /?search=query&category=cat
↓
Filter all books matching query in name/category
```

---

## 9. Key Features

### 9.1 Responsive Design
- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Touch-friendly navigation
- Optimized images for mobile

### 9.2 Performance Optimizations
- React.memo for expensive components
- useMemo for filtered/sorted data
- Lazy loading images
- Debounced search input
- Code splitting by route

### 9.3 User Experience
- Smooth animations (Tailwind transitions)
- Loading states
- Empty states with clear CTAs
- Error handling
- Form validation
- Accessibility (ARIA labels, semantic HTML)

### 9.4 SEO & Social Sharing
- Meta tags per page
- Open Graph tags
- Descriptive URLs
- Semantic HTML structure

---

## 10. Component Hierarchy

```
App
├── Navbar
│   ├── Logo
│   ├── SearchBar
│   │   └── SearchResults
│   ├── ProfileMenu
│   ├── CartButton
│   └── MobileMenu
│       └── DropdownItems
├── Routes
│   ├── HomePage
│   │   ├── Hero
│   │   ├── Categories
│   │   └── FeaturedProducts
│   │       └── BookCard[]
│   ├── SeriesPage
│   │   ├── SeriesHeader
│   │   ├── FilterSidebar
│   │   │   ├── TypeFilter
│   │   │   ├── ClassFilter
│   │   │   ├── SubjectFilter
│   │   │   └── LanguageFilter (Ravi only)
│   │   └── BookGrid
│   │       └── BookCard[]
│   ├── BookDetailPage
│   │   ├── BookGallery
│   │   ├── BookInfo
│   │   ├── AddToCartSection
│   │   └── RelatedBooks
│   │       └── BookCard[]
│   ├── CheckoutPage
│   │   ├── OrderSummary
│   │   ├── CustomerForm
│   │   └── SubmitButton
│   └── ... other pages
├── Cart (Sidebar)
│   ├── CartHeader
│   ├── CartItems[]
│   │   └── CartItem
│   ├── CartSummary
│   └── CheckoutButton
└── Footer
    ├── CompanyInfo
    ├── QuickLinks
    └── SocialLinks
```

---

## 11. API Integrations

### 11.1 Web3Forms (Email Service)
**Endpoint:** `https://api.web3forms.com/submit`  
**Purpose:** Send order confirmations  
**Method:** POST  
**Payload:**
```javascript
{
  access_key: "YOUR_ACCESS_KEY",
  subject: "New Order from Ravi Publishers",
  from_name: customerName,
  email: customerEmail,
  message: orderDetails
}
```

### 11.2 ImageKit CDN
**Base URL:** `https://ik.imagekit.io/rohanwadadar/`  
**Purpose:** Image hosting and optimization  
**Features:**
- Automatic format conversion (WebP)
- Lazy loading
- Responsive images
- URL-based transformations

---

## 12. Deployment

### 12.1 Build Process
```bash
npm run build
# Generates: dist/ folder with optimized static files
```

### 12.2 GitHub Pages Deployment
```bash
npm run deploy
# Builds and pushes to gh-pages branch
```

**Configuration (vite.config.js):**
```javascript
base: '/repository-name/'  // Set for GitHub Pages
```

---

## 13. Future Enhancements

### Planned Features
1. **Backend Integration**
   - Database for books and orders
   - Admin panel for inventory management
   - Real-time stock tracking

2. **Payment Gateway**
   - Online payment integration
   - Invoice generation
   - Order tracking

3. **User Accounts**
   - Customer login/registration
   - Order history
   - Wishlist functionality

4. **Advanced Features**
   - Book recommendations
   - Bulk order discounts
   - Multi-language support
   - PDF catalog downloads

---

## 14. Maintenance & Updates

### Adding New Books
1. Edit `src/data.js`
2. Add book object to `booksData` array
3. Ensure proper series, category, and subCategory values
4. Upload image to ImageKit
5. Test filtering and search

### Adding New Series
1. Update `navStructure` in `Navbar.jsx`
2. Add series config in `SeriesPage.jsx`
3. Update routing in `App.jsx`
4. Add category mappings in `data.js`

### Updating Styles
1. Global styles: `src/index.css`
2. Component styles: Inline Tailwind classes
3. Theme colors: Update across components (search for hex codes)

---

## 15. Contact & Support

**Developer:** Rohan Wadadar  
**Repository:** rohanwadadar/ravi_publishers  
**Support:** Contact through GitHub issues

---

**Last Updated:** February 6, 2026  
**Version:** 2.0.0  
**Architecture Status:** Active Development
