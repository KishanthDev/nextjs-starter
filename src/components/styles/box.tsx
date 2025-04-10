import React from "react";

type BoxProps<C extends React.ElementType> = {
  as?: C;
} & React.ComponentPropsWithoutRef<C>;

export const Box = <C extends React.ElementType = "div">({
  as,
  className,
  ...props
}: BoxProps<C>) => {
  const Component = as || "div";
  return <Component className={`box-border ${className ?? ""}`} {...props} />;
};
