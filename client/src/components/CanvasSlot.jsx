import React from "react";
import { useDroppable } from "@dnd-kit/core";

const CanvasSlot = ({ icon, title, selectedItem ,onRemove}) => {
  const { setNodeRef, isOver } = useDroppable({
    id: title.toLowerCase(),
  });

  return (
    <div
      ref={setNodeRef}
      className={`relative h-40 rounded-3xl border-2 border-dashed flex flex-col items-center justify-center
      ${
        isOver
          ? "bg-green-100 border-green-400"
          : "bg-[#FCFAF7] border-[#DDD5C7]"
      }`}
    >
      {selectedItem? (
        <>
          <button
            onClick={onRemove}
            className="absolute top-3 right-3 h-8 w-8 rounded-full bg-white shadow hover:bg-red-50"
          >
            ✕
        </button>
          <img
            src={selectedItem.imageUrl}
            alt={selectedItem.name}
            className="h-26 object-contain"
          />
          <p className="mt-2 font-medium">{selectedItem.name}</p>
        </>
      ) : (
        <>
          <span className="text-3xl mb-2">{icon}</span>
          <p className="font-medium text-[#2E2621]">{title}</p>
          <p className="text-sm text-[#8A8072]">Drag item here</p>
        </>
      )}
    </div>
  );
};

export default CanvasSlot;