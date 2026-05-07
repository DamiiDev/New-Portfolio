# Damilare Festus — Portfolio

A modern, professional portfolio built with **React 18** + **Tailwind CSS 3** + **Vite**.

## Stack
- React 18
- Tailwind CSS 3 (with custom design tokens)
- Vite 5
- EmailJS (for the contact form)

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Adding Your Profile Photo

In `src/components/Hero.jsx`, replace the placeholder block with:

```jsx
import profileImage from '../assets/imageprof.jpeg'

// Inside the component, replace the placeholder div with:
<img
  src={profileImage}
  alt="Damilare Festus"
  className="w-full h-full object-cover object-top rounded-sm"
/>
```

Then copy your `imageprof.jpeg` into `src/assets/`.

## Enabling EmailJS on the Contact Form

In `src/components/Contact.jsx`, uncomment and configure:

```js
import emailjs from '@emailjs/browser'

// In handleSubmit:
await emailjs.sendForm(
  'service_j2q3nxi',      // your service ID
  'template_ddtyl9w',     // your template ID
  formRef.current,
  'k8BL38mFhkajQwma3'     // your public key
)
```

## Deploying to Vercel

```bash
npm run build
# Then drag the `dist/` folder into vercel.com, or connect your GitHub repo.
```
