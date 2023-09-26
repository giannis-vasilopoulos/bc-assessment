# bc-assessment

## System requirements

- Node.js 18 or later
- Yarn

## Notes

- The HTML ad slot tags(adslot1, mobileAdslot1) create a hydration error for next.js 13, because the script injects img tag inside this custom tag for the ad slots. On the dev server happens randomly. So I decided to comment those tags.
  <img width="1014" alt="image" src="https://github.com/giannis-vasilopoulos/bc-assessment/assets/17063140/2dfca3b7-83c1-4ca7-b4c1-b016512c46f4">

- Because of the first objective, I fetch the main layout data client-side from next.js API endpoint. Otherwise, I would fetch those data server-side.

- Unfortunately, I don't have experience with Tailwind, so I decided to stick with CSS modules
