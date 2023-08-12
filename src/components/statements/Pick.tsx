import { PickInterface } from "@/utils/types";

export function Pick({ state, children }: PickInterface) {
  let result = false;
  let or = children.at(-1)?.props;

  children.map(({ props }) =>
    props.condition === state ? (result = props.children) : null
  );

  return result || (!or.condition ? or.children : null);
}
