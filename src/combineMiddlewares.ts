import { NextMiddleware, NextResponse } from 'next/server';
import { MiddlewareFactory } from './types/MiddlewareFactory.type';

export const combineMiddlewares = (
  callbacks: MiddlewareFactory[] = [],
  index: number = 0
): NextMiddleware => {
  const current = callbacks[index];
  if (current) {
    const next = combineMiddlewares(callbacks, index + 1);

    return current(next);
  }

  return () => NextResponse.next();
};
