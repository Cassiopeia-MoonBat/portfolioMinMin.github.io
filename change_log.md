# Portfolio Change Log

## Overview
This document records the changes made to the portfolio website during the conversation, including both a summary of the work and the exact code-level changes.

## Summary of implemented changes

### 1. Added expandable sections for the main content
The About, Projects, and Contact sections were changed into collapsible panels so the content can be shown or hidden under each headline.

### 2. Added smooth expand/collapse behavior
CSS transitions were added so the content opens and closes smoothly instead of appearing instantly.

### 3. Kept the layout consistent with the existing portfolio design
The new panels use the same visual style as the rest of the page, with rounded boxes, spacing, and a clear heading layout.

## Exact code changes

### 1. Main HTML structure changes
File: index.html

#### Added a banner section to the top of the page
Location: near the start of the main content, directly under the page header

What changed:
- Added a new header banner structure with an image and an overlay area.
- Added a role card placeholder inside the banner overlay.
- Restored the standalone name text in the banner overlay.
- Removed the site name from the navigation bar area.

#### Section collapse behavior for content blocks
Location: About, Projects, and Contact sections

What changed:
- Wrapped each main content section in a details/summary structure.
- Added summary headings so each section can expand and collapse.
- Added content containers inside each section for the expandable content.

### 2. CSS style changes
File: code/css/style.css

#### Updated the site color palette
Location: :root variables at the top of the stylesheet

What changed:
- Changed the primary, secondary, accent, text, and background color variables.
- Shifted the page design toward a deeper blue-teal palette that fits the art-focused header aesthetic.

#### Styled the header and banner area
Location: .site-header, .site-banner, .banner-overlay, .role-card, .banner-title

What changed:
- Added styling for the combined header and banner section.
- Added a rounded banner container with shadow and overflow handling.
- Added overlay styling for the banner image.
- Styled the role card and placeholder text.
- Positioned the role card and banner title within the banner overlay.

#### Styled collapsible sections
Location: .collapsible-section, .collapsible-section summary, .summary-icon, .details-content

What changed:
- Added styling for expandable section panels.
- Added smooth transition effects for opening and closing the content.
- Styled the summary headings and the dropdown arrow icon.

#### Updated section spacing and card appearance
Location: .section, .project-grid, .project-card

What changed:
- Adjusted section padding for better page layout.
- Added visual card styling for the project section.
- Kept the page content visually consistent with the new theme.

### 3. Image addition
File: assets/media/banner-placeholder.svg

What changed:
- Added a temporary placeholder SVG banner image for previewing the header design.

### 4. Later replacement of the placeholder image
File: index.html

What changed:
- Replaced the temporary SVG banner with an image from the media folder:
  assets/media/MinaMooncat/Mooncat.png

### 5. Added a documentation file
File: documentation.md

What changed:
- Created a documentation file that explains every JavaScript function in `code/js/code.js`.
- Documented every CSS section and selector in `code/css/style.css`.

### 6. Removed unrelated stylesheet content from the documentation
File: documentation.md

What changed:
- Removed the blackjack-specific stylesheet section from `documentation.md`.
- Kept the documentation focused on the portfolio website code only.

### 7. Increased banner image display height
File: code/css/style.css

What changed:
- Increased the `.site-banner img` height from `280px` to `420px` to show more of the banner artwork.
- Added `object-position: center center` to better center the image content inside the banner.

### 8. Contact section: added icon links
File: index.html, code/css/style.css

What changed:
- Replaced plain text links in the Contact section with icon-based links for LinkedIn, Linktree, Email, and Instagram.
- Preserved existing Linktree and email addresses; added placeholder LinkedIn and Instagram URLs to update.
- Added CSS rules for `.contact-list`, `.contact-link`, `.icon`, and `.contact-text` to style the new links.

### 9. Instagram icon: custom gradient SVG
File: index.html

What changed:
- Replaced the generic Instagram SVG with a custom gradient SVG that matches the provided design (rounded square, inner ring, and small dot).  
- Gradient stops use `#feda75`, `#d62976`, and `#962fbf` to approximate Instagram's color palette.

### 10. Removed Instagram link from Contact section
File: index.html

What changed:
- Removed the Instagram icon/link from the Contact section at the user's request.

### 11. Added project page HTML template
File: project_pages/project_template.html

What changed:
- Created a reusable template page for project detail pages.
- Updated the template to match the portfolio theme with the same dark gradient hero, rounded cards, and accent styling.
- Added a large hero image area, project title and tagline, description block, screenshot gallery, and link list.
- Included buttons for returning to the portfolio and for a custom back action handled by user JavaScript.
### 12. Applied project page template to all project pages
File: project_pages/*.html

What changed:
- Copied the new project page structure into all existing project pages under project_pages.
- Standardized hero, description, screenshots, and a single portfolio button across each page.

### 13. Outsourced project page styles to projectpage.css
File: code/css/projectpage.css, project_pages/*.html

What changed:
- Created code/css/projectpage.css for project page-specific styles.
- Removed inline <style> blocks from all project pages and project_template.html.
- Added a second stylesheet link to each project page so it loads both global and project-specific styles.

