import type { Metadata } from "next";
import { Hachi_Maru_Pop } from "next/font/google";
import "./globals.css";
import classNames from "classnames";
import { mock } from "@/libs/mock";

const inter = Hachi_Maru_Pop({ subsets: ["latin"], weight: "400" });

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
              <p className="text-lg bg-white">Posters</p>
              <p className="text-xs text-gray-500 bg-white mt-2">
                Hi, my name is Arthur Galliot and
                <br />
                time to time,
                <br />I draw posters.
              </p>
            </div>
          </header>
          <nav
            className={classNames(
              "hidden md:block  border-2 border-white shadow-small rounded-xl p-2",
              "fixed bottom-8 w-[calc((100vw-6rem)/5)]"
            )}
          >
            <ul>
              {mock.map((poster) => (
                <li key={poster.path}>
                  <a
                    href={`#${poster.path}`}
                    className="transition-all hover:text-gray-500 bg-white text-sm"
                  >
                    {poster.name}
                    <span className="text-xs text-gray-500 bg-white ml-2">
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
            <p className="text-xs text-gray-500 bg-white">Need some?</p>
            <p className="text-xs">arthur.galliot@gmail.com</p>
          </div>
          <div className="relative md:absolute md:bottom-8 border-2 border-transparent p-2 text-xs text-gray-500 bg-white">
            @copyright arthur galliot 2016-2024
          </div>
        </aside>
        <div className="fixed h-[100vh] w-[calc(((100vw-6rem)/5)*3+3rem)] top-0 left-0 z-[-1] shadow-book"></div>
      </body>
    </html>
  );
}
