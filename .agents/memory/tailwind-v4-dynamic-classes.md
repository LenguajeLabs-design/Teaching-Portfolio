---
name: Tailwind v4 dynamic class names
description: Why runtime-constructed Tailwind classes silently fail to apply, and the pattern used to work around it.
---

Tailwind v4's JIT scanner only detects utility classes that appear as literal strings in source files. Any class name built at runtime — e.g. `someVar.replace("bg-", "border-t-")`, template-concatenated color names, or `` `bg-${color}-500` `` — will not be generated in the output CSS, so the element silently gets no styling (easy to miss since there's no error).

**Why:** Tailwind v4 has no config-based `content` globbing step the way v3 sometimes allowed dynamic safelisting; it statically scans for class-like tokens. Non-literal strings are invisible to it.

**How to apply:** When a component needs one of several color variants (e.g. a palette rotation for cards), define every variant's full class strings as static literals up front (e.g. in a palette/theme data file with fields like `bg`, `border`, `icon`, `barBorder`, `barBorderLeft`), then pick between them with array/object indexing — never derive one class string from another via string methods at runtime.
