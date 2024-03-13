"use client";
import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import Button from "../Button";
import "./styles.scss";

enum BackgroundKind {
  Transparent = "tranparent",
  Glass = "glass",
}

export default function Header() {
  const [backgroundKind, setBackgroundKind] = useState<BackgroundKind>(
    BackgroundKind.Transparent
  );

  const handleScrollEvent = useCallback((_: Event) => {
    if (window.scrollY === 0) setBackgroundKind(BackgroundKind.Transparent);
    else setBackgroundKind(BackgroundKind.Glass);
  }, []);

  useEffect(() => {
    if (window.scrollY === 0) setBackgroundKind(BackgroundKind.Transparent);
    else setBackgroundKind(BackgroundKind.Glass);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScrollEvent);

    return () => {
      window.removeEventListener("scroll", handleScrollEvent);
    };
  }, [handleScrollEvent]);

  return (
    <header className="header-container" data-background={backgroundKind}>
      <div>
        <Image
          src="/logo_mindthegraph.svg"
          alt="Mind the graph logo"
          height={45}
          width={135}
        />
        <nav>
          <ul className="header-actions-list">
            <li>
              <a href="#Templates">Templates</a>
            </li>
            <li>
              <a href="#Pricing">Pricing</a>
            </li>
            <li>
              <a href="#Blog">Blog</a>
            </li>
            <li>
              <a href="#Jobs">Jobs</a>
            </li>
            <li>
              <Button variant="secondary">Login</Button>
            </li>
            <li>
              <Button>Sign up free</Button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
