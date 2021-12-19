import React, { useState, useEffect, useCallback } from "react";
import GitHubButton from "react-github-btn";
import "./Header.css";
import Toggle from "./Toggle";
import { keepTheme } from "../utils/theme";

function Header() {
  const theme = localStorage.getItem("theme");
  const [togClass, setTogClass] = useState("dark");

  const callback = useCallback(
    (theme) => {
      setTogClass(theme);
    },
    [setTogClass]
  );

  useEffect(() => {
    keepTheme();
    const storedTheme = localStorage.getItem("theme");
    setTogClass(storedTheme);
  }, [togClass]);

  return (
    <div className="header">
      <h1>Emoji Search<span role="img" aria-label="Happy Face Emoji">😀</span></h1>
      <p>Find Emojis</p>
      <p className="github">
        <GitHubButton
          href="https://github.com/Rahul-Roy-Hub/React-Emoji-Search"
          data-color-scheme={`no-preference: ${theme}; light: ${theme}; dark: ${theme};`}
          data-icon="octicon-star"
          data-size="large"
          data-show-count="true"
          aria-label="Star Rahul-Roy-Hub/React-Emoji-Search on GitHub"
        >
          Star
        </GitHubButton>
        &nbsp;&nbsp;
        <GitHubButton
          href="https://github.com/Rahul-Roy-Hub/React-Emoji-Search/fork"
          data-color-scheme={`no-preference: ${theme}; light: ${theme}; dark: ${theme};`}
          data-icon="octicon-repo-forked"
          data-size="large"
          data-show-count="true"
          aria-label="Fork Rahul-Roy-Hub/React-Emoji-Search on GitHub"
        >
          Fork
        </GitHubButton>
      </p>

      <div className="container">
        <Toggle parentCallback={callback} />
        <p className="theme-info">Switch to your preferred theme.</p>
      </div>
    </div>
  );
}

export default Header;