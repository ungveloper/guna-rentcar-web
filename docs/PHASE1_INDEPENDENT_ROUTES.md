# GUNA RENTCAR — independent routes update

This update changes the **home page into a navigation hub**, not a single-page scrolling site.

- `/` contains the hero, service links, a fleet-directory link, a company intro link and links to other pages.
- `/cars` contains the **full** vehicle search/filter/price sorting interface, and it is directly addressable.
- `/services/monthly`, `/services/short-term`, `/services/long-term`, `/services/accident` are independent service pages.
- `/about`, `/reviews`, `/faq`, `/contact`, `/privacy` are dedicated pages.
- Links to these pages use **absolute paths** (such as `/cars`), never `#cars` or scroll-to-section handlers.
- `data-page=home` and `data-page=cars` mark unique rendered pages for smoke tests.

After applying, stop the **existing** `next dev` server with `Ctrl+C` and restart it to pick up the route change. The script performs a production build and starts a separate temporary server to verify `/cars` and `/` are distinct routes before it pushes `main`.

Run:

```bash
npm run dev -- -p 3001
```

Visit `http://localhost:3001/cars`. This should display **전체 차량 한눈에 둘러보기** and the full car filters. Visit `/` to see the navigation hub without the full fleet explorer.
