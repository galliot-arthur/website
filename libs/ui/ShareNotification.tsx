import classNames from "classnames";

export const ShareNotification = () => {
  return (
    <div className={classNames("text-xs", "absolute z-30", `top-0 left-10`)}>
      copied!
    </div>
  );
};
