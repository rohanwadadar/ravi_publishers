# Series Navigation Structure - Ravi Publishers Book Shop

## Overview
The book shop now features a **hierarchical series-based navigation** structure with three main series:

```
MAIN HERO BANNER
├── Joyway Series
├── Enlight Series  
└── RAVI Publishers
```

## Detailed Hierarchy

### 1. **Joyway Series** 🟡
**Color:** Yellow (#FFF200)
**Description:** Interactive learning materials for early childhood education

#### Categories:
- **Course Books**
  - Pre-KG, Jr.KG, Sr.KG
  - 1st Class, 2nd Class, 3rd Class, 4th Class, 5th Class

- **Semester Books**
  - Pre-KG, LKG, UKG
  - 1st Class, 2nd Class, 3rd Class, 4th Class, 5th Class

- **Term Books**
  - Pre-KG, LKG, UKG
  - 1st Class, 2nd Class, 3rd Class, 4th Class, 5th Class

- **Workbooks**
  - 1st Class, 2nd Class, 3rd Class, 4th Class, 5th Class

---

### 2. **Enlight Series** 🟢
**Color:** Green (#01A651)
**Description:** Comprehensive digital-ready curriculum solutions

#### Categories:
- **Course Books**
  - Pre-KG, Jr.KG, Sr.KG
  - 1st Class, 2nd Class, 3rd Class, 4th Class, 5th Class

- **Semester Books**
  - Pre-KG, Jr.KG, Sr.KG
  - 1st Class, 2nd Class, 3rd Class, 4th Class, 5th Class

- **Term Books**
  - Pre-KG, Jr.KG, Sr.KG
  - 1st Class, 2nd Class, 3rd Class, 4th Class, 5th Class

- **Kits & Flash Cards**
  - Pre-KG Kit, Jr.KG Kit, Sr.KG Kit
  - Flash Cards

- **Workbooks**
  - Sr.KG, 1st Class, 2nd Class, 3rd Class, 4th Class, 5th Class

---

### 3. **RAVI Publishers** 🔴
**Color:** Red (#EC1C24)
**Description:** Specialized government and regional language publications

#### Categories:

##### A. **Government Publications (Govt)**
- **AP (Andhra Pradesh)**
  - State Board approved textbooks
  - AP Government curriculum

- **T.G (Telangana)**
  - State Board approved textbooks
  - Telangana Government curriculum

##### B. **Telugu Books**
- Telugu Course Books (Pre-KG to 5th Class)
- Telugu Workbooks (Jr.KG to 5th Class)

##### C. **Regional Language Books**
- **Kannada Books** (LKG to 5th Class)
- **Tamil Books** (LKG to 5th Class)

---

## Navigation Structure

### Main Navigation Bar:
```
┌─────────────────────────────────────────────────────────┐
│  Official Home │ Joyway Series │ Enlight Series │       │
│  RAVI Publishers │ About │ Price List                   │
└─────────────────────────────────────────────────────────┘
```

### Hero Banner Slides:
1. **Slide 1:** Joyway Series (Yellow accent)
2. **Slide 2:** Enlight Series (Green accent)
3. **Slide 3:** RAVI Publishers (Red accent)

---

## URL Routes

### Series Pages:
- `/series/joyway` - Joyway Series landing page
- `/series/enlight` - Enlight Series landing page
- `/series/ravi` - RAVI Publishers landing page

### Category Pages (Legacy Support):
- `/enlight-course` - Enlight Course Books
- `/enlight-semester` - Enlight Semester Books
- `/enlight-term` - Enlight Term Books
- `/kits-flash` - Kits & Flash Cards
- `/workbooks` - Workbooks
- `/languages` - Regional Language Books

---

## Visual Hierarchy Diagram

```
                    RAVI PUBLISHERS BOOK SHOP
                              │
        ┌─────────────────────┼─────────────────────┐
        │                     │                     │
    JOYWAY              ENLIGHT                 RAVI
   (Yellow)             (Green)                (Red)
        │                     │                     │
   ┌────┴────┐           ┌────┴────┐          ┌────┴────┐
   │         │           │         │          │         │
Course   Semester    Course   Semester      Govt     Telugu
Books     Books      Books     Books         │         │
   │         │           │         │      ┌───┴───┐    │
Term    Workbooks    Term     Kits &     AP    T.G   Kannada
Books                Books    Flash                   Tamil
                              Cards
                                │
                           Workbooks
```

---

## Implementation Details

### Files Modified:
1. **`src/components/Hero.jsx`** - Updated hero banner with series slides
2. **`src/components/Navbar.jsx`** - Updated navigation to series-based structure
3. **`src/data.js`** - Added series-based navCategories
4. **`src/App.jsx`** - Added SeriesPage routes
5. **`src/pages/SeriesPage.jsx`** - NEW: Dynamic series page component
6. **`src/seriesConfig.js`** - NEW: Series hierarchy configuration

### Key Features:
- ✅ Three distinct series with unique branding colors
- ✅ Hierarchical navigation structure
- ✅ Dynamic series pages with category grids
- ✅ Featured books section per series
- ✅ Backward compatibility with existing routes
- ✅ Responsive design for mobile and desktop

---

## Testing Locally

The development server is running at: **http://localhost:5173/ravi_publishers/**

### Test These URLs:
1. `http://localhost:5173/ravi_publishers/` - Home page with new hero banner
2. `http://localhost:5173/ravi_publishers/series/joyway` - Joyway Series page
3. `http://localhost:5173/ravi_publishers/series/enlight` - Enlight Series page
4. `http://localhost:5173/ravi_publishers/series/ravi` - RAVI Publishers page

---

## Next Steps

Once you approve the design:
1. ✅ Test all navigation links
2. ✅ Verify book categorization
3. ✅ Check responsive design on mobile
4. ✅ Review color schemes and branding
5. 📝 Ready for Git upload after approval

---

**Status:** ✅ Ready for local testing and approval
**Server:** Running on http://localhost:5173/ravi_publishers/
