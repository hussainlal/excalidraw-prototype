import React from "react";
import clsx from "clsx";
import { ToolButton } from "./ToolButton";
import { t } from "../i18n";
import { file } from "./icons";

import "./CollabButton.scss";

const PointerButton = ({
  isPointing,
  onClick,
}: {
  isPointing: boolean;
  onClick: () => void;
}) => {
  return (
    <>
      <ToolButton
        className={clsx("CollabButton", {
          "is-collaborating": isPointing,
        })}
        onClick={onClick}
        icon={file}
        type="button"
        title={t("labels.liveCollaboration")}
        aria-label={t("labels.liveCollaboration")}
        // eslint-disable-next-line
      >
      </ToolButton>
    </>
  );
};

export default PointerButton;
