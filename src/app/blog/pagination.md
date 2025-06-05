# Pagination in Next.js - Notes and Examples

## 1. Definition

**Pagination** is a technique used to divide large sets of data (e.g., 100 items) into smaller chunks or pages (e.g., 10 items per page), and only show a portion of the data at a time.

It enhances:

* Performance (only loads needed data)
* UX (easy navigation)

🧠 Why Use Pagination?

Improve performance

Reduce load time

Enhance user experience

Easier to navigate

---

## 2. Frontend Pagination (Basic)

Using static data (e.g., 100 items in an array):

```js
const items = Array.from({ length: 100 }, (_, i) => `Item ${i + 1}`);
const currentPage = 1;
const itemsPerPage = 10;

const start = (currentPage - 1) * itemsPerPage;
const end = start + itemsPerPage;
const visibleItems = items.slice(start, end);
```

### Explanation:

* `start`: Finds the starting index of the current page.

  * For Page 1: `(1 - 1) * 10 = 0`
* `end`: `start + itemsPerPage` gives the index **after** the last item on the page.

  * `0 + 10 = 10` → Slice from 0 to 9 (10 items).
* `items.slice(start, end)` returns items for current page.

---

## 3. Rendering Page Numbers

```js
{Array.from({ length: totalPages }, (_, i) => (
  <button onClick={() => setCurrentPage(i + 1)}>{i + 1}</button>
))}
```

* `Array.from({ length: totalPages })` creates empty array of buttons.
* `(_, i) => i + 1` gives us 1-based page numbers.

---

## 4. Prev / Next Buttons Logic

```js
<button onClick={handlePrev} disabled={currentPage === 1}>Prev</button>
<button onClick={handleNext} disabled={currentPage === totalPages}>Next</button>
```

### Prev/Next Handlers:

```js
const handlePrev = () => {
  if (currentPage > 1) setCurrentPage(currentPage - 1);
}
const handleNext = () => {
  if (currentPage < totalPages) setCurrentPage(currentPage + 1);
}
```

### Disabled Conditions:

* Disable Prev when `currentPage === 1`
* Disable Next when `currentPage === totalPages`

---

## 5. Example with 50 Items, 5 Per Page

```js
const items = Array.from({length: 50}, (_, i) => `Product ${i + 1}`);
const itemsPerPage = 5;
const currentPage = 1; // state-based
const start = (currentPage - 1) * itemsPerPage;
const end = start + itemsPerPage;
const visibleItems = items.slice(start, end);
```

### Pages Calculation Table:

| currentPage | start | end | items displayed |
| ----------- | ----- | --- | --------------- |
| 1           | 0     | 5   | Product 1 - 5   |
| 2           | 5     | 10  | Product 6 - 10  |
| 3           | 10    | 15  | Product 11 - 15 |
| ...         | ...   | ... | ...             |
| 10          | 45    | 50  | Product 46 - 50 |

---

## 6. Real-Time Examples of Pagination

* **Amazon**: Product listings are paginated.
* **Blogs**: Articles are paginated for reading.
* **Google Search**: Results are paginated at the bottom.

---

## 7. Advanced Pagination in Next.js

Using `useSearchParams`, `useRouter`, and `usePathname`:

* You can manage pagination with URL query strings:
  `/products?page=2&pageSize=5`
* Read values using `useSearchParams()`
* Navigate using `router.push()`

### Pagination Component Props:

```ts
interface PaginationProps {
  totalRecords: number;
  page: number;
  pageSize: number;
  route: string;
}
```

### Generating visible page numbers dynamically:

```js
const getVisiblePages = () => {
  const maxVisible = 5;
  let startPage = Math.max(1, page - Math.floor(maxVisible / 2));
  let endPage = Math.min(totalPages, startPage + maxVisible - 1);

  if (endPage - startPage < maxVisible - 1) {
    startPage = Math.max(1, endPage - maxVisible + 1);
  }

  const pages = [];
  for (let i = startPage; i <= endPage; i++) {
    pages.push(i);
  }
  return pages;
};
```

---

## 8. Key Concepts Recap

* `Array.from({ length: N }, (_, i) => i + 1)` → Creates \[1, 2, ..., N]
* `items.slice(start, end)` → Gets portion of items array
* `start = (currentPage - 1) * itemsPerPage` → Finds where current page starts
* `end = start + itemsPerPage` → Where to stop slicing

---

## 9. Common Mistakes

* Forgetting to disable Next/Prev buttons
* Using wrong logic in `handleNext` or `handlePrev`
* Using `i` instead of `i + 1` when page numbers are 1-based

---

## 10. TODO for Mastery

* [x] Understand slice logic
* [x] Add Prev/Next buttons with conditions
* [x] Practice with dynamic data (from API)
* [ ] Try SSR pagination using Next.js and backend
* [ ] Create reusable Pagination component

---

## 11. Flow Diagram (Text-Based)

```
[All Items] → [Slice: Start & End] → [Visible Items on UI]
                       ↑
               Start = (currentPage - 1) * itemsPerPage
               End   = Start + itemsPerPage
```

---


# Pagination Notes for Next.js

## 📘 What is Pagination?

Pagination is the process of dividing a large dataset into smaller chunks (pages), allowing users to view one page at a time instead of loading everything at once.

## 🧠 Why Use Pagination?

* Improve performance
* Reduce load time
* Enhance user experience
* Easier to navigate

---

## ✏️ Basic Logic of Pagination (Client-side)

```js
const currentPage = 1;
const itemsPerPage = 5;
const start = (currentPage - 1) * itemsPerPage; // e.g., (1-1) * 5 = 0
const end = start + itemsPerPage;             // e.g., 0 + 5 = 5
const visibleItems = items.slice(start, end);
```

### 🔍 Explanation:

* `(currentPage - 1) * itemsPerPage`: Finds the starting index of the current page.
* `start + itemsPerPage`: Defines where the slice ends (exclusive).
* `items.slice(start, end)`: Creates a subarray for current page items.

---

## 📋 Example: Rendering Pagination Buttons

```js
{Array.from({ length: totalPages }, (_, i) => (
  <button key={i} onClick={() => setCurrentPage(i + 1)}>
    {i + 1}
  </button>
))}
```

### Explanation:

* `Array.from({ length: totalPages })`: Creates an array of given length with empty values.
* `(_, i) => i + 1`: Maps index to page numbers (starting from 1).
* `key={i}`: React key prop.
* `setCurrentPage(i + 1)`: Changes the page on button click.

---

## 🔄 Prev & Next Button Logic

```js
const handlePrev = () => {
  if (currentPage > 1) setCurrentPage(currentPage - 1);
};

const handleNext = () => {
  if (currentPage < totalPages) setCurrentPage(currentPage + 1);
};
```

### Disable Buttons:

```js
<button disabled={currentPage === 1}>Prev</button>
<button disabled={currentPage === totalPages}>Next</button>
```

---

## 📦 Full Example (Client-Side Pagination)

```js
'use client';
import React, { useState } from 'react';

function Page() {
  const items = Array.from({ length: 50 }, (_, i) => `Product ${i + 1}`);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const start = (currentPage - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  const visibleItems = items.slice(start, end);
  const totalPages = Math.ceil(items.length / itemsPerPage);

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <div>
      <ul>
        {visibleItems.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
      <div>
        <button onClick={handlePrev} disabled={currentPage === 1}>Prev</button>
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            className={currentPage === i + 1 ? 'active' : ''}
          >
            {i + 1}
          </button>
        ))}
        <button onClick={handleNext} disabled={currentPage === totalPages}>Next</button>
      </div>
    </div>
  );
}

export default Page;
```

---

## 🌍 Real-World Examples of Pagination

### 1. **Amazon (E-commerce)**

* Use case: Browsing product listings
* Method: Server-side pagination (load products by category + filters)
* URL pattern: `/search?page=3&items=20`

### 2. **Google Search**

* Use case: Search result pages
* Pagination controls at the bottom
* Fast load using server rendering

### 3. **Blog Websites (e.g., Medium, Dev.to)**

* Use case: Paginate articles/posts
* Client-side or SSR depending on scale

### 4. **YouTube**

* Infinite scroll = lazy pagination
* More results loaded on scroll

---

## 📚 Server-side Pagination (Concept Overview)

* Only fetch data needed for current page
* Backend calculates offset and limit
* Frontend sends page number as query param

### Example API Query:

```http
GET /api/products?page=2&limit=5
```

### Backend Logic:

```js
const page = parseInt(req.query.page);
const limit = parseInt(req.query.limit);
const offset = (page - 1) * limit;
const products = await db.find().skip(offset).limit(limit);
```

---

## 🔁 Flow Diagram (Client-side Pagination)

```
+------------------------+
|   Total Items = 50     |
+------------------------+
          ↓
[Set itemsPerPage = 5]
          ↓
[currentPage = 1]
          ↓
[start = (1 - 1) * 5 = 0]
[end = start + 5 = 5]
          ↓
[items.slice(0, 5)] → Show items 1 to 5
```

---

## 📝 Key Takeaways

* Use `.slice(start, end)` to extract paginated items
* Use `Array.from({ length: totalPages })` to render page buttons
* Use `disabled` to manage Prev/Next buttons
* Backend pagination is more scalable for large datasets

---

Let me know if you want this converted to a PDF or styled preview!
