import classNames from "classnames";
import { getSource } from "../helpers/utils";
import { MockedData } from "../mock";

export default function Carousel({ data }: { data: MockedData }) {
  if (Array.isArray(data.path)) {
    return (
      <div className={classNames("w-full bg-white w-full")}>
        <div className={classNames("slides scroll-smooth relative w-full")}>
          {data.path.map((path) => (
            <img
              key={path}
              id={path}
              src={getSource(path)}
              alt={data.name}
              className={classNames(
                "object-contain",
                data.ratio && "aspect-[4/5]"
              )}
            />
          ))}
        </div>
        <div className="flex flex-row justify-center mt-1 pt-1">
          {data.path.map((path, index) => (
            <a
              href={`#${path}`}
              key={path}
              className="transition-all rounded-full text-xs font-extralight bg-white w-[1.5rem] h-[1.5rem] flex items-center justify-center border-1 border-white hover:bg-black hover:text-white active:text-black"
            >
              <div className="m-auto">{index + 1}</div>
            </a>
          ))}
        </div>
      </div>
    );
  }

  return (
    <img
      src={getSource(data.path)}
      alt={data.name}
      className="object-contain"
    />
  );
}
