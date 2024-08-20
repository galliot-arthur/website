import { mock } from "@/libs/mock";
import Carousel from "@/libs/ui/Carousel";
import { ShareButton } from "@/libs/ui/shareButton";

export default function Home() {
  return (
    <main className="col-span-5 md:col-span-2 flex min-h-screen flex-col items-start justify-between gap-4 md:gap-16 relative ">
      {mock.map((project) => (
        <div
          key={project.name}
          className="transition-all border-2 border-white p-2 rounded-xl boom"
          id={project.name}
        >
          <div className="relative rounded-lg overflow-hidden 2xl:w-[calc((100vw-6rem)/5-1rem-4px)]">
            <Carousel data={project} />
          </div>
          <div className="flex flex-row justify-between items-start pt-4">
            <div>
              <p>
                <span className="bg-white">{project.name}</span>
                <br />
                {project.subtitle && (
                  <span className="text-xs bg-white font-extralight">
                    {project.subtitle}
                  </span>
                )}
              </p>
            </div>
            <div>
              <p className="text-xs font-extralight bg-white">{project.date}</p>
              <div className="">
                <ShareButton path={project.name} />
              </div>
            </div>
          </div>
        </div>
      ))}
    </main>
  );
}
