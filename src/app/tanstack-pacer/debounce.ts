//npx ts-node debounceTest.ts
// debounceTest.ts
import { debounce } from '@tanstack/pacer';

const debouncedFn = debounce((value: string) => {
  console.log("Typed:", value);
}, { wait: 500 });

debouncedFn("Hello");
debouncedFn("Hello, w");
debouncedFn("Hello, wo");
debouncedFn("Hello, wor");
debouncedFn("Hello, worl");
debouncedFn("Hello, world");

// Only "Hello, world" will be printed after 500ms

setTimeout(() => {}, 1000); // Keep the process alive to see output

