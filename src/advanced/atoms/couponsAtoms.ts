import { atom } from 'jotai';

import { Coupon } from '../../types';
import { initialCoupons } from '../constants';

export const couponsAtom = atom<Coupon[]>(initialCoupons);

export const selectedCouponAtom = atom<Coupon | null>(null);
