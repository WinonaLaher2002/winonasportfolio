# Winona B. Laher Portfolio (LuckyLeaf)

A single-page portfolio website built with plain **HTML**, **CSS**, and **JavaScript**.

## Features
- Fully responsive layout (desktop → mobile)
- Fixed navigation with section links
- Light/Dark theme toggle (saved in `localStorage`)
- Scroll reveal animations using `IntersectionObserver`
- Contact form using **EmailJS**
- Social links & icons (local assets)

## Live Sections
- **Home** – hero intro + profile image
- **About** – design philosophy and traits
- **Skills & Tools** – categorized skill cards
- **Projects** – project cards with tags + links
- **Graphic & Social Media Work** – campaign graphics grid
- **Contact** – contact info + form

## Project Structure
- `src/index.html` – main markup
- `src/styles.css` – styling and themes
- `src/scripts.js` – theme toggle, scroll reveal, contact form logic
- `assets/icons/` – social/theme/contact icons

## Contact (EmailJS)
The contact form is wired via EmailJS in `src/scripts.js`:
- `emailjs.init("S2ISh3nT7MULDKZCE")`
- `emailjs.sendForm("service_s47cteb", "template_i2qrmmr", formEl)`

If you want to use your own EmailJS account, replace the **public key**, **service ID**, and **template ID** in `src/scripts.js`.

## How to Run
Since this is a static site, you can open `src/index.html` directly in your browser.

If you open it locally and the EmailJS form doesn’t work as expected, run it from a local server (EmailJS may require a proper origin).

### Recommended local run (optional)
- Use any local static server (VS Code Live Server extension works well)
- Then open the served URL in your browser.

## Credits
- Fonts: Google Fonts (DM Sans, Cormorant Garamond)
- Icons: `assets/icons/*`
- Email sending: EmailJS

