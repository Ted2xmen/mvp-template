import { toast } from "sonner";

type ToastType = "success" | "error" | "info";

const useToastMessages = () => {
  const showToastMessage = (
    type: ToastType,
    message: string,
    description?: string
  ) => {
    switch (type) {
      case "success":
        toast.success(message, { description });
        break;
      case "error":
        toast.error(message, { description });
        break;
      case "info":
        toast.info(message, { description });
        break;
      default:
        toast(message, { description });
        break;
    }
  };

  const showRegisterMessage = () => {
    toast("Please login or register", {
      action: {
        label: "Register",
        onClick: () => console.log("Undo"),
      },
      position: "top-center",
      // closeButton: true,
      icon: "🔒",
    });
  };

  const showInprogressMessage = () => {
    toast.warning("Site is under development", {
      action: {
        label: "Soon",
        onClick: () => console.log(""),
      },
      position: "top-center",
      closeButton: false,
      icon: "🚧",
    });
  };

  return { showToastMessage, showRegisterMessage, showInprogressMessage };
};

export default useToastMessages;
