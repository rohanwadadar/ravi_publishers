# Quick Reference: Semester Filtering Flow

## Visual Flow Diagram

```
┌─────────────────────────────────────────────────────────────────┐
│                         USER INTERACTION                         │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
                    ┌──────────────────┐
                    │  Hover "JOYWAY"  │
                    │   in Navbar      │
                    └──────────────────┘
                              │
                              ▼
                    ┌──────────────────┐
                    │  Dropdown Opens  │
                    │  Shows:          │
                    │  - Term Guide    │
                    │  - Workbook      │
                    │  - Coursebooks   │
                    │  - Semester - 1  │
                    │  - Semester - 2  │
                    └──────────────────┘
                              │
                              ▼
                    ┌──────────────────┐
                    │ Click Semester 1 │
                    │  Expands to show │
                    │  Pre-KG → 5th    │
                    └──────────────────┘
                              │
                              ▼
                    ┌──────────────────┐
                    │  Click "Pre-KG"  │
                    └──────────────────┘
                              │
┌─────────────────────────────────────────────────────────────────┐
│                         URL NAVIGATION                           │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
        Navigate to: /series/joyway?semester=1&grade=prekg
                              │
┌─────────────────────────────────────────────────────────────────┐
│                      SERIESPAGE COMPONENT                        │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
                    ┌──────────────────┐
                    │  Parse URL Params│
                    │  semester = "1"  │
                    │  grade = "prekg" │
                    └──────────────────┘
                              │
                              ▼
                    ┌──────────────────┐
                    │ Normalize Grade  │
                    │ "prekg"→"Pre-KG" │
                    └──────────────────┘
                              │
                              ▼
                    ┌──────────────────┐
                    │  Set Filters:    │
                    │  class: Pre-KG   │
                    │  type: Semester  │
                    │  semester: 1     │
                    └──────────────────┘
                              │
┌─────────────────────────────────────────────────────────────────┐
│                        FILTERING LOGIC                           │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
                    ┌──────────────────┐
                    │  Filter Books:   │
                    │  1. Series Match │
                    │  2. Semester #   │
                    │  3. Grade Match  │
                    │  4. Type Match   │
                    └──────────────────┘
                              │
                              ▼
        ┌─────────────────────────────────────────┐
        │  FROM: booksData array (4000+ books)    │
        │                                         │
        │  FILTER 1: series === "Joyway"         │
        │  ↓ Result: ~500 books                   │
        │                                         │
        │  FILTER 2: /semester.*1/i.test(name)   │
        │  ↓ Result: ~50 books                    │
        │                                         │
        │  FILTER 3: subCategory === "Pre-KG"    │
        │  ↓ Result: ~5 books                     │
        │                                         │
        │  FILTER 4: category.includes("Semester")│
        │  ↓ Result: 2 books                      │
        └─────────────────────────────────────────┘
                              │
┌─────────────────────────────────────────────────────────────────┐
│                         DISPLAY RESULTS                          │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
        ┌─────────────────────────────────────────┐
        │  BOOKS DISPLAYED:                       │
        │                                         │
        │  📚 Joyway Semester Coursebook 1        │
        │     - Pre-KG                            │
        │     ₹180 (was ₹220)                     │
        │     ⭐⭐⭐⭐⭐                              │
        │     [Add to Cart]                       │
        │                                         │
        │  📚 Joyway Semester Workbook 1          │
        │     - Pre-KG                            │
        │     ₹120 (was ₹150)                     │
        │     ⭐⭐⭐⭐⭐                              │
        │     [Add to Cart]                       │
        └─────────────────────────────────────────┘
```

---

## Data Structure Flow

```
┌─────────────────────────────────────────────────────────────────┐
│                          data.js                                 │
└─────────────────────────────────────────────────────────────────┘

booksData = [
  {
    id: 8001,
    name: "Joyway Semester Coursebook 1 - Pre-KG",
    series: "Joyway",                    ← Series Filter
    category: "Joyway Semester Books",   ← Type Filter
    subCategory: "Pre-KG",               ← Grade Filter
    price: 180,
    features: ["Semester 1", ...]        ← Semester Indicator
  },
  // ... more books
]

                    ↓ FILTERING ↓

        Matches URL: ?semester=1&grade=prekg

                    ↓ RESULT ↓

        Displayed on SeriesPage
```

---

## Component Communication

```
┌──────────────┐
│   Navbar     │
│              │
│  - Builds    │
│    dropdown  │
│  - Creates   │
│    links     │
└──────┬───────┘
       │
       │ <Link to="/series/joyway?semester=1&grade=prekg">
       │
       ▼
┌──────────────┐
│ React Router │
│              │
│  - Parses    │
│    route     │
│  - Passes    │
│    params    │
└──────┬───────┘
       │
       │ location.search = "?semester=1&grade=prekg"
       │
       ▼
┌──────────────┐
│ SeriesPage   │
│              │
│  - Reads     │
│    params    │
│  - Filters   │
│    books     │
│  - Displays  │
│    results   │
└──────┬───────┘
       │
       │ filteredBooks array
       │
       ▼
┌──────────────┐
│  BookCard    │
│  (repeated)  │
│              │
│  - Shows     │
│    book info │
│  - Add to    │
│    cart btn  │
└──────────────┘
```

---

## State Management

```
┌─────────────────────────────────────────────────────────────────┐
│                      SeriesPage State                            │
└─────────────────────────────────────────────────────────────────┘

URL Changes
    ↓
useEffect triggered (dependency: location.search)
    ↓
Parse new query params
    ↓
Update filters state
    ↓
useMemo recalculates filteredBooks
    ↓
Component re-renders with new books
    ↓
User sees updated results
```

---

## Filter Priority

```
1. Series Match (Joyway/Enlight/Ravi)
   ↓
2. Semester Number (1 or 2)
   ↓
3. Grade/Class (Pre-KG, LKG, etc.)
   ↓
4. Type (Semester/Term/Workbook)
   ↓
5. Subject (Optional)
   ↓
6. Sort (Price/Name)
```

---

## Example URLs

```
Base Joyway Page:
/series/joyway
→ Shows ALL Joyway books

Semester 1 - Pre-KG:
/series/joyway?semester=1&grade=prekg
→ Shows Semester 1 books for Pre-KG

Semester 2 - 5th Class:
/series/joyway?semester=2&grade=5th
→ Shows Semester 2 books for 5th Class

Multiple Filters:
/series/joyway?semester=1&grade=lkg&type=workbook
→ Shows Semester 1 Workbooks for LKG
```

---

## File Locations

```
client_book_shop/
├── src/
│   ├── components/
│   │   └── Navbar.jsx ..................... Navigation structure
│   ├── pages/
│   │   └── SeriesPage.jsx ................. Filtering logic
│   └── data.js ............................ Book data
├── ARCHITECTURE.md ........................ Complete system docs
├── SEMESTER_FILTERING_GUIDE.md ............ Implementation guide
└── QUICK_REFERENCE.md ..................... This file
```

---

## Quick Commands

```bash
# Start dev server
npm run dev

# Test Semester 1 - Pre-KG
http://localhost:5173/series/joyway?semester=1&grade=prekg

# Test Semester 2 - LKG
http://localhost:5173/series/joyway?semester=2&grade=lkg

# View all Joyway books
http://localhost:5173/series/joyway
```

---

## Key Code Snippets

### 1. Parse URL Params (SeriesPage.jsx)
```javascript
const queryParams = new URLSearchParams(location.search);
const semesterParam = queryParams.get('semester');
const gradeParam = queryParams.get('grade');
```

### 2. Normalize Grade (SeriesPage.jsx)
```javascript
const normalizeGrade = (grade) => {
    const gradeMap = {
        'prekg': 'Pre-KG',
        'lkg': 'LKG',
        // ... more mappings
    };
    return gradeMap[grade.toLowerCase()] || grade;
};
```

### 3. Semester Filter (SeriesPage.jsx)
```javascript
const matchesSemester = filters.semester.some(sem => {
    const pattern = new RegExp(`semester.*${sem}`, 'i');
    return pattern.test(book.name);
});
```

### 4. Navigation Link (Navbar.jsx)
```javascript
{
    label: 'Pre-KG',
    path: '/series/joyway?semester=1&grade=prekg'
}
```

---

**Last Updated:** February 6, 2026  
**Status:** ✅ Working  
**Server:** http://localhost:5173
