"use client";

import { useState } from "react";
import { ShareNotification } from "./ShareNotification";
import { SendCheckFill, SendFill } from "react-bootstrap-icons";
import { share } from "../helpers/utils";
import classNames from "classnames";

export const ShareButton = ({ path }: { path: string }) => {
  const [shared, setShared] = useState(false);

  return (
    <div className="relative">
      <button
        className={classNames(
          "transition-all text-xs p-2 rounded-full shadow-small bg-white hover:bg-black hover:text-white active:text-black",
          shared == false && "fade-in"
        )}
        onClick={(e) => {
          e.preventDefault();
          setShared(true);
          share(path);
          setTimeout(() => setShared(false), 1000);
        }}
      >
        {shared ? <SendCheckFill /> : <SendFill />}
      </button>
      {shared && <ShareNotification />}
    </div>
  );
};
