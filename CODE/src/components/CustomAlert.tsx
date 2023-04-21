import { CustomAlertParams } from "@/types";

const CustomAlert = ({
  type,
  open,
  fill,
  message,
  close,
}: CustomAlertParams) => {
  return (
    <div
      className={
        "absolute top-0 z-30 w-full flex transition-transform duration-700 justify-center " +
        (open ? " translate-y-0 " : " -translate-y-full ") +
        (fill
          ? " h-screen bg-gray-500 bg-opacity-40 backdrop-blur-md "
          : " h-fit ")
      }
    >
      <div
        className={
          "w-1/3 self-center rounded-md border-2 " +
          (type === "success"
            ? "bg-green-600 border-green-700"
            : type === "warning"
            ? "bg-yellow-600 border-yellow-700"
            : "bg-red-600 border-red-700")
        }
      >
        <div className="p-4 border-b-2">
          <p className="font-bold text-white">
            {type === "success"
              ? "Erfolg"
              : type === "warning"
              ? "Warnung"
              : "Fehler"}
          </p>
        </div>
        <p className="p-4 text-white">{message}</p>

        <div className="py-2 px-4 border-t-2 flex justify-end">
          <button
            className="px-4 py-2 border-2 rounded-md text-white font-bold hover:bg-gray-500"
            onClick={() => close()}
          >
            OK
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomAlert;