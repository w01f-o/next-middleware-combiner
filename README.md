# Next Middleware Combiner

A lightweight library for combining middlewares in Next.js applications. This library allows you to easily compose multiple middlewares into one, making middleware handling in your Next.js project more efficient and manageable.

## Features

- Combine multiple Next.js middlewares into a single middleware.
- Lightweight and minimalistic design.
- Fully written in TypeScript with type definitions included.
- Supports both ESM and CommonJS formats.

## Installation

```bash
# Using yarn
> yarn add @w01f-o/next-middleware-combiner
# Using npm
> npm install @w01f-o/next-middleware-combiner
```

## Usage

### Combining Middlewares

To combine multiple middlewares, simply import the `combineMiddlewares` function and provide an array of your middlewares.

Example:

```typescript
import { combineMiddlewares } from '@w01f-o/next-middleware-combiner';
import type { MiddlewareFactory } from '@w01f-o/next-middleware-combiner';

// Middleware 1
const middleware1: MiddlewareFactory = (next) => {
  return (req, res) => {
    console.log('Middleware 1');
    
    return next(req, res);
  };
};

// Middleware 2
const middleware2: MiddlewareFactory = (next) => {
  return (req, res) => {
    console.log('Middleware 2');
    
    return next(req, res);
  };
};

// Combine middlewares
export default combineMiddlewares([middleware1, middleware2]);

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|.*\\.svg|.*\\.gif).*)',
  ],
};
