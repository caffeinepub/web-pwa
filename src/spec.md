# Specification

## Summary
**Goal:** Convert the current experience into a website-first, fully clickable live mock demo (not a PWA) with clear navigation, placeholder content, and updated website-centric branding.

**Planned changes:**
- Disable/remove PWA behavior by eliminating service worker registration, removing manifest and Apple web app meta/link tags, and removing any offline/PWA UI elements and references (e.g., offline notice, offline/manifest files).
- Expand the landing page into a fully clickable demo by adding working navigation and CTA flows that route/scroll to real on-site sections/pages containing meaningful placeholder content and at least one action each (no dead links).
- Update visible branding, page title, and meta description to remove “Web PWA” naming and rewrite any remaining PWA-centric copy to website-focused language.

**User-visible outcome:** Users can browse a standard website (no install/offline PWA behavior) where navigation and CTAs reliably lead to real sections/pages with placeholder content, and all branding/copy reflects a website-first demo.
