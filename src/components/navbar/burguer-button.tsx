"use client";
import React from "react";
import { useSidebarContext } from "../layout/layout-context";
import { StyledBurgerButton } from "./navbar.styles";

export const BurguerButton = () => {
  const { setCollapsed } = useSidebarContext();

  return (
    <StyledBurgerButton onClick={setCollapsed}>
      <div />
      <div />
    </StyledBurgerButton>
  );
};