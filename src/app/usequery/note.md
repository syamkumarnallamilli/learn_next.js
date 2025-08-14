✅ What You’ll Learn in This Guide:
What is TanStack Query (react-query)?

Installing & Setup

Basic useQuery Usage

Query Keys (and why they're important)

Query Functions and Best Practices

Caching & Background Refetching

Loading, Error, and Success States

Query Invalidation and Refetching

Pagination with useQuery

Dependent Queries (Chained Queries)

Query Parameters & URL State Sync

Parallel Queries

Prefetching Data

Mutations (useMutation) and How They Work with useQuery

Devtools Integration

React Query + Axios + REST/GraphQL Integration

Best Practices + Real-world Patterns

SSR/Next.js Integration (if needed)


1️⃣ What is TanStack Query / React Query?
TanStack Query (formerly React Query) is a powerful data-fetching library for React apps. It helps you:

Fetch, cache, and update server data easily

Automatically manage loading and error states

Avoid re-fetching the same data unnecessarily

Keep UI in sync with server data without manual code

📌 Think of it as:

“The missing data-fetching and state management tool for React.”


2️⃣ Installation & Setup
First, install the core library and devtools (optional but very useful):

npm install @tanstack/react-query
npm install @tanstack/react-query-devtools




'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { useState } from 'react';

export default function ReactQueryProvider({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

==>new QueryClient() creates the core manager.

==>useState ensures it's only created once on the client.

==>QueryClientProvider injects it into React context so useQuery can access it.


✅ What does QueryClientProvider do?
📖 Definition:
QueryClientProvider is a React Context Provider from React Query (TanStack Query) that makes your QueryClient available to the entire app.

It allows components like useQuery, useMutation, etc. to access and use the QueryClient.

🧠 Simple Explanation:
Imagine React Query is like a library system.

QueryClient = The main library database (stores all books/data).

QueryClientProvider = The Wi-Fi network that lets your phone (component) connect to the library.

useQuery = Your phone that asks for a book (data) via Wi-Fi.

Without QueryClientProvider, your components can’t talk to the QueryClient — they have no idea where to store or get cached data from.



❗ Why useState(() => new QueryClient()) — Final Real-World Breakdown:
Without useState	                 With useState(() => new QueryClient())
A new QueryClient is created on every render	A single QueryClient instance is created once
Cache is reset,                             data re-fetched	Cache is preserved, reuses data
Devtools reset, mutations break	Devtools stable, mutations work reliably
Performance issues, flickering	Smooth UI, better performance


<!-- QueryClient = your app’s cache and fetch manager.

useState(() => new QueryClient()) = create one manager only. -->


🔁 When does React Query re-fetch?
Only when:

Situation	Will it re-fetch?
Different queryKey	✅ Yes
Manual refetch (refetch())	✅ Yes
Focus window again (default)	✅ Yes
Re-render same queryKey	❌ No
Component rerenders	❌ No



.

# 🍽️ Real-World Example: Restaurant Menu App
🎯 Goal:
You’re building a food ordering app.

On the home page, you want to fetch the menu items from the backend and show them to users.

You want to:

✅ Show a loading spinner while fetching

✅ Show the list of menu items

✅ Avoid re-fetching every time the user moves between pages

✅ Cache the menu so it doesn’t hit the backend again and again

🍽️ Without React Query:
1. Every time the customer (your component) asks for the menu, the waiter (your code) runs to the kitchen (API) and gets it again.

2. Slow. Repeating work. Wastes time.

✅ With React Query and QueryClient:
1. The first time, waiter gets the menu from the kitchen (API).

2. He stores it in memory (QueryClient).

3. Next time the customer asks — waiter gives it instantly from memory, no need to fetch again.

1. ReactQueryProvider.tsx
This is your waiter’s memory brain.

'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useState } from 'react';

export default function ReactQueryProvider({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(() => new QueryClient()); // 🧠 Waiter's memory

  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  );
}

<!-- useState(() => new QueryClient()): ensures one waiter’s memory is used for the whole app. Not a new brain every render! -->

2. layout.tsx
Wrap your entire app so every page can use React Query.

import ReactQueryProvider from './ReactQueryProvider';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ReactQueryProvider>
          {children}
        </ReactQueryProvider>
      </body>
    </html>
  );
}

3.3️⃣ MenuPage.tsx — where we use useQuery

'use client';

import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const fetchMenu = async () => {
  const res = await axios.get('https://api.example.com/menu');
  return res.data;
};

export default function MenuPage() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['menu'],        // 🏷️ Unique key for caching
    queryFn: fetchMenu,        // 🔄 Function that fetches data
  });

  if (isLoading) return <p>Loading menu...</p>;
  if (isError) return <p>Failed to load menu</p>;

  return (
    <div>
      <h1>🍕 Menu</h1>
      <ul>
        {data.map((item: any) => (
          <li key={item.id}>{item.name} - ₹{item.price}</li>
        ))}
      </ul>
    </div>
  );
}


🚀 What Happens Internally?
🧠 Step-by-Step:
QueryClient is created one time (in ReactQueryProvider) and stored in React Context.

MenuPage calls useQuery({ queryKey: ['menu'], queryFn: fetchMenu })

React Query asks the QueryClient:

❓ "Do I already have data for ['menu']?"

❌ If not: fetch from API → store in memory.

✅ If yes: return cached data instantly, no fetch.

Your UI shows either:

🔄 Loading...

✅ Cached or freshly fetched data

❌ Error if API fails

📦 Why is This Useful?
Feature	What React Query Does
Avoid repeated API calls	✅ Cached by QueryClient
Share data between pages	✅ Stored globally via QueryClient
Auto re-fetch in background	✅ You can configure it
One-time setup	✅ Just wrap app with QueryClientProvider

🔁 One More Analogy (Quick Recap)
React Concept	Real-World Example
QueryClient	Waiter's memory storing menu, orders
QueryClientProvider	Restaurant floor plan sharing the waiter
useQuery	Asking the waiter for the menu
queryKey	Menu ID (like ['menu'])
queryFn	Go to kitchen if data not in memory

🎯 Goal: Understand What Happens When You Call useQuery
const { data, isLoading, isError } = useQuery({
  queryKey: ['menu'],
  queryFn: fetchMenu,
});


 # Step-by-Step Text-Based Flowchart:
  1. Component Renders

Component ⟶ calls useQuery() with:
           ⟶ queryKey = ['menu']
           ⟶ queryFn = fetchMenu

2. React Query Looks in the Cache

useQuery ⟶ accesses QueryClient via React Context
         ⟶ QueryClient checks:
               Do I already have data for ['menu']?

 3. Cache Decision
 ✅ If cached data exists:
 Yes:
 ⟶ Return cached data immediately
 ⟶ Skip calling fetchMenu
 ⟶ Set isLoading = false, isError = false

❌ If cache is empty or stale:

No:
 ⟶ Set isLoading = true
 ⟶ Call fetchMenu()
       ⟶ API request to fetch menu data

4. API Call Resolves (fetchMenu finishes)
Success:
 ⟶ Store data in cache under ['menu']
 ⟶ Set isLoading = false
 ⟶ Set data = response
 ⟶ Trigger component re-render with updated data

 5. If API Fails

Failure:
 ⟶ Store error in cache under ['menu']
 ⟶ Set isLoading = false
 ⟶ Set isError = true
 ⟶ error.message available

6. Re-renders or Navigation Happens Later

Component renders again...
 ⟶ Calls useQuery(['menu'])
 ⟶ QueryClient has cached data for ['menu']
 ⟶ Returns cached data instantly (no API call)

Flow Steps
1. useQuery() called
2. Get QueryClient from context
3. Check if queryKey exists in cache
    └── Yes → return cached result
    └── No  → call queryFn (API)
4. After API success:
    → store in cache
    → re-render with data
5. If error:
    → store error
    → show error state


# Internal Components Involved

| Part            | Role                                                               |
| --------------- | ------------------------------------------------------------------ |
| `useQuery`      | Hook used in your component                                        |
| `QueryClient`   | Central manager that stores and tracks all data                    |
| `QueryCache`    | Internal object inside QueryClient that stores actual data per key |
| `QueryObserver` | Watches the query and updates the UI on state/data changes         |
| `QueryKey`      | Unique identifier like `['menu']` to store/cache the response      |


Bonus: Control Re-fetch Behavior
useQuery({
  queryKey: ['menu'],
  queryFn: fetchMenu,
  staleTime: 1000 * 60 * 5, // 5 minutes
  refetchOnWindowFocus: false,
});


staleTime: how long the data is considered fresh (no refetch)

refetchOnWindowFocus: stop re-fetching when user switches back to tab

<!-- --------------------------------------------------------------------------- -->

🍛 1. Mutation = Placing a Food Order
🔁 2. invalidateQueries = Refreshing the Menu
🕒 3. staleTime = How long food stays “fresh” before refetch

1. useMutation: Place a Food Order
🔧 Real World:
Customer says: "I want to order a pizza."
Waiter (app) sends the order to the kitchen (backend).

'use client';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';

export default function OrderButton() {
  const queryClient = useQueryClient(); // get access to cache

  const orderFood = async (itemName: string) => {
    const response = await axios.post('/api/order', { item: itemName });
    return response.data;
  };

  const mutation = useMutation({
    mutationFn: orderFood,
    onSuccess: () => {
      // ✅ After order placed, refresh user's order list
      queryClient.invalidateQueries({ queryKey: ['my-orders'] });
    }
  });

  return (
    <button
      className="px-4 py-2 bg-green-500 text-white"
      onClick={() => mutation.mutate('Pizza')}>
      Order Pizza 🍕
    </button>
  );
}

✅ Key Points:
useMutation() handles POST/PUT/DELETE

mutation.mutate('Pizza') sends the order

onSuccess uses queryClient.invalidateQueries() to refresh cached data (like updating an order list)

 2. invalidateQueries: Refresh the Cache
🔧 Real World:
You changed the menu, so waiter forgets the old one and gets a new one from the kitchen.

✅ Example: After editing a menu item
queryClient.invalidateQueries({ queryKey: ['menu'] })

This tells React Query:

“Forget the old menu. Next time someone asks, go fetch a new one.”

 3. staleTime: Control Auto-Refetch
🔧 Real World:
The waiter says: “This menu is fresh for 10 minutes. I won’t go back to the kitchen until then.”

useQuery({
  queryKey: ['menu'],
  queryFn: fetchMenu,
  staleTime: 1000 * 60 * 10, // 10 minutes
});


For 10 minutes, React Query uses cached menu

After 10 minutes, it will auto refetch when component mounts or window refocuses

| Feature               | Meaning in Restaurant App               |
| --------------------- | --------------------------------------- |
| `useMutation()`       | Place an order (write/update data)      |
| `mutation.mutate()`   | Send the order to the kitchen (API)     |
| `invalidateQueries()` | Tell waiter to refresh the menu/orders  |
| `staleTime`           | How long the waiter remembers the menu  |
| `queryClient`         | The waiter’s brain (global data memory) |
