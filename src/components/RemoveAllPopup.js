import React from "react";

const RemoveAllPopup = ({ confirm, setConfirm, handleRemoveAll }) => {
  return (
    <>
      <div
        className={`fixed top-0 left-0 w-full inset-0 bg-gray-300/20 backdrop-blur h-full z-30 ${
          confirm
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        } transition-opacity duration-300 ease-in-out`}
        onClick={() => setConfirm(false)}
      />

      {confirm && (
        <div
          className={`fixed z-40 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${
            confirm
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          } w-72 h-48 rounded-lg bg-white p-4 transition-opacity duration-1000 ease-in-out`}
        >
          <p className="font-bold mb-2 text-center text-black p-y-4">
            Are you sure you want to remove all features?
          </p>
          <p className="text-center text-black text-xs py-2">
            You will lose the selected template and you will have to start from
            scratch selecting features one by one.
          </p>

          <div className="flex justify-between w-full p-2 gap-3">
            <div
              className="border-[1px] px-2 py-1 border-gray-400 rounded-md"
              onClick={() => setConfirm(false)}
            >
              <p className="cursor-pointer text-xs text-black">No, keep them</p>
            </div>
            <div
              className="px-2 py-1 bg-red-400 rounded-md"
              onClick={() => handleRemoveAll()}
            >
              <p className="cursor-pointer text-xs text-white">
                Yes, remove them
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default RemoveAllPopup;
