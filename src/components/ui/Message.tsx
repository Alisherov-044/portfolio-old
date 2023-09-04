import { ReactNode } from "react";
import { MessageInterface } from "@/utils/types";
import { ErrorIcon, SuccessIcon, WarningIcon } from "@/assets/icons";

export function Message({ message, variant, isActive }: MessageInterface) {
  let icon: ReactNode | undefined = undefined;

  switch (variant) {
    case "success":
      icon = <SuccessIcon />;
      message = message || "Everything done successfully!";
      break;
    case "warning":
      icon = <WarningIcon />;
      message = message || "Please check it one more time!!";
      break;
    case "error":
      icon = <ErrorIcon />;
      message = message || "Something went wrong!!!";
      break;
    default:
      icon = <SuccessIcon />;
      message = message || "Everything done successfully!";
      break;
  }

  return (
    <div className={`message ${variant} ${isActive ? "active" : ""}`}>
      <div className="message__icon">{icon}</div>
      <p className="message__text">{message}</p>
    </div>
  );
}
