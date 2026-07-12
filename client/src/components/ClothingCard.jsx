import React from "react";
import { useDraggable } from "@dnd-kit/core";

const ClothingCard = ({ item }) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: item._id,
    data: {
      item,
    },
  });

  const style = {
    transform: transform
      ? `translate3d(${transform.x}px, ${transform.y}px, 0)`
      : undefined,
    zIndex: transform ? 999 : "auto",
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      className="bg-white rounded-2xl shadow-sm cursor-grab active:cursor-grabbing"
    >
      <img
        src={item.imageUrl}
        alt={item.name}
        draggable={false}
        className="w-full h-80 object-contain p-4"
      />

      <h3 className="mt-4 text-base font-medium text-[#2E2621]">
        {item.name}
      </h3>

      <p className="text-sm text-[#8A8072]">
        {item.color}
      </p>
    </div>
  );
};

export default ClothingCard;