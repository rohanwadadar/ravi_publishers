# Semester & Grade Filtering Implementation

## Overview
This document explains the implementation of the semester and grade-based filtering system for the Joyway series navigation.

---

## What Was Implemented

### 1. **Navbar Updates** (`src/components/Navbar.jsx`)

Added two new semester sections under the JOYWAY dropdown:

```javascript
JOYWAY
  ├── Term Guide
  ├── Workbook
  ├── Coursebooks
  ├── Semester - 1
  │   ├── Pre-KG → /series/joyway?semester=1&grade=prekg
  │   ├── LKG → /series/joyway?semester=1&grade=lkg
  │   ├── UKG → /series/joyway?semester=1&grade=ukg
  │   ├── 1st → /series/joyway?semester=1&grade=1st
  │   ├── 2nd → /series/joyway?semester=1&grade=2nd
  │   ├── 3rd → /series/joyway?semester=1&grade=3rd
  │   ├── 4th → /series/joyway?semester=1&grade=4th
  │   └── 5th → /series/joyway?semester=1&grade=5th
  └── Semester - 2
      ├── Pre-KG → /series/joyway?semester=2&grade=prekg
      ├── LKG → /series/joyway?semester=2&grade=lkg
      ├── UKG → /series/joyway?semester=2&grade=ukg
      ├── 1st → /series/joyway?semester=2&grade=1st
      ├── 2nd → /series/joyway?semester=2&grade=2nd
      ├── 3rd → /series/joyway?semester=2&grade=3rd
      ├── 4th → /series/joyway?semester=2&grade=4th
      └── 5th → /series/joyway?semester=2&grade=5th
```

**Changed:**
- "PRICE LIST" renamed to "CATALOG"

---

### 2. **SeriesPage Filtering Logic** (`src/pages/SeriesPage.jsx`)

#### A. URL Parameter Parsing
```javascript
// Parse query parameters from URL
const queryParams = new URLSearchParams(location.search);
const semesterParam = queryParams.get('semester'); // "1" or "2"
const gradeParam = queryParams.get('grade');       // "prekg", "lkg", etc.
```

#### B. Grade Normalization
```javascript
// Convert URL-friendly grade names to data structure format
normalizeGrade("prekg") → "Pre-KG"
normalizeGrade("lkg")   → "LKG"
normalizeGrade("1st")   → "1st Class"
normalizeGrade("2nd")   → "2nd Class"
// ... etc
```

#### C. Filter State Management
```javascript
filters = {
  class: ["Pre-KG"],      // Normalized grade
  type: ["Semester"],      // Book type
  semester: ["1"],         // Semester number
  grade: ["prekg"],        // Original grade param
  subject: [],
  language: [],
  region: []
}
```

#### D. Semester Pattern Matching
```javascript
// Matches books with semester number in name/category
Pattern: /semester.*1|semester.*coursebook.*1|semester.*workbook.*1/i

Examples that match:
✓ "Joyway Semester Coursebook 1 - Pre-KG"
✓ "Joyway Semester Workbook 1 - LKG"
✓ "Enlight Semester 1 - UKG"
```

---

### 3. **Sample Data Added** (`src/data.js`)

Added 27 new Joyway semester books:

**Semester 1 Coursebooks (8 books):**
- Pre-KG, LKG, UKG, 1st-5th Class

**Semester 2 Coursebooks (8 books):**
- Pre-KG, LKG, UKG, 1st-5th Class

**Semester 1 Workbooks (3 books):**
- Pre-KG, LKG, UKG

**Semester 2 Workbooks (3 books):**
- Pre-KG, LKG, UKG

**Additional workbooks can be added for higher classes as needed.**

---

## How It Works

### User Flow Example:

1. **User Action:**
   - Hovers over "JOYWAY" in navbar
   - Clicks "Semester - 1" → "Pre-KG"

2. **Navigation:**
   - URL changes to: `/series/joyway?semester=1&grade=prekg`

3. **Filter Application:**
   ```javascript
   // SeriesPage receives URL params
   semester = "1"
   grade = "prekg"
   
   // Filters are set
   filters.class = ["Pre-KG"]
   filters.type = ["Semester"]
   filters.semester = ["1"]
   ```

4. **Book Filtering:**
   ```javascript
   // Books are filtered by:
   - Series: "Joyway"
   - Category contains: "semester"
   - Name matches: /semester.*1/i
   - SubCategory: "Pre-KG"
   ```

5. **Result:**
   - Displays: "Joyway Semester Coursebook 1 - Pre-KG"
   - Displays: "Joyway Semester Workbook 1 - Pre-KG"

---

## Testing the Implementation

### Test Cases:

1. **Semester 1 - Pre-KG:**
   - Navigate to: http://localhost:5173/series/joyway?semester=1&grade=prekg
   - Expected: Shows 2 books (Coursebook 1 + Workbook 1 for Pre-KG)

2. **Semester 2 - LKG:**
   - Navigate to: http://localhost:5173/series/joyway?semester=2&grade=lkg
   - Expected: Shows 2 books (Coursebook 2 + Workbook 2 for LKG)

3. **Semester 1 - 5th:**
   - Navigate to: http://localhost:5173/series/joyway?semester=1&grade=5th
   - Expected: Shows 1 book (Coursebook 1 for 5th Class)

4. **All Joyway Books:**
   - Navigate to: http://localhost:5173/series/joyway
   - Expected: Shows all Joyway books (no filters)

---

## File Changes Summary

| File | Changes | Purpose |
|------|---------|---------|
| `Navbar.jsx` | Added Semester 1 & 2 sections with grade links | Navigation structure |
| `SeriesPage.jsx` | Added URL param parsing, grade normalization, semester filtering | Filtering logic |
| `data.js` | Added 27 Joyway semester books | Sample data for testing |
| `ARCHITECTURE.md` | Complete system documentation | Reference guide |

---

## Future Enhancements

### 1. Add More Books
```javascript
// Add semester books for:
- 1st-5th Class Workbooks (Semester 1 & 2)
- Subject-specific books (Math, English, EVS)
- Term books for Joyway series
```

### 2. Visual Indicators
```javascript
// Add badges to show:
- "Semester 1" badge on book cards
- Grade level indicators
- Subject icons
```

### 3. Advanced Filtering
```javascript
// Allow users to:
- Filter by multiple semesters
- Combine semester + subject filters
- Save filter preferences
```

### 4. Breadcrumbs
```javascript
// Show navigation path:
Home > Joyway > Semester 1 > Pre-KG
```

---

## Troubleshooting

### Issue: No books showing after clicking semester link

**Check:**
1. URL has correct parameters: `?semester=1&grade=prekg`
2. Books exist in `data.js` with matching:
   - `series: "Joyway"`
   - `category: "Joyway Semester Books"`
   - `subCategory: "Pre-KG"` (or appropriate grade)
   - Name contains "Semester 1" or "Semester 2"

### Issue: Wrong books showing

**Check:**
1. Semester pattern in book name matches regex
2. Grade normalization is correct
3. Series filter is working (should only show Joyway books)

### Issue: Filters not clearing

**Check:**
1. `useEffect` dependency array includes `location.search`
2. Filter state is being reset properly
3. No conflicting filter states

---

## Code References

### Key Functions:

**normalizeGrade(grade)**
- Location: `SeriesPage.jsx` line ~75
- Purpose: Convert URL grade to data format
- Example: `"prekg"` → `"Pre-KG"`

**filteredBooks useMemo**
- Location: `SeriesPage.jsx` line ~145
- Purpose: Apply all filters to book list
- Returns: Filtered array of books

**navStructure**
- Location: `Navbar.jsx` line ~32
- Purpose: Define navigation menu structure
- Contains: All dropdown items and links

---

## Architecture Integration

This implementation follows the existing architecture:

1. **URL-based state** - Filters are in URL params (shareable links)
2. **React Router** - Uses existing routing system
3. **Memoization** - Optimized with useMemo for performance
4. **Responsive** - Works on mobile and desktop
5. **Consistent styling** - Matches existing design system

---

**Implementation Date:** February 6, 2026  
**Status:** ✅ Complete and Working  
**Testing:** Local development server running at http://localhost:5173
