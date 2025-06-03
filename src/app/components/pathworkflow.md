# 🌍 What is pathname in Next.js?

In Next.js, pathname refers to the part of the URL that defines the path — without query strings or hash fragments.

It’s basically:
✅ everything after the domain
✅ everything before ? or #

🔍 Example URLs and Pathnames
Full URL                                             Pathname
https://myapp.com/                                    /
https://myapp.com/about                              /about
https://myapp.com/products/123                      /products/123
https://myapp.com/blog/post?search=hello            /blog/post
https://myapp.com/profile#section1                 /profile

Notice:
❗ Query strings (?search=...) are not part of pathname.
❗ Hash fragments (#section1) are not part of pathname.

⚙ Where Do You Access pathname?
You can access it using:
✅ usePathname() (from next/navigation) on the client
✅ headers() or request object on the server (when needed)

🛠 Example 1 — Using usePathname() on Client

'use client'; // required for hooks

import { usePathname } from 'next/navigation';

export default function PathnameExample() {
const pathname = usePathname();

return (

<div>
<p>Current Path: {pathname}</p>
</div>
);
}
If the user visits:
https://myapp.com/products/123 → it shows:

Current Path: /products/123
🔥 Why Is Pathname Useful?
✅ Highlight active links (navigation menus)
✅ Change page behavior based on current route
✅ Track user navigation (for analytics)
✅ Conditionally render things depending on where the user is

🧩 Example 2 — Highlight Active Link

# code

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
const pathname = usePathname();

return (

<nav>
<Link href="/" className={pathname === '/' ? 'active' : ''}>Home</Link>
<Link href="/about" className={pathname === '/about' ? 'active' : ''}>About</Link>
<Link href="/products" className={pathname.startsWith('/products') ? 'active' : ''}>Products</Link>
</nav>
);
}
✅ When you visit /products/123,
Products link is active because pathname starts with /products.

⚠ Key Points
✅ pathname gives you just the path, no query or hash.
✅ Works only on the client with usePathname() hook.
✅ Use for conditional rendering, navigation states, or analytics.

# const isActive=(path:string): boolean=>pathname===path || pathname.startsWith(path + '/');

✅ Takes in a path like:

/about

/header

✅ And returns true if:

The current page exactly matches the path → pathname === path

OR

The current page is inside that path → pathname.startsWith(path + '/')

3️⃣ Why check startsWith(path + '/')?
✅ Because sometimes you want to mark the parent menu as active
even when you are on a deeper subpage.

For example:

On /header/profile,
you want the /header menu to be active.

<!-- const isActive=(path:string): boolean=>pathname===path -->

💡 What is happening?
✅ pathname →
This is the current URL path in the browser,
for example:

if you are on /about → pathname is '/about'

if you are on /blog → pathname is '/blog'

✅ path parameter →
This is the path we want to check against,
for example:

when you call isActive('/') → you’re checking if current path is '/'

when you call isActive('/about') → you’re checking if current path is '/about'

✅ pathname === path →
This compares:

Is the current page equal to the link’s path?

It returns:

true → if you are on that page

false → if you are not on that page

✅ Why wrap in a function?
We wrap it inside isActive so we can reuse it easily in JSX:

<Link className={isActive('/about') ? 'active-class' : 'inactive-class'}>
🔍 Example in action
Imagine you are on /about page:

pathname → '/about'

isActive('/about') → '/about' === '/about' → true

isActive('/') → '/about' === '/' → false

So, in your navigation, only the About link gets the “active” style.

🏗 Why is this useful?
✅ It highlights the current page in the menu
✅ It adds dynamic styles (like bold, blue) to the active link
✅ It keeps your navigation clean + reusable

| `pathname`        | `path`    | `pathname === path` | `pathname.startsWith(path + '/')` | `isActive()` |
| ----------------- | --------- | ------------------- | --------------------------------- | ------------ |
| `/about`          | `/about`  | ✅ true             | ❌ false                          | ✅ true      |
| `/about/team`     | `/about`  | ❌ false            | ✅ true (`/about/`)               | ✅ true      |
| `/header/profile` | `/header` | ❌ false            | ✅ true (`/header/`)              | ✅ true      |
| `/header/profile` | `/about`  | ❌ false            | ❌ false                          | ❌ false     |
| `/blog/post/123`  | `/blog`   | ❌ false            | ✅ true (`/blog/`)                | ✅ true      |
