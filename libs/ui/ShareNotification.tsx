import classNames from "classnames";

export const ShareNotification = () => {
  return (
    <div
      className={classNames(
        "text-xs font-extralight",
        "absolute z-30 px-1.5 py-[0.3rem]",
        `bottom-0 left-11`
      )}
    >
      copied!
    </div>
  );
};
