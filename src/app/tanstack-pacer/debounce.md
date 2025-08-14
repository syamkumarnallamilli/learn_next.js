Debounce:
            "Delaying a function until the user has stopped performing an action for a certain amount of time."

📍Real-world use case: Search bara
Imagine you're typing in a search box:

Without debounce: every keystroke hits the API (bad!)

With debounce: waits for 500ms after you stop typing → then sends API call 

 # When Do We Use Debounce?
You use debounce when:

User actions are too frequent, and you want to reduce how often your code runs.

You want to delay function execution until a user finishes typing, scrolling, resizing, etc.

 
==>Search box: don’t send API call for every keystroke, only after typing stops.

==>Resize event: don’t run logic on every pixel change.

==>Autosave form data: save only after user stops editing.

==>Scroll tracking: limit heavy work like analytics or DOM calculations.


# Syntax of Debounce (@tanstack/pacer)

import { debounce } from '@tanstack/pacer';

const debouncedFn = debounce((value) => {
  // Your logic here
}, { wait: 500 });

# Explanation


| Part                 | Meaning                                                                         |
| -------------------- | ------------------------------------------------------------------------------- |
| `debounce`           | Function from TanStack Pacer that returns a debounced version of your function. |
| `(value) => { ... }` | The **actual function** to run **after wait time**                              |
| `{ wait: 500 }`      | Time to wait before executing the function (in ms)                              |
| `debouncedFn()`      | You call this normally, and it handles the delay for you                        |


'use client';
import React, { useState } from 'react';
import { debounce } from '@tanstack/pacer';

export default function DebounceExample() {
  const [message, setMessage] = useState('');

  const debounceUpdate = debounce((val: string) => {
    setMessage(val ? `You typed: ${val}` : 'Nothing yet');
  }, { wait: 500 });

  return (
    <div className="p-4">
      <h2 className="text-lg font-bold">Debounce Example</h2>
      <input
        className="border p-2 mt-2"
        placeholder="Type something..."
        onChange={(e) => debounceUpdate(e.target.value)}
      />
      <p className="mt-4 text-blue-500">{message}</p>
    </div>
  );
}


# What’s Happening
You type in the input.

debounceUpdate() is called.

It waits 500ms. If you type again within that time, it resets.

Only when you stop typing for 500ms, setMessage() runs.


✅ Is Debounce Efficient?
Yes! ✅

Without debounce:

10 keystrokes = 10 API calls.

With debounce (wait 500ms):

10 keystrokes quickly = 1 API call.

It saves bandwidth, improves performance, and reduces flickering UI.




Debouncing (wait: 3 ticks = 3 seconds)
Timeline:        [1 second per tick]
Calls:        ⬇️  ⬇️  ⬇️  ⬇️  ⬇️     ⬇️  ⬇️  ⬇️  ⬇️               ⬇️  ⬇️
Executed:     ❌  ❌  ❌  ❌  ❌     ❌  ❌  ❌  ⏳   ->   ✅     ❌  ⏳   ->    ✅
             [=================================================================]

📍 What’s happening here?
You’re calling the debounced function multiple times very quickly (each ⬇️)

But the function is NOT EXECUTED immediately (❌)

Only after you stop calling it for 3 ticks (or 3 seconds), it finally executes ✅

In Simple Words:
Imagine the debounce timer resets every time you type.

Only when you pause typing, the function is allowed to run.