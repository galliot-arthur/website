import type { Metadata } from "next";
import {
  Inter,
  //Hachi_Maru_Pop
} from "next/font/google";
import "./globals.css";
import classNames from "classnames";
import { mock } from "@/libs/mock";

const inter = Inter({ subsets: ["latin"], weight: ["200", "500"] });

export const metadata: Metadata = {
  title: "Posters",
  description: "Arthur Galliot's Posters",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={classNames(
          inter.className,
          "grid md:grid-cols-5 gap-4 p-4 sm:p-4"
        )}
      >
        <div>
          <header className="col-span-5 md:col-span-1">
            <div className=" border-2 border-white shadow-small rounded-xl p-2">
              <p className="text-3xl -ml-0.5">Posters</p>
              <p className="text-xs font-extralight">
                Hi, my name is Arthur Galliot and time to time,
                <br />I design posters.
              </p>
            </div>
          </header>
          <nav
            className={classNames(
              "hidden md:block border-2 border-white shadow-small rounded-xl p-2",
              "fixed bottom-8 w-[calc((100vw-6rem)/5)] max-h-[80vh] overflow-auto"
            )}
          >
            <ul>
              {mock.map((poster) => (
                <li key={poster.name}>
                  <a
                    href={`#${poster.name}`}
                    className="transition-all hover:text-white hover:bg-black bg-white text-sm"
                  >
                    {poster.name}
                    <span className="text-xs ml-1 font-extralight">
                      {poster.date}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        
        {children}
        <div className="col-span-5 md:col-span-1 "></div>
        <aside className="col-span-5 md:col-span-1">
          <div className="border-2 border-white shadow-small rounded-xl p-2">
            <p className="text-xs font-extralight bg-white">Need some?</p>
            <p className="text-xs">arthur.galliot@gmail.com</p>
          </div>
          <div className="relative md:absolute md:bottom-8 border-2 border-transparent p-2 text-xs font-extralight bg-white">
            @copyright arthur galliot 2016-2024
          </div>
        </aside>
      </body>
    </html>
  );
}
