import { getNoun } from '../index';
import { describe, it, expect } from 'vitest';

describe('Main test', () => {
  it('Wrong params', () => {
    // @ts-ignore
    expect(getNoun(1)).toBeFalsy();
    // @ts-ignore
    expect(getNoun(['минута', 'минуты', 'минут'], '2')).toBeFalsy();
    // @ts-ignore
    expect(getNoun(['минута', 'минуты', 'минут'])).toBeFalsy();
    expect(getNoun(['минута', 'минуты'], 2)).toBeFalsy();
  });

  it('Return correct noun', () => {
    expect(getNoun(['минута', 'минуты', 'минут'], 1)).toBe('минута');
    expect(getNoun(['минута', 'минуты', 'минут'], 2)).toBe('минуты');
    expect(getNoun(['минута', 'минуты', 'минут'], 5)).toBe('минут');
  });
});
