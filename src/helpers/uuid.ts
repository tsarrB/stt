import { customAlphabet } from 'nanoid';

const nanoid = customAlphabet('useandom2619834075pxbfghjklqvwyzrict', 10);

export const uuid = (length = 10) => nanoid(length);
