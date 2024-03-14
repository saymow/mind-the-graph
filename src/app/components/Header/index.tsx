"use client";
import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import Button from "../Button";
import Modal from "../Modal";
import "./styles.scss";

enum BackgroundKind {
  Transparent = "tranparent",
  Glass = "glass",
}

export default function Header() {
  const [backgroundKind, setBackgroundKind] = useState(
    typeof window !== "undefined" && window.scrollY > 0
      ? BackgroundKind.Glass
      : BackgroundKind.Transparent
  );
  const [isSandwichMenuOpen, setIsSandwichMenuOpen] = useState(false);

  const handleScrollEvent = useCallback((_: Event) => {
    if (window.scrollY === 0) setBackgroundKind(BackgroundKind.Transparent);
    else setBackgroundKind(BackgroundKind.Glass);
  }, []);

  const handleCloseSandwichMenu = () => {
    setIsSandwichMenuOpen(false);
  };

  const handleOpenSandwichMenu = () => {
    setIsSandwichMenuOpen(true);
  };

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
    <>
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
          <span
            onClick={handleOpenSandwichMenu}
            className={`sandwich-menu-button ${
              isSandwichMenuOpen ? "open" : ""
            }`}
          >
            <div></div>
            <div></div>
            <div></div>
          </span>
        </div>
      </header>
      <Modal isOpen={isSandwichMenuOpen} onClose={handleCloseSandwichMenu}>
        <nav>
          <ul className="header-sandwich-actions-list">
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
      </Modal>
    </>
  );
}
