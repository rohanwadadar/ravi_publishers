# Collapsible Semester Navigation - Update Guide

## What Changed

The semester sections in the JOYWAY dropdown are now **collapsible** with **bold labels**.

---

## Visual Behavior

### Before (Old Design):
```
JOYWAY Dropdown
├── Term Guide
├── Workbook
├── Coursebooks
├── Semester - 1
│   ├── Pre-KG (always visible)
│   ├── LKG (always visible)
│   ├── UKG (always visible)
│   └── ... (all grades always visible)
└── Semester - 2
    └── ... (all grades always visible)
```

### After (New Design):
```
JOYWAY Dropdown
├── Term Guide
├── Workbook
├── Coursebooks
├── ▼ Semester - 1 (BOLD, clickable)
│   └── [Hidden by default]
└── ▼ Semester - 2 (BOLD, clickable)
    └── [Hidden by default]

When clicked on "Semester - 1":
├── ▲ Semester - 1 (BOLD, expanded)
│   ├── Pre-KG  LKG
│   ├── UKG     1st
│   ├── 2nd     3rd
│   └── 4th     5th
```

---

## Desktop Mega Menu

### Initial State (Collapsed):
```
┌─────────────────────────────────────┐
│  JOYWAY                             │
├─────────────────────────────────────┤
│  • Term Guide                       │
│  • Workbook                         │
│  • Coursebooks                      │
│                                     │
│  Semester - 1  ▼  ← Bold, clickable│
│                                     │
│  Semester - 2  ▼  ← Bold, clickable│
└─────────────────────────────────────┘
```

### Expanded State (After clicking "Semester - 1"):
```
┌─────────────────────────────────────┐
│  JOYWAY                             │
├─────────────────────────────────────┤
│  • Term Guide                       │
│  • Workbook                         │
│  • Coursebooks                      │
│                                     │
│  Semester - 1  ▲  ← Bold, expanded │
│  ┌──────────────────────────────┐  │
│  │ • Pre-KG    • LKG            │  │
│  │ • UKG       • 1st            │  │
│  │ • 2nd       • 3rd            │  │
│  │ • 4th       • 5th            │  │
│  └──────────────────────────────┘  │
│                                     │
│  Semester - 2  ▼  ← Still collapsed│
└─────────────────────────────────────┘
```

---

## Mobile Menu

### Initial State:
```
┌─────────────────────────────────┐
│  JOYWAY                         │
│  ────────────────────────────   │
│                                 │
│  • Term Guide                   │
│  • Workbook                     │
│  • Coursebooks                  │
│                                 │
│  Semester - 1  ▼  (Yellow)     │
│                                 │
│  Semester - 2  ▼  (Yellow)     │
└─────────────────────────────────┘
```

### After Clicking "Semester - 1":
```
┌─────────────────────────────────┐
│  JOYWAY                         │
│  ────────────────────────────   │
│                                 │
│  • Term Guide                   │
│  • Workbook                     │
│  • Coursebooks                  │
│                                 │
│  Semester - 1  ▲  (Yellow)     │
│  ┌───────────────────────────┐ │
│  │ Pre-KG    LKG             │ │
│  │ UKG       1st             │ │
│  │ 2nd       3rd             │ │
│  │ 4th       5th             │ │
│  └───────────────────────────┘ │
│                                 │
│  Semester - 2  ▼  (Yellow)     │
└─────────────────────────────────┘
```

---

## Key Features

### 1. **Bold Labels**
- "Semester - 1" and "Semester - 2" are now displayed in **bold** (font-black)
- Larger font size (11px vs 8px)
- More prominent and clickable

### 2. **Chevron Indicators**
- ▼ (chevron-down) when collapsed
- ▲ (chevron-up) when expanded
- Animates on hover with color change

### 3. **Smooth Animations**
- Slide-in animation when expanding
- Duration: 300ms
- Smooth transition for better UX

### 4. **Grid Layout**
- Grade levels displayed in 2 columns
- Compact and organized
- Easy to scan

### 5. **Hover Effects**
Desktop:
- Grade items turn white text on red background
- Smooth color transitions

Mobile:
- Grade items turn black text on yellow background
- Maintains brand colors

---

## Technical Implementation

### State Management
```javascript
const [expandedSections, setExpandedSections] = useState({});

// Toggle function
const toggleSection = (sectionId) => {
    setExpandedSections(prev => ({
        ...prev,
        [sectionId]: !prev[sectionId]
    }));
};
```

### Rendering Logic
```javascript
// Check if section is expanded
const isExpanded = expandedSections[item.id];

// Render button
<button onClick={() => toggleSection(item.id)}>
    <span className="font-black">{item.label}</span>
    <i className={`fas fa-chevron-${isExpanded ? 'up' : 'down'}`}></i>
</button>

// Conditionally render content
{isExpanded && (
    <div className="grid grid-cols-2 gap-2">
        {/* Grade items */}
    </div>
)}
```

---

## User Interaction Flow

```
1. User hovers over "JOYWAY" in navbar
   ↓
2. Dropdown opens showing menu items
   ↓
3. User sees "Semester - 1" (bold, with ▼ icon)
   ↓
4. User clicks "Semester - 1"
   ↓
5. Section expands with animation
   ↓
6. Grade levels appear in 2-column grid
   ↓
7. Icon changes to ▲
   ↓
8. User clicks on a grade (e.g., "Pre-KG")
   ↓
9. Navigates to /series/joyway?semester=1&grade=prekg
   ↓
10. Dropdown closes
    ↓
11. SeriesPage displays filtered books
```

---

## Styling Details

### Desktop Mega Menu

**Semester Label (Button):**
```css
- Color: #1F2937 (gray-800)
- Font: 11px, black weight
- Uppercase, wide tracking
- Hover: #EC1C24 (red)
- Cursor: pointer
```

**Grade Items:**
```css
- Color: #9CA3AF (gray-400)
- Font: 10px, bold
- Padding: 8px 12px
- Border-radius: 8px
- Hover: white text on #EC1C24 background
```

### Mobile Menu

**Semester Label (Button):**
```css
- Color: #FFF200 (yellow)
- Font: 11px, black weight
- Uppercase, wide tracking
- Hover: white
```

**Grade Items:**
```css
- Background: white/5% opacity
- Color: white
- Font: 10px, bold
- Padding: 12px
- Border-radius: 12px
- Hover: black text on #FFF200 background
```

---

## Benefits

### 1. **Cleaner UI**
- Less visual clutter
- Organized hierarchy
- Better focus on main items

### 2. **Better UX**
- Progressive disclosure
- User controls what they see
- Faster scanning

### 3. **Mobile Friendly**
- Saves vertical space
- Easier navigation
- Touch-friendly targets

### 4. **Scalable**
- Easy to add more grades
- Can add more semester sections
- Maintains clean layout

---

## Testing Checklist

- [x] Desktop: Click "Semester - 1" expands grade list
- [x] Desktop: Click again collapses grade list
- [x] Desktop: Chevron icon changes (▼ ↔ ▲)
- [x] Desktop: Smooth animation on expand/collapse
- [x] Desktop: Grade items are clickable and navigate correctly
- [x] Desktop: Hover effects work on grade items
- [x] Mobile: Same behavior as desktop
- [x] Mobile: Touch-friendly button size
- [x] Both: Multiple sections can be expanded simultaneously
- [x] Both: Clicking grade item closes dropdown and navigates

---

## Browser Compatibility

✅ Chrome/Edge (latest)
✅ Firefox (latest)
✅ Safari (latest)
✅ Mobile browsers (iOS Safari, Chrome Mobile)

---

## Future Enhancements

### Possible Additions:
1. **Remember Expanded State**
   - Save to localStorage
   - Persist across page reloads

2. **Keyboard Navigation**
   - Arrow keys to navigate
   - Enter to expand/collapse
   - Tab to move between items

3. **Animation Options**
   - Slide from left
   - Fade in
   - Scale animation

4. **Visual Indicators**
   - Badge showing number of items
   - "New" indicator for new grades
   - Color coding by grade level

---

**Updated:** February 6, 2026  
**Status:** ✅ Live on localhost:5173  
**Files Modified:** `src/components/Navbar.jsx`
