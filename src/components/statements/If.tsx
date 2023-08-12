import { IfInterface } from "@/utils/types";

export function If({ condition, children }: IfInterface) {
  return condition ? children : null;
}
