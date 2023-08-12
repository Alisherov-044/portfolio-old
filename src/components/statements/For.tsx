import { createElement } from "react";
import { ForInterface } from "@/utils/types";

export function For({
  outOf,
  outIn,
  children: { type, props, key },
  propScheme,
}: ForInterface) {
  if (outOf) {
    return outOf.map((each, index) =>
      createElement(
        type,
        propScheme
          ? { ...props, [propScheme]: each, key: key || index }
          : { ...props, children: each, key: key || index }
      )
    );
  } else if (outIn) {
    return outIn.map((each, index) =>
      createElement(
        type,
        propScheme
          ? { ...props, [propScheme]: each, key: key || index }
          : { ...props, ...each, key: key || index }
      )
    );
  }
}
