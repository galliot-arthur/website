"use client";

import { useState } from "react";
import { ShareNotification } from "./ShareNotification";
import { SendCheckFill, SendFill } from "react-bootstrap-icons";

const share = (path: string) => {
  navigator.clipboard.writeText(path);
};
export const ShareButton = ({ path }: { path: string }) => {
  const [shared, setShared] = useState(false);

  return (
    <>
      <button
        className="transition-all text-xs p-2 rounded-full shadow-small border-2 border-white active:bg-gray-500 active:text-gray-500"
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
    </>
  );
};
