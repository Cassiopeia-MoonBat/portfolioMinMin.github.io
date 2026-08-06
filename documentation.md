# Code Dictionary for Portfolio Website

## JavaScript Functions and Behavior

<a id="js-load-ready"></a>
### `window.addEventListener("load", ready)`
- Registers the `ready` function to run once the page finishes loading.
- Ensures any code inside `ready()` runs after the DOM and page assets are available.

<a id="js-function-ready"></a>
### `function ready()`
- Intended to update a visit counter from `visitcounter.txt`.
- The fetch block is currently commented out, so it does not execute.
- If enabled, it would read the counter file, convert it to a number, increment it, and log the new value.

<a id="js-function-buttonwork"></a>
### `function buttonwork()`
- Redirects the browser to `project1.html` when called.
- Typically linked to a button or element that should open the first project page.

<a id="js-function-buttonitch"></a>
### `function buttonItch()`
- Redirects the browser to the Itch.io page for "Those Who Remained." 
- Useful for linking a button directly to an external game page.

<a id="js-function-buttonface"></a>
### `function buttonFace()`
- Redirects the browser to the Global Game Jam page for "Faceless Cultivation."
- Another external link helper for a button.

<a id="js-commented-dice-roll"></a>
### Commented-out Dice Roll block
- Defines `dice` and `rollButton` elements for a dice roll UI.
- `rollDice()` would generate a random number from 1 to 20 and change the `dice` image source.
- The event listener on `rollButton` would call `rollDice()` when clicked.
- Currently disabled with `/* ... */`.

### Smooth Scrolling for Navigation Links
- `document.querySelectorAll('a[href^="#"]')` selects all anchor links that jump to in-page sections.
- For each such link, the click event is intercepted to prevent the default jump.
- `scrollIntoView({ behavior: 'smooth' })` scrolls smoothly to the linked section.
- Makes anchor navigation feel more polished and less abrupt.

### Mobile Navigation Toggle
- `const menuToggle = document.querySelector('.menu-toggle')` finds the mobile menu button.
- `const navLinks = document.querySelector('.nav-links')` finds the navigation list.
- When `menuToggle` exists, a click toggles the `active` class on `navLinks` and `open` on `menuToggle`.
- This likely shows/hides the mobile menu and changes the button state.

### Close Mobile Menu When a Link is Clicked
- `navLinks.querySelectorAll('a')` selects every menu link.
- Clicking a navigation link removes the `active` and `open` classes.
- Ensures the mobile dropdown closes automatically after selection.

### Project Cards Scroll Animation
- `const projectCards = document.querySelectorAll('.project-card')` selects each project card element.
- `observerOptions = { threshold: 0.1 }` specifies that the card is considered visible when 10% appears.
- `IntersectionObserver` watches cards entering the viewport.
- When a card becomes visible, it adds the `visible` class and stops observing that card.
- This creates a scroll-reveal effect for project cards.

## CSS Section Dictionary

<a id="css-root-variables"></a>
### `:root` variables
- Defines reusable color variables: `--primary`, `--secondary`, `--accent`, `--text`, and `--background`.
- Centralizes the color theme for easier updates.

<a id="css-global-reset"></a>
### Global reset (`*`)
- Removes default margin and padding from all elements.
- Sets `box-sizing: border-box` for predictable layout sizing.

<a id="css-body"></a>
### `body`
- Sets the site font to Arial/Helvetica/sans-serif.
- Uses `var(--text)` for text color and `var(--secondary)` for background.
- Adds page padding and full viewport height.
- Configures a background image placeholder (commented out) and layout behavior.

<a id="css-headings"></a>
### Headings (`h1`, `h2`, `h3`, `h4`)
- `h1`: centered, a custom text color, outline styling, and a shadow effect.
- `h2`: uses the primary theme color, slightly larger text, and no bottom margin.
- `h3`: adds spacing and medium font size.
- `h4`: underlines the text.

<a id="css-header-siteheader"></a>
### `header` and `.site-header`
- `header`: white text color.
- `.site-header`: gradient background and padded container for the top page section.

<a id="css-site-banner"></a>
### `.site-banner` and image styling
- `.site-banner`: centers the banner, limits width, rounds corners, and adds shadow.
- `.site-banner img`: makes images cover the banner area and keeps aspect ratio.

<a id="css-banner-overlay"></a>
### `.banner-overlay`
- Creates a semi-transparent overlay across the banner.
- Uses flex layout to space content horizontally and vertically.
- Adds padding and a dark gradient for readability.

<a id="css-role-card"></a>
### `.role-card`
- Glass-like card styling with blurred background, border, padding, and rounded corners.
- Designed as an overlay card for profile or role details.

<a id="css-banner-title"></a>
### `.banner-title`
- Aligns title content to the right and centers it vertically.
- Applies custom margin spacing.

<a id="css-navbar"></a>
### `.navbar`, `.logo`, `.nav-links`, and link styling
- `.navbar`: horizontal flex container with centered alignment and space between elements.
- `.logo`: prominent site branding text.
- `.nav-links`: horizontal list without bullets.
- `.nav-links a`: white links with a hover accent color.

<a id="css-menu-toggle"></a>
### `.menu-toggle`
- Hidden by default for desktop layouts.
- Styled as an unstyled button that shows on mobile.

<a id="css-section"></a>
### `.section`
- Adds padding and centers content within a maximum width.

<a id="css-collapsible-section"></a>
### `.collapsible-section`
- Styles `details` panels with a light background, border, rounded corners, and subtle shadow.
- `summary` is made into a horizontal flex header with no default marker.
- Includes a `.summary-icon` that rotates when the section opens.
- `.details-content` animates open/closed with height, opacity, and transform transitions.

<a id="css-project-grid"></a>
### `.project-grid` and `.project-card`
- `.project-grid`: responsive grid layout for project cards.
- `.project-card`: hidden by default with downward offset and zero opacity.
- `.project-card.visible`: reveals cards with a fade-and-lift animation.
- `.project-card img`: makes card images fit and round the corners.

<a id="css-button"></a>
### `.button`
- Custom button styling with rounded pill shape, shadow, and color transitions.
- Includes active and hover states for press feedback.

<a id="css-container"></a>
### `#container`
- Centers content using flexbox and enforces a minimum height.

<a id="css-dice"></a>
### `.dice`
- Styles text or an icon used for dice output.
- Uses a transition and absolute positioning.

<a id="css-rollbutton"></a>
### `#rollButton`
- Removes the default border and adds a pointer cursor.
- Adds a smooth background transition.

<a id="css-footer"></a>
### `footer`
- Centers footer text and uses the primary color background.
- Adds padding, margin, and smaller text size.

<a id="css-responsive-navigation"></a>
### Responsive Navigation (`@media (max-width: 768px)`)
- Converts `.nav-links` into a vertical dropdown panel.
- Positions the mobile menu offscreen by default and transitions it into view.
- Shows the `.menu-toggle` button only on smaller screens.

<a id="css-grid-container"></a>
### `.grid-container` and grid area classes
- Defines a 4-column CSS grid layout for an alternate page structure.
- Assigns named grid areas for `.header`, `.main`, `.right`, and `.menu`.
- Uses a translucent background and responsive padding.
