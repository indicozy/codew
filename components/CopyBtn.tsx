// remove tailwind css classes if you don't want to use them.

import { IconCopy } from "@tabler/icons";
import { useTranslation } from "next-export-i18n";
import React, { useState } from "react";

export default function CopyBtn({ textToCopy = "Copy default" }) {
  const { t } = useTranslation();

  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(textToCopy).then(
      () => {
        setCopied(true);

        // changing back to default state after 2 seconds.

        setTimeout(() => {
          setCopied(false);
        }, 2000);
      },

      (err) => {
        console.log("failed to copy", err.mesage);
      }
    );
  };

  return (
    <button
      onClick={copyToClipboard}
      className={`border border-zinc-400 bg-transparent flex text-lg items-center backdrop-blur-lg py-2 px-4 rounded-xl bg-zinc-600 bg-opacity-30 hover:bg-opacity-50`}
    >
      <IconCopy stroke={1.2} />

      {copied ? "Copied" : t("success.copy")}
    </button>
  );
}
