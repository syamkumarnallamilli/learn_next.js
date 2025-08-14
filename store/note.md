# 1️⃣What is Zustand?

Zustand (German for "state") is a small, fast, and scalable state management library for React.
It’s built by the same team that made Jotai and Valtio.
1. It helps you manage global state (data that multiple components share) without the boilerplate of Redux or Context API.

<!-- Key points: -->

🪶 Lightweight (about 1 KB)

🚀 Fast (no unnecessary re-renders)

🧩 Flexible (works with hooks, async code, and React Server Components)

🔗 No need for boilerplate like Redux

# 2️⃣Why Use Zustand?

Compared to Redux:

✅ Less code

✅ No actions, reducers, or action types

✅ Supports direct mutation (with immer if you want immutability)

✅ Minimal setup

Example:
Redux: ~20–30 lines for a simple counter
Zustand: 3–4 lines for the same thing

# 3️⃣Installing Zustand
npm install zustand


## Basic Syntax

The core idea:
==> You create a store (a global state object) ==>using create() from Zustand.
create is a function from Zustand that builds your store.
It:

Creates a state container (global store)

Returns a custom hook that lets you read/update that state inside React components.

Important: This returned hook is your way of interacting with the store.
Without calling it in a component, React won’t know to re-render.

==>You define state (data) and actions (functions to change data) inside it.

## Zustand Store Syntax Explained
create((set, get) => ({
  stateKey: value,
  actionName: () => set({ stateKey: newValue })
}))

==>You have three main things inside the store creator function:
<!-- (a) set -->set → changes the state

Used to update the state.

Accepts either:

-->An object → merges into the state:
set({ count: 10 });

-->A function → gets the current state and returns an object:
set((state) => ({ count: state.count + 1 }));

<!-- (b) get -->get → returns the current state object

Used to access the current state without subscribing in a component.

Useful inside actions:

reset: () => {
  const currentCount = get().count;
  console.log("Resetting from", currentCount);
  set({ count: 0 });
}

# When to use get 
# You use get when:

You’re inside the store definition and need the current state to decide the next state.

You want to avoid subscribing to state in a component, but still need the value for logic (not for rendering UI).

# subscribers
==>In simple terms, subscribers are the functions (or components) that get notified whenever the store’s state changes.

In Zustand:
const count = UseCounter();
you’re basically subscribing your component to changes in that store’s state.

If the state inside the store changes (e.g., you call increment()), all subscribers that are using that state will re-render to reflect the new value.

<!-- Think of it like YouTube notifications: -->

Store = YouTube channel (where the content is stored)

Subscriber = You (who wants to know when new content is available)

When new content (state update) happens, subscribers get notified (component re-renders).
<!-- (c) State + Actions -->

State → data your app uses

Actions → functions that modify state using set
const useStore = create((set, get) => ({
  user: null,
  setUser: (newUser) => set({ user: newUser }),
  logout: () => {
    console.log("Logging out", get().user);
    set({ user: null });
  }
}));


<!--  -->
import { create } from "zustand";

// Store definition
const useCounterStore = create((set) => ({
  count: 0, // state
  increment: () => set((state) => ({ count: state.count + 1 })), // action
  decrement: () => set((state) => ({ count: state.count - 1 })), // action
}));

export default useCounterStore;

Usage in a component:
import useCounterStore from "./store";

function Counter() {
  const { count, increment, decrement } = useCounterStore();

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
}

# Avoid unnecessary re-renders by not destructuring the whole store unless needed.

<!-- detail explantion -->
1️⃣ The create function
import { create } from "zustand";


<!-- What it does: -->
create is a function from Zustand that builds your store.
It:

1. Creates a state container (global store)

2. Returns a custom hook that lets you read/update that state inside React components.

Important: This returned hook is your way of interacting with the store.
Without calling it in a component, React won’t know to re-render.

2️⃣ Passing a callback to create
const useCounter = create((set) => {
  return {
    counter: 0,
    incrCounter: () => set((state) => ({ counter: state.counter + 1 })),
  };
});


Here’s the breakdown:

1. create(...) takes one argument:
a callback function that receives some helper functions from Zustand.

2. Parameters provided by Zustand:

--> set → used to update the store state

--> get (optional) → used to read the store state without causing re-renders

--> api (optional) → full store API (for advanced use)

So, in our example:

(set) => { ... }


means:

<!-- 1“Zustand, give me your set function, and I’ll use it to define my store and actions.” -->

3️⃣ Defining state inside the callback

Inside that callback, we return an object:

return {
  counter: 0, // State value
  incrCounter: () => set((state) => ({ counter: state.counter + 1 })), // Action
};


1. counter is a piece of state (primitive number).

2. incrCounter is a function (action) that updates the state.

Key points:

1. State in Zustand can be primitives (number, string, boolean), objects, arrays, or even functions.

2. Actions are just functions stored alongside state.
No separate “reducers” like in Redux.

4️⃣ How set works here
incrCounter: () => set((state) => ({ counter: state.counter + 1 }))


1. The outer function (() => ...) is the action you call from your component.

2. The inner function (state) => ({ counter: state.counter + 1 }) is the updater function that gets the current store state and returns a new state object.

Why the inner function?
It ensures you always use the latest value of counter — avoiding stale updates if multiple components are changing it.

5️⃣ The returned custom hook
const useCounter = create((set) => { ... })


1. useCounter is not the store itself.
It’s a hook that gives you access to the store.

In your React components:

const counter = useCounter((state) => state.counter);
const incrCounter = useCounter((state) => state.incrCounter);


This works like React-Redux’s useSelector:

1. The function (state) => state.counter is a selector.

Zustand will:

-->>> Pass the current store state into that selector.

-->> Return only that slice (counter).

--->> Re-render this component only if that slice changes.

6️⃣ How re-renders happen across components

Imagine:

Component A → shows counter

Component B → shows counter

Component C → updates counter

If you change the counter in Component C:

Zustand updates the store.

Any component subscribed to state.counter (A and B) gets the new value.

A and B re-render automatically.

Other components that don’t use counter won’t re-render.

This is why Zustand is fast — it only re-renders what’s subscribed.

# Text-Based Flowchart of Zustand’s Internal Process
[Step 1] Developer imports `create` from 'zustand'
    ↓
[Step 2] Developer calls `create(callback)` 
         - Callback defines:
           • Initial state (data)
           • Actions (functions to change state)
         - Zustand creates a STORE (a global JS object)
         - Zustand also creates a HOOK (custom React hook)
    ↓
[Step 3] Component calls that hook (e.g., useCounter(...))
         - Component gives a SELECTOR function to pick specific state
         - Zustand internally SUBSCRIBES this component to that part of state
    ↓
[Step 4] User interacts with UI (e.g., clicks "Increase")
         - This calls an ACTION in the store (e.g., incrCounter)
         - Action calls `set(...)` provided by Zustand
    ↓
[Step 5] Zustand `set` function:
         - Takes new state (or updater function)
         - Merges it into the existing store state
         - Compares new value with old value
         - If changed → notify all subscribers that depend on it
    ↓
[Step 6] React re-renders ONLY the subscribed components
         - Components not using that state are untouched
    ↓
[Step 7] UI updates instantly with new state values




[ Step 1 ]  Component mounts
    │
    ▼
React calls:  useCounter(selector)
    │
    ▼
If first time: Zustand sees store not created yet
    │
    ▼
[ Step 2 ]  create() runs
    │
    ▼
Calls your Callback 1:
    (set) => ({
        count: 0,
        increase: () => set(
            Callback 2: (state) => ({ count: state.count + 1 })
        )
    })
    │
    ▼
Zustand stores:
    - count = 0
    - increase function
    │
    ▼
Returns the hook `useCounter` to React

-------------------------------------------------------

[ Step 3 ]  React renders component with initial state
    │
    ▼
const count = useCounter((state) => state.count)
count = 0  // UI shows 0

-------------------------------------------------------

[ Step 4 ]  User clicks "Increase"
    │
    ▼
increase() runs → calls:
    set( Callback 2 )
    │
    ▼
Callback 2 runs:
    (state) => ({ count: state.count + 1 })
    │
    ▼
Zustand updates:
    count = 1
    │
    ▼
Triggers re-render of any component subscribed to count

-------------------------------------------------------

[ Step 5 ]  React re-renders component
    │
    ▼
const count = useCounter((state) => state.count)
count = 1  // UI now shows 1
<!----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- -->

# persist

persist is middleware that comes from Zustand’s middleware package (zustand/middleware).
It’s not a separate library — it’s part of Zustand itself.

📌 Purpose:
It makes your store remember its state even after:

The user refreshes the page

The browser tab is closed and reopened

It does this by saving the store state to storage (usually localStorage or sessionStorage).

2️⃣ Without persist (problem)
import { create } from 'zustand';

const useCounter = create((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
}));

If the user increments the counter to 5, then refreshes the page — the counter goes back to 0.

Why? Because Zustand’s store is in memory only, and memory is wiped when the page reloads.

3️⃣ With persist (solution)
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useCounter = create(
  persist(
    (set) => ({
      count: 0,
      increment: () => set((state) => ({ count: state.count + 1 })),
    }),
    {
      name: 'counter-storage', // key name in localStorage
    }
  )
);

<!-- What changed: -->

We wrapped our store in persist(...)

We gave it a name (this is the localStorage key)

Now every time state changes, Zustand will save it to localStorage.

When the app reloads, Zustand will read from localStorage and restore it automatically.

5️⃣ How persist works internally
1. You call create(persist(callback, options))
2. persist sets up:
    - Saving: After each set(), it stores new state in localStorage
    - Loading: On startup, it checks if data exists in localStorage
3. If stored data is found, it merges it into your initial state
4. The rest of Zustand works as normal

6️⃣ Options in persist
persist(
  (set, get) => ({ /* state */ }),
  {
    name: 'store-name',          // key in localStorage
    getStorage: () => sessionStorage, // change storage
    partialize: (state) => ({ count: state.count }), // save only some keys
    merge: (persistedState, currentState) => ({ ...currentState, ...persistedState }),
  }
);


# 1️⃣ Without persist
export const UseCounter = create<CounterState>(initialCounterStore);


Where state lives? → Only in memory inside the Zustand store.

Page refresh? → Memory is cleared → counter resets to 0.

Switching tabs?

If both tabs are open at the same time, they each have separate memory (and separate Zustand stores), so updating in one tab does not affect the other.

If you just switch focus between tabs in the same tab, nothing resets — because you haven’t reloaded or closed the app.

Close & reopen? → State is lost, because nothing is stored in localStorage.

# 2️⃣ With persist
export const UseCounter = create<CounterState>()(
  persist(initialCounterStore, { name: 'counter-storage' })
);


Where state lives?

Still in memory for fast access

AND synced to localStorage under the key "counter-storage".

Page refresh?

Zustand reads localStorage → restores the last saved counter.

Switching tabs?

Since state is in localStorage, any tab can read the saved value when it initializes.

BUT if both tabs are open, they won’t auto-sync unless you add extra logic like storage event listeners.

Close & reopen? → State is restored from localStorage.