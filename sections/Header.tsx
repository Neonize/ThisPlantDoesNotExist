import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const renderThemeChanger = () => {
    if (!mounted) return null;

    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "dark") {
      return (
        <SunIcon
          className="w-10 h-10 text-yellow-500 "
          role="button"
          onClick={() => setTheme("light")}
        />
      );
    } else {
      return (
        <MoonIcon
          className="w-10 h-10"
          role="button"
          onClick={() => setTheme("dark")}
        />
      );
    }
  };

  return (
    <header>
      <div className="container px-4 sm:px-6 py-4 flex flex-row justify-between items-center">
        <Link href="/">
          <Image
            className="rounded-full"
            src="/Tree.png"
            alt=""
            height={50}
            width={50}
          />
        </Link>
        <Link href="/">
          <h1 className="text-3xl tracking-tight font-extrabold max-w-xl leading-tight sm:text-4xl md:text-5xl capitalize">
            This 🌿 does not exist
          </h1>
        </Link>
        {renderThemeChanger()}
      </div>
    </header>
  );
}
