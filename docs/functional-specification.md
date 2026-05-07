# LoomsLilly — Complete Consolidated Functional Specification

This document combines all currently planned platform functionality, frontend behavior, role logic, dynamic systems, marketplace systems, interaction requirements, and backend-ready architecture into one unified specification for the LoomsLilly platform. It incorporates the original platform requirements together with the refined implementation roadmap and all additional requested behaviors/features. 

---

# 1. CORE PLATFORM STRUCTURE

## Website Type

LoomsLilly is a multi-page creative marketplace and community platform focused on arts, crafts, tutorials, events, discussions, and seller-driven commerce.

The platform includes:

* Buyer functionality
* Seller functionality
* Shared buyer/seller (“both”) accounts
* Community interaction systems
* Product marketplace systems
* Tutorial and event ecosystems
* Dynamic homepage personalization
* Marketplace analytics systems

---

# 2. GLOBAL WEBSITE STRUCTURE

## Main Navigation Pages

The platform must contain fully linked navigation across all pages.

### Main navigation links:

* Crafts
* Arts
* Tutorials
* Deals
* Community
* Events
* New Arrivals
* Trending

### Right-side navigation actions:

* Cart
* Sign Up / Login
* Account
* Join Community

---

# 3. HOMEPAGE SYSTEM

## Homepage Purpose

The homepage acts primarily as:

* a navigation gateway
* a discovery hub
* a dynamic personalized marketplace preview

The homepage should not behave like a content-heavy landing page.

---

## Homepage Sections

### Intro Section

* Brand introduction
* Animated entry transitions
* Floating design elements
* Role-aware messaging

---

### Featured Product Section

Each featured product card includes:

* product image
* product name
* product category
* price
* quantity availability
* buy/add to cart button
* save button
* out-of-stock state
* hover animations

---

### Categories Section

Displays:

* Crafts
* Arts

Each category links to dedicated category pages.

---

### Top Performing Sellers / Artists Section

Dynamic section displaying:

* Top 10 sellers based on real sales/order data
* Seller profile image
* Seller name
* Hover enlargement animation
* Clickable seller circles
* Seller profile routing

Heading changes based on account type:

* Buyer → “Top Performing Artists”
* Seller/Both → “Top Performing Sellers”

---

### Trending Products / What's Selling Insights

Role-aware heading system:

* Buyer → Trending Products
* Seller/Both → What's Selling Insights

Section displays:

* trending products
* popular products
* seller performance previews
* preview cards linking to Trending page

---

### New Arrivals Section

Displays:

* recently uploaded products
* latest products first
* category labels
* max latest products limit (planned dynamic limit)

Section links to New Arrivals page.

---

### Weekly Picks Section

Dynamic recommendation-ready section designed for:

* user behavior personalization
* frequently visited category logic
* future AI/recommendation integration

---

### Community Section

Displays:

* discussion previews
* join discussion CTA
* community preview cards

---

### Tutorials Section

Displays:

* tutorial previews
* creator attribution
* upload access entry points

---

### Events Section

Displays:

* workshops
* exhibitions
* pop-ups
* event previews
* register actions

---

# 4. CATEGORY SYSTEM

## Crafts Page

Acts as category hub.

### Subcategories:

* Crochet
* Knitting
* Embroidery

Each subcategory:

* has dedicated page
* uses reusable product data layer
* supports seller upload access
* supports product filtering

---

## Arts Page

Acts as category hub.

### Subcategories:

* Sketching
* Painting
* Abstract Art

Each subcategory:

* has dedicated page
* supports seller uploads
* uses shared product systems

---

# 5. PRODUCT & MARKETPLACE SYSTEM

## Product Features

Each product supports:

* name
* category
* type/subcategory
* image
* details/description
* seller attribution
* stock quantity
* delivery estimate
* likes/saves
* badges (flash sale, discounts, etc.)
* creation date
* trending status

---

## Product Card Features

Each product card includes:

* hover animations
* save functionality
* add to cart
* quantity selector
* out-of-stock handling
* ownership logic
* seller restrictions

---

## Seller Restrictions

Seller-only accounts:

* cannot access cart
* cannot add products to cart
* cannot purchase own products

Both accounts:

* can upload products
* can add to cart
* can purchase products

---

## Stock Management

Products must:

* store quantity available
* display “Out of Stock” when quantity reaches 0
* block additional cart additions beyond available stock
* notify seller when stock becomes empty
* allow seller quantity updates

---

## Upload Product System

Seller upload form includes:

* product name
* category/type
* price
* details
* image upload
* stock quantity
* delivery time

---

## Seller Product Management

Seller-specific “My Products” section includes:

* uploaded products list
* likes count
* edit functionality
* delete functionality
* quantity update
* image update

---

# 6. CART & ORDER SYSTEM

## Cart Features

Supports:

* add to cart
* remove from cart
* quantity increment/decrement
* persistent cart
* stock validation
* checkout preparation

---

## Cart Restrictions

Seller-only account:

* cannot view cart
* cannot use checkout

Both account:

* fully supported

---

## Quantity Validation

If user exceeds stock:

* display “Not enough product available”
* block additional quantity

---

## Checkout Flow

Checkout includes:

* COD note
* receipt summary
* expected delivery estimate
* order confirmation
* future backend order persistence

---

# 7. AUTHENTICATION & ACCOUNT SYSTEM

## Account Types

Platform supports:

* Guest
* Buyer
* Seller
* Both

---

## Authentication Features

Includes:

* signup
* login
* logout
* session persistence
* role-aware rendering

---

## Sign-Up Features

Signup includes:

* role selection
* field validation
* password validation
* email validation
* show/hide password
* inline error messages
* necessary-field validation

---

## Password Rules

Password must include:

* at least 1 capital letter
* at least 1 symbol
* at least 2 numbers

---

## Email Validation

Specific validation:

* missing “@” detection
* invalid format detection

---

## Account Page Features

Displays:

* name
* email
* account type
* profile image
* editable account settings

---

## Account Editing Features

Supports:

* edit name
* edit email
* edit password
* edit role/account type

---

## Password Change Flow

Includes:

* old password verification
* failed attempt tracking
* future email verification support
* popup modal flow

---

## Account Type Change Rules

When seller changes to buyer:

* warning shown
* uploaded products deleted
* confirmation required
* suggestion to switch to “both” instead

---

# 8. SELLER PROFILE SYSTEM

## Seller Profile Page

Includes:

* profile image
* seller name
* seller products
* seller attribution
* marketplace identity

---

## Seller Ranking System

Top sellers determined using:

* order quantity
* sales data
* future analytics integration

---

# 9. DEALS SYSTEM

## Deals Page

Displays:

* discounts
* flash sales
* limited-time offers

---

## Seller Deal Creation

Seller can:

* select own products
* set original price
* set discounted price
* set expiry date
* create deal descriptions

---

## Role-Aware Deals Access

Buyer/Both:

* can access deals
* can purchase deals

Guest:

* signup prompt

Seller-only:

* alternate seller actions instead of purchase flow

---

# 10. COMMUNITY SYSTEM

## Community Features

Includes:

* join community
* discussion system
* discussion replies
* moderation systems

---

## Community Join Page

Contains:

* onboarding flow
* community preview
* rules acceptance

---

## Discussion System

Supports:

* discussion creation
* clickable discussion lists
* replies
* delete own discussion
* report users

---

## Moderation System

Includes:

* user reports
* banned-user frontend handling
* blocked access states

---

# 11. TUTORIAL SYSTEM

## Tutorials Features

Supports:

* tutorial previews
* creator attribution
* uploads
* owner-only deletion

---

## Tutorial Upload Form

Includes:

* video/images
* title
* written details
* category/type

---

# 12. EVENTS SYSTEM

## Event Features

Displays:

* workshops
* exhibitions
* pop-ups

---

## Event Upload

Includes:

* name
* venue
* date
* slots
* event type
* registration link
* details

---

## Event Registration

Registration form includes:

* name
* email
* event selection

Validation includes:

* date validation
* slot validation
* expiry checks

---

# 13. SEARCH SYSTEM

Global search system supports:

* products
* tutorials
* discussions
* events
* sellers

Results grouped by category/page.

---

# 14. DYNAMIC SYSTEMS

## Dynamic Homepage Logic

Homepage prepared for:

* featured sellers
* trending items
* weekly picks
* personalization
* recommendations

---

## Dynamic New Arrivals

Supports:

* latest products
* category labels
* automatic updating

---

## Dynamic Popular Items

Supports:

* most liked products
* trending products
* community favorites

---

# 15. INTERACTION & UI BEHAVIOR

## Interaction Systems

Includes:

* hover animations
* click animations
* smooth transitions
* page entry transitions
* floating animated elements

---

## Notifications

Supports:

* toast notifications
* inline notifications
* role-specific alerts
* stock warnings

---

## Empty States

Every major page should include:

* loading state
* empty state
* access denied state
* error state

---

## 404 System

Dedicated 404 page required for:

* lost routes
* invalid pages
* broken navigation

---

# 16. ACCESS CONTROL & OWNERSHIP

Only owners can:

* edit/delete products
* edit/delete tutorials
* edit/delete discussions
* edit/delete events

Role-based restrictions apply globally.

---

# 17. BACKEND-READY ARCHITECTURE

Frontend structure must support future:

* API integration
* centralized endpoints
* reusable data models
* role validation
* backend-driven homepage logic
* recommendation systems
* analytics systems
* order systems
* seller ranking systems

---

# 18. LOCAL PERSISTENCE

Temporary frontend persistence includes:

* auth state
* cart
* account type
* community acceptance state

Using:

* localStorage
* sessionStorage

---

# 19. FINAL STRUCTURAL RULES

* Every homepage section links to dedicated page
* Every category links to subcategories
* Every subcategory is its own page
* All new pages must preserve existing UI/UX style
* Forms must maintain visual consistency
* Seller and buyer experiences remain role-aware while preserving overall design language
