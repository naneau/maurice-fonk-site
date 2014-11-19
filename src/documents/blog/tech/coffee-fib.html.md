---
title: "Simple CoffeeScript Fibonacci With A Maximum Value"
layout: "blog"
isPage: true
---

# Simple CoffeeScript Fibonacci With A Maximum Value

While it isn't anywhere close to a true, functional language, sometimes I'm
happy with how terse I can get a function to be by using some of CoffeeScript's
niceties.

```coffeescript
# Simple recursive fib sequence with max value
fib = (seq, maxValue) ->

  # Next item in sequence
  next = if seq.length < 2 then 1 else seq.slice(-2, -1)[0] + seq.slice(-1)[0]

  # Check for max and recurse if possible
  if next < maxValue then fib seq.concat([next]), maxValue else seq
```

Only two lines, not bad. In Haskell you can famously write it as a sequence, of
course.

```haskell
fibSequence :: [Integer]
fibSequence = 1 : 1 : zipWith (+) fibSequence (tail fibSequence)
```
