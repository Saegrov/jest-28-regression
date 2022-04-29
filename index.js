import { v4 } from "uuid";
import { nanoid } from "nanoid";

export function getUuid() {
  return v4();
}

export function getNanoId() {
  return nanoid();
}
