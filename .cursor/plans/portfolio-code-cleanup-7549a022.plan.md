<!-- 7549a022-d3ea-4a62-a48b-08cdb311b7eb d5bfc888-1d89-47eb-8df2-fe0ed540f4b3 -->
# Portfolio Website Code Cleanup and Refactoring Plan

## Overview

This plan addresses code quality, consistency, and maintainability issues across the portfolio website. The codebase is functional but has several areas that need improvement for professional standards.

## Issues Identified

### HTML Issues

- **Inconsistent link paths**: Mix of `./index`, `./index.html`, and broken links like `./index.html/#about` (should be `./index.html#about`)
- **Inline event handlers**: 17+ `onclick` attributes that should be moved to JavaScript
- **Typo**: "Resturaunt" → "Restaurant" in About section (line 154)
- **Missing aria-labels**: Some navigation elements lack proper accessibility labels
- **Inconsistent file extensions**: Some links omit `.html` extension

### CSS Issues

- **Duplicate definitions**: `.title` class defined twice (lines 487-500 and 502-507)
- **Scattered dark mode styles**: Dark mode CSS is spread throughout instead of being grouped
- **Magic numbers**: Hard-coded values that should use CSS variables
- **Organization**: Styles could be better grouped by component/section
- **Inconsistent formatting**: Mix of spacing and formatting styles

### JavaScript Issues

- **Legacy function**: `toggleMenu()` exists only for inline handlers (should be removed)
- **Event handling**: Should use event delegation instead of inline handlers
- **Error handling**: Missing checks in some modules

## Implementation Plan

### Phase 1: HTML Cleanup

1. **Fix all link paths** in `index.html`, `photography-portfolio.html`, `project1.html`, and `project2.html`

- Standardize to use `./index.html` with proper hash anchors
- Fix broken links like `./index.html/#about` → `./index.html#about`

2. **Fix typo**: Change "Resturaunt" to "Restaurant" in About section
3. **Add missing aria-labels**: Ensure all interactive elements have proper accessibility attributes
4. **Remove all inline onclick handlers**: Replace with data attributes or classes for JavaScript to handle

### Phase 2: CSS Organization

1. **Remove duplicate `.title` definition**: Consolidate into single definition
2. **Reorganize CSS structure** in `style.css`:

- Group dark mode styles into dedicated section
- Organize by component (navigation, sections, buttons, etc.)
- Add section comments for better navigation

3. **Extract magic numbers to CSS variables**: Create variables for spacing, sizes, and other repeated values
4. **Fix CSS syntax issues**: Remove space in `transform: rotate(-0.3 deg)` → `rotate(-0.3deg)`

### Phase 3: JavaScript Refactoring

1. **Remove inline event handlers**: Replace all `onclick` attributes with event listeners
2. **Implement event delegation**: Use event delegation for buttons and links
3. **Remove legacy `toggleMenu()` function**: Integrate directly into Navigation module
4. **Add error handling**: Add try-catch blocks and null checks where appropriate
5. **Create unified event handler**: Single module to handle all button/link clicks

### Phase 4: Code Consistency

1. **Standardize formatting**: Ensure consistent indentation and spacing
2. **Add code comments**: Document complex logic and module purposes
3. **Verify cross-page consistency**: Ensure all HTML pages follow same structure and patterns

## Files to Modify

- `index.html` - Fix links, remove onclick handlers, fix typo
- `photography-portfolio.html` - Fix links, remove onclick handlers
- `project1.html` - Fix links, remove onclick handlers  
- `project2.html` - Fix links, remove onclick handlers
- `style.css` - Reorganize, remove duplicates, extract variables
- `script.js` - Refactor event handling, remove legacy code

## Expected Outcomes

- ✅ Consistent link paths across all pages
- ✅ No inline event handlers (better separation of concerns)
- ✅ Better organized CSS with clear structure
- ✅ Improved maintainability through consistent patterns
- ✅ Better accessibility with proper ARIA labels
- ✅ Cleaner, more professional codebase

### To-dos

- [ ] Fix all inconsistent link paths across HTML files (index.html, photography-portfolio.html, project1.html, project2.html)
- [ ] Fix typo: 'Resturaunt' → 'Restaurant' in About section
- [ ] Add missing aria-labels to navigation and interactive elements
- [ ] Remove all inline onclick handlers from HTML files and replace with data attributes/classes
- [ ] Remove duplicate .title CSS definition and consolidate styles
- [ ] Reorganize CSS: group dark mode styles, organize by component, add section comments
- [ ] Extract magic numbers to CSS variables for spacing, sizes, and repeated values
- [ ] Fix CSS syntax issues (e.g., transform: rotate(-0.3 deg) → rotate(-0.3deg))
- [ ] Replace all inline onclick handlers with JavaScript event listeners using event delegation
- [ ] Remove legacy toggleMenu() function and integrate directly into Navigation module
- [ ] Add error handling and null checks to JavaScript modules
- [ ] Standardize code formatting and add helpful comments throughout