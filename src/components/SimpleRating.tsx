import React from "react";

interface SimpleRatingProps {
  label: string;
  rating: number; // від 0 до 5
  symbol?: string; // символ для відображення (зірка, $, ❤️ тощо)
}

export const SimpleRating: React.FC<SimpleRatingProps> = ({
  label,
  rating,
  symbol = "*",
}) => {
  const icons = [];

  for (let i = 1; i <= 5; i++) {
    icons.push(
      <span
        key={i}
        style={{
          color: rating >= i ? "gold" : "#555",
          fontWeight: rating >= i ? "bold" : "normal",
        }}
      >
        {symbol}
      </span>
    );
  }

  return (
    <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
      <span style={{ display: "flex", gap: "0.1rem" }}>{icons}</span>
      <span>{label}</span>
    </div>
  );
};
