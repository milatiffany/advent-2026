# Tiffany & Co. Advent Calendar · FNBM

Interactive advent calendar for the FNBM boutiques, 1–24 December.
Each door reveals **yesterday's winner** and **today's challenge**.

- Site link: `https://<account>.github.io/<repository>/`
- Access code: ask Mila (asked once per device)
- Test view: add `#test` at the end of the link to preview any date

---

## Daily update: add yesterday's winner (2 minutes)

Do it every morning, before the boutiques open.

### 1. Add the winner's photo (optional)

1. Open the **`winners`** folder in this repository.
2. Click **Add file → Upload files**.
3. Drop the photo, **renamed with the day number of the challenge**: `day01.jpg`, `day02.jpg` … `day23.jpg` (Saturdays: `day05-1.jpg`, `day05-2.jpg`…).
4. Click **Commit changes**.

Rules for the photo:
- **JPG only** (`.jpg`, lower case). iPhone photos are often HEIC: export them as JPG first.
- A portrait framed on the face. It is automatically cropped into a circle.
- Ideally under 1 MB.

No photo? Skip this step: the winner's initials are shown instead.

### 2. Add the winner's details

1. Open the file **`data.js`**.
2. Click the **pencil icon** (Edit this file), top right.
3. In the `WINNERS` section, add one line between `{` and `}`:

```js
const WINNERS = {
  1: {name: "Camille D.", store: "Paris Rue de la Paix", result: "UPT 4.5"},
  2: {name: "Hugo B.", store: "Monaco", result: "Most expensive Icon"},
};
```

- The number = **the day of the challenge** that was won (yesterday's date).
- Keep the quotes `" "`, the colons `:` and the **comma at the end of each line**.

**Saturdays (5, 12, 19): one winner per boutique.** Put the winners between `[` and `]`:

```js
  5: [
    {name: "Hugo B.", store: "Monaco", result: "€12K via appointments"},
    {name: "Léa M.", store: "Nice", result: "€9K via appointments"},
  ],
```

Photos for Saturdays: `day05-1.jpg`, `day05-2.jpg`… in the same order as the list.

**Days 7 and 21 (store managers):** one line as usual, with the store manager's name and the store's growth as result (e.g. `"+24% vs last year"`).

4. Click **Commit changes**. The site updates within 1 to 2 minutes.

### Check

Open the site link (refresh the page) and open today's door: the winner should be shown at the top.

---

## If something goes wrong

- **The page is blank or the doors are gone** → there is a typo in `data.js` (often a missing quote or comma). Open the file, click **History**, compare with the previous version and fix the line.
- **The photo does not show** → check the name exactly: `day05.jpg`, not `Day5.JPG` or `day05.jpeg`.
- **The change does not appear** → wait 2 minutes, then refresh the page (on a phone: close and reopen the tab).

---

## Files

| File / folder | What it is | Edit? |
|---|---|---|
| `data.js` | Winners and the 24 challenges | Yes |
| `winners/` | Winner photos (`dayXX.jpg`) | Yes |
| `index.html` | The calendar itself | No |
| `img/` | Campaign photos and background | No |

Contact: Mila Goldman, FNBM Retail
