import { mock } from "@/libs/mock";
import { ShareButton } from "@/libs/ui/shareButton";

const getHref = (path: string) => `/pictures/${path}`;

export default function Home() {
  return (
    <main className="col-span-5 md:col-span-2 flex min-h-screen flex-col items-start justify-between gap-4 md:gap-16">
      {mock.map((project) => (
        <a
          key={project.path}
          className="transition-all border-2 border-white md:hover:border-l-black p-2 rounded-xl shadow-mine hover:text-gray-500 relative"
          href={getHref(project.path)}
          target="_black"
          id={project.path}
        >
          <div className="relative rounded-lg overflow-hidden 2xl:w-[calc((100vw-6rem)/5-1rem-4px)]">
            <img
              src={getHref(project.path)}
              alt={project.name}
              className="object-contain"
            />
          </div>
          <div className="flex flex-row justify-between items-start pt-4">
            <div>
              <p>
                <span className="bg-white">{project.name}</span>
                <br />
                <span className="text-xs text-gray-500 bg-white">
                  {project.name}
                </span>
              </p>
            </div>
            <div>
              <p className="text-xs text-gray-500 bg-white">{project.date}</p>
              <div className="">
                <ShareButton path={project.path} />
              </div>
            </div>
          </div>
        </a>
      ))}
    </main>
  );
}
