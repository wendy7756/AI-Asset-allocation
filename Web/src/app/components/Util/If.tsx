import React, { ReactNode, SFC, ReactElement } from "react";

interface Props {
  condition: boolean;
  children?: ReactNode;
  else?: ReactNode;
}

export default function If(props: Props): any {
  if (props.condition) {
    return props.children;
  } else {
    return props.else;
  }
}

(If as SFC).defaultProps = {
  else: null,
};
