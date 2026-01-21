# TALLY FORM SETUP INSTRUCTIONS

## Quick Start

Your Tally form integration is ready! Just replace `YOUR_FORM_ID` with your actual Tally form ID.

## How to Get Your Tally Form ID

1. Go to your Tally dashboard
2. Open your form
3. Click on "Share" or "Publish"
4. Look for the embed code - the form ID is in the URL
   - Example: `https://tally.so/r/A7B2dz` → Form ID is `A7B2dz`

## Where to Replace

Search for `YOUR_FORM_ID` in these files and replace it with your actual form ID:

1. **src/components/Header.jsx** (line ~32)
2. **src/components/Hero.jsx** (line ~31)
3. **src/components/Features.jsx** (line ~27)
4. **src/components/MobileAppShowcase.jsx** (line ~224)

### Easy Find & Replace

Run this command in your terminal to replace all instances at once:

```bash
# Replace YOUR_FORM_ID with your actual form ID (e.g., A7B2dz)
find src/components -name "*.jsx" -exec sed -i 's/YOUR_FORM_ID/A7B2dz/g' {} +
```

## Testing the Integration

1. Start the dev server: `npm run dev`
2. Open http://localhost:5174/
3. Click any "Register Interest" button
4. The Tally form popup should appear with a waving emoji 👋

---

## Troubleshooting

**Popup not appearing?**

- Make sure you replaced `YOUR_FORM_ID` with your actual Tally form ID
- Check browser console for errors
- Verify the Tally script is loaded in `index.html`

**Need to change the emoji or animation?**

- Edit `data-tally-emoji-text` to change the emoji
- Edit `data-tally-emoji-animation` to change animation (wave, heart-beat, tada, etc.)
