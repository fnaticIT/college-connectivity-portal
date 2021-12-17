import React from "react";
import { ThemeConsumer } from "styled-components";
import { FaSun } from "react-icons/fa";
import { FaMoon } from "react-icons/fa";

export default function ToggleMode() {
  return (
    <ThemeConsumer>
      {(theme) =>
        theme.mode === "dark" ? (
          <FaSun variant="primary" size={30} onClick={(e) => theme.setTheme(theme.mode === "dark" ? { ...theme, mode: "light" } : { ...theme, mode: "dark" })}>
            {theme.mode === "dark" ? "light" : "dark"} Mode
          </FaSun>
        ) : (
          <FaMoon variant="primary" size={30} onClick={(e) => theme.setTheme(theme.mode === "dark" ? { ...theme, mode: "light" } : { ...theme, mode: "dark" })}>
            {theme.mode === "dark" ? "light" : "dark"} Mode
          </FaMoon>
        )
      }
    </ThemeConsumer>
  );
}
{
  /* <button variant="primary" onClick={(e) => theme.setTheme(theme.mode === "dark" ? { ...theme, mode: "light" } : { ...theme, mode: "dark" }) } className="li">
          {theme.mode === "dark" ? "light" : "dark"} Mode
        </button> */
}
