✅ What Is useQuery?
useQuery is a React hook from @tanstack/react-query used to fetch and cache data from APIs or servers.

🧠 Why Use useQuery Instead of useEffect + fetch?
Traditional	React Query
Manages state manually (loading, error, etc.)	Handles all automatically
Needs useEffect, useState, and try/catch	Only needs useQuery()
No built-in caching	Automatic caching
No built-in retry	Retries failed requests
Manual refetching	Auto refetch, stale handling, cache invalidation

🔁 Real-World Example: Amazon-like App
Imagine you're building an Amazon-like website. You need to:

Fetch a product list

Fetch user profile

Fetch orders

Fetch categories

You would use useQuery() in each case:


const { data: products, isLoading } = useQuery({
  queryKey: ["products"],
  queryFn: () => fetch("/api/products").then(res => res.json()),
});
🛠️ Internal Working of useQuery
Let's say you run useQuery({ queryKey: ['user'], queryFn })
Check Cache

It checks if ['user'] is in its cache.

If found and not stale, it returns cached data.

If No Cache or Stale → Call queryFn

Executes queryFn() → fetches from API.

Shows isLoading: true.

Success or Error

If successful → stores result in cache and sets isLoading: false.

If failed → retries (default 3 times), then sets error.

Auto Refetching

Refetches when window gains focus (unless disabled).