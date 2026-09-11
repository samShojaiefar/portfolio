"use client";
import { useState, useCallback } from "react";

export function useMenu() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = useCallback(() => setMenuOpen(false), []);
  return { menuOpen, setMenuOpen, closeMenu };
}