# Joyway Navigation Redesign - Hierarchical Structure

## New Navigation Architecture

The Joyway navigation has been redesigned to match a **3-level hierarchical structure** as shown in the provided diagram.

---

## Visual Structure

```
                        Joyway
                          │
          ┌───────────────┴───────────────┐
          │                               │
     Semester 1                      Semester 2
          │                               │
    ┌─────┼─────┐                   ┌─────┼─────┐
    │     │     │                   │     │     │
Term   Work  Course              Term   Work  Course
Guide  book  book               Guide  book  book
  │     │     │                   │     │     │
  │     │     │                   │     │     │
List  List  List                List  List  List
of    of    of                  of    of    of
books books books               books books books
```

---

## Detailed Hierarchy

### Level 1: Joyway (Main Category)
- Top-level navigation item
- Displays dropdown on hover

### Level 2: Semester Sections (Collapsible)
- **Semester - 1** (Bold, clickable)
- **Semester - 2** (Bold, clickable)
- Initially collapsed
- Click to expand/collapse

### Level 3: Book Types (Collapsible)
Under each semester:
- **Term Guide** (Clickable, collapsible)
- **Workbook** (Clickable, collapsible)
- **Coursebook** (Clickable, collapsible)
- Initially collapsed
- Click to expand/collapse

### Level 4: Grade Lists (Final Links)
Under each book type:
- Pre-KG, LKG, UKG
- 1st, 2nd, 3rd, 4th, 5th
- Displayed in 2-column grid
- Direct links to filtered pages

---

## Desktop Mega Menu Flow

### Initial State (All Collapsed):
```
┌─────────────────────────────────────┐
│  JOYWAY                             │
├─────────────────────────────────────┤
│                                     │
│  Semester - 1  ▼  ← Bold           │
│                                     │
│  Semester - 2  ▼  ← Bold           │
│                                     │
└─────────────────────────────────────┘
```

### After Clicking "Semester - 1":
```
┌─────────────────────────────────────┐
│  JOYWAY                             │
├─────────────────────────────────────┤
│                                     │
│  Semester - 1  ▲  ← Expanded       │
│  ├─ Term Guide  ▼                  │
│  ├─ Workbook    ▼                  │
│  └─ Coursebook  ▼                  │
│                                     │
│  Semester - 2  ▼                   │
│                                     │
└─────────────────────────────────────┘
```

### After Clicking "Term Guide":
```
┌─────────────────────────────────────┐
│  JOYWAY                             │
├─────────────────────────────────────┤
│                                     │
│  Semester - 1  ▲                   │
│  ├─ Term Guide  ▲  ← Expanded      │
│  │  ┌──────────────────────────┐  │
│  │  │ • Pre-KG    • LKG        │  │
│  │  │ • UKG       • 1st        │  │
│  │  │ • 2nd       • 3rd        │  │
│  │  │ • 4th       • 5th        │  │
│  │  └──────────────────────────┘  │
│  ├─ Workbook    ▼                  │
│  └─ Coursebook  ▼                  │
│                                     │
│  Semester - 2  ▼                   │
│                                     │
└─────────────────────────────────────┘
```

---

## URL Structure

### Pattern:
```
/series/joyway?semester={1|2}&type={termguide|workbook|coursebook}&grade={prekg|lkg|ukg|1st|2nd|3rd|4th|5th}
```

### Examples:

**Semester 1 - Term Guide - Pre-KG:**
```
/series/joyway?semester=1&type=termguide&grade=prekg
```

**Semester 1 - Workbook - LKG:**
```
/series/joyway?semester=1&type=workbook&grade=lkg
```

**Semester 2 - Coursebook - 5th:**
```
/series/joyway?semester=2&type=coursebook&grade=5th
```

---

## Complete Navigation Tree

```
Joyway
│
├── Semester - 1
│   │
│   ├── Term Guide
│   │   ├── Pre-KG → ?semester=1&type=termguide&grade=prekg
│   │   ├── LKG → ?semester=1&type=termguide&grade=lkg
│   │   ├── UKG → ?semester=1&type=termguide&grade=ukg
│   │   ├── 1st → ?semester=1&type=termguide&grade=1st
│   │   ├── 2nd → ?semester=1&type=termguide&grade=2nd
│   │   ├── 3rd → ?semester=1&type=termguide&grade=3rd
│   │   ├── 4th → ?semester=1&type=termguide&grade=4th
│   │   └── 5th → ?semester=1&type=termguide&grade=5th
│   │
│   ├── Workbook
│   │   ├── Pre-KG → ?semester=1&type=workbook&grade=prekg
│   │   ├── LKG → ?semester=1&type=workbook&grade=lkg
│   │   ├── UKG → ?semester=1&type=workbook&grade=ukg
│   │   ├── 1st → ?semester=1&type=workbook&grade=1st
│   │   ├── 2nd → ?semester=1&type=workbook&grade=2nd
│   │   ├── 3rd → ?semester=1&type=workbook&grade=3rd
│   │   ├── 4th → ?semester=1&type=workbook&grade=4th
│   │   └── 5th → ?semester=1&type=workbook&grade=5th
│   │
│   └── Coursebook
│       ├── Pre-KG → ?semester=1&type=coursebook&grade=prekg
│       ├── LKG → ?semester=1&type=coursebook&grade=lkg
│       ├── UKG → ?semester=1&type=coursebook&grade=ukg
│       ├── 1st → ?semester=1&type=coursebook&grade=1st
│       ├── 2nd → ?semester=1&type=coursebook&grade=2nd
│       ├── 3rd → ?semester=1&type=coursebook&grade=3rd
│       ├── 4th → ?semester=1&type=coursebook&grade=4th
│       └── 5th → ?semester=1&type=coursebook&grade=5th
│
└── Semester - 2
    │
    ├── Term Guide
    │   ├── Pre-KG → ?semester=2&type=termguide&grade=prekg
    │   ├── LKG → ?semester=2&type=termguide&grade=lkg
    │   ├── UKG → ?semester=2&type=termguide&grade=ukg
    │   ├── 1st → ?semester=2&type=termguide&grade=1st
    │   ├── 2nd → ?semester=2&type=termguide&grade=2nd
    │   ├── 3rd → ?semester=2&type=termguide&grade=3rd
    │   ├── 4th → ?semester=2&type=termguide&grade=4th
    │   └── 5th → ?semester=2&type=termguide&grade=5th
    │
    ├── Workbook
    │   ├── Pre-KG → ?semester=2&type=workbook&grade=prekg
    │   ├── LKG → ?semester=2&type=workbook&grade=lkg
    │   ├── UKG → ?semester=2&type=workbook&grade=ukg
    │   ├── 1st → ?semester=2&type=workbook&grade=1st
    │   ├── 2nd → ?semester=2&type=workbook&grade=2nd
    │   ├── 3rd → ?semester=2&type=workbook&grade=3rd
    │   ├── 4th → ?semester=2&type=workbook&grade=4th
    │   └── 5th → ?semester=2&type=workbook&grade=5th
    │
    └── Coursebook
        ├── Pre-KG → ?semester=2&type=coursebook&grade=prekg
        ├── LKG → ?semester=2&type=coursebook&grade=lkg
        ├── UKG → ?semester=2&type=coursebook&grade=ukg
        ├── 1st → ?semester=2&type=coursebook&grade=1st
        ├── 2nd → ?semester=2&type=coursebook&grade=2nd
        ├── 3rd → ?semester=2&type=coursebook&grade=3rd
        ├── 4th → ?semester=2&type=coursebook&grade=4th
        └── 5th → ?semester=2&type=coursebook&grade=5th
```

---

## User Interaction Flow

```
1. User hovers over "JOYWAY"
   ↓
2. Mega menu dropdown appears
   ↓
3. User sees "Semester - 1" (bold, collapsed)
   ↓
4. User clicks "Semester - 1"
   ↓
5. Semester section expands showing:
   - Term Guide ▼
   - Workbook ▼
   - Coursebook ▼
   ↓
6. User clicks "Term Guide"
   ↓
7. Term Guide section expands showing grade grid:
   Pre-KG  LKG
   UKG     1st
   2nd     3rd
   4th     5th
   ↓
8. User clicks "Pre-KG"
   ↓
9. Navigates to: /series/joyway?semester=1&type=termguide&grade=prekg
   ↓
10. SeriesPage filters and displays matching books
```

---

## Styling Details

### Level 1: Semester Sections
```css
- Font: 11px, black weight
- Color: #1F2937 (gray-800)
- Hover: #EC1C24 (red)
- Icon: Chevron up/down
- Border: Left border when expanded
```

### Level 2: Book Type Sections
```css
- Font: 10px, bold
- Color: #4B5563 (gray-600)
- Hover: #EC1C24 (red)
- Icon: Smaller chevron
- Indented with left border
```

### Level 3: Grade Links
```css
- Font: 9px, bold
- Color: #9CA3AF (gray-400)
- Layout: 2-column grid
- Padding: 6px 8px
- Border-radius: 8px
- Hover: White text on red background
```

---

## Mobile Menu

### Same 3-Level Structure:
```
JOYWAY
├─ Semester - 1  ▼  (Yellow, bold)
│  └─ [Collapsed]
└─ Semester - 2  ▼  (Yellow, bold)
   └─ [Collapsed]

After expanding Semester - 1:
├─ Semester - 1  ▲
│  ├─ Term Guide  ▼  (White)
│  ├─ Workbook    ▼  (White)
│  └─ Coursebook  ▼  (White)

After expanding Term Guide:
├─ Semester - 1  ▲
│  ├─ Term Guide  ▲
│  │  ├─ Pre-KG  LKG
│  │  ├─ UKG     1st
│  │  ├─ 2nd     3rd
│  │  └─ 4th     5th
│  ├─ Workbook    ▼
│  └─ Coursebook  ▼
```

---

## Technical Implementation

### Data Structure:
```javascript
{
    label: 'Semester - 1',
    id: 'joyway-semester-1',
    type: 'sub-structure',
    items: [
        {
            label: 'Term Guide',
            id: 'joyway-sem1-termguide',
            type: 'nested-structure',  // New type!
            items: [
                { label: 'Pre-KG', path: '...' },
                // ... more grades
            ]
        }
    ]
}
```

### Rendering Logic:
```javascript
// Level 1: Semester
if (item.type === 'sub-structure') {
    // Render semester button
    // If expanded, render children
    
    // Level 2: Book Type
    if (nested.type === 'nested-structure') {
        // Render book type button
        // If expanded, render grade grid
        
        // Level 3: Grades
        // Render as links in 2-column grid
    }
}
```

---

## Benefits of New Structure

### 1. **Better Organization**
- Clear hierarchy matching the diagram
- Logical grouping: Semester → Type → Grade
- Easier to understand and navigate

### 2. **Reduced Clutter**
- Progressive disclosure
- Only show what's needed
- Cleaner initial view

### 3. **Improved UX**
- Intuitive drill-down navigation
- Visual hierarchy with indentation
- Clear parent-child relationships

### 4. **Scalability**
- Easy to add more semesters
- Easy to add more book types
- Easy to add more grades

### 5. **Consistency**
- Same structure on desktop and mobile
- Predictable behavior
- Uniform styling

---

## Comparison: Old vs New

### Old Structure:
```
Joyway
├── Term Guide (direct link)
├── Workbook (direct link)
├── Coursebooks (direct link)
├── Semester - 1
│   └── Pre-KG, LKG, UKG, 1st-5th (flat list)
└── Semester - 2
    └── Pre-KG, LKG, UKG, 1st-5th (flat list)
```

### New Structure:
```
Joyway
├── Semester - 1
│   ├── Term Guide
│   │   └── Pre-KG, LKG, UKG, 1st-5th
│   ├── Workbook
│   │   └── Pre-KG, LKG, UKG, 1st-5th
│   └── Coursebook
│       └── Pre-KG, LKG, UKG, 1st-5th
└── Semester - 2
    ├── Term Guide
    │   └── Pre-KG, LKG, UKG, 1st-5th
    ├── Workbook
    │   └── Pre-KG, LKG, UKG, 1st-5th
    └── Coursebook
        └── Pre-KG, LKG, UKG, 1st-5th
```

---

## Testing Checklist

- [x] Desktop: Semester sections expand/collapse
- [x] Desktop: Book type sections expand/collapse
- [x] Desktop: Grade links navigate correctly
- [x] Desktop: Chevron icons update properly
- [x] Desktop: Smooth animations on all levels
- [x] Mobile: Same 3-level behavior
- [x] Mobile: Touch-friendly buttons
- [x] Both: Multiple sections can be expanded
- [x] Both: Proper indentation and visual hierarchy
- [x] Both: Clicking grade closes dropdown

---

**Updated:** February 6, 2026  
**Status:** ✅ Live on localhost:5173  
**Structure:** 3-Level Hierarchical Navigation  
**Total Links:** 48 (2 semesters × 3 types × 8 grades)
