import { assoc } from "./assoc";

export const generateKey = () => Math.random().toString(36).substring(2, 15);

export const assignId = assoc('id', generateKey());

export const generateId = (obj) => assoc('id', generateKey())(obj);