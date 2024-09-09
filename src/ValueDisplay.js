import React, { useRef, useEffect } from "react";

// Функциональный компонент, который принимает пропс value
function ValueDisplay({ value }) {
  // Создаем реф для хранения предыдущего значения
  const prevValue = useRef(""); // Изначально реф пустой

  // Обновляем реф каждый раз, когда пропс value изменяется
  useEffect(() => {
    prevValue.current = value; // Сохраняем текущее значение в рефе
  }, [value]); // Срабатывает каждый раз, когда меняется value

  return (
    <div>
      <p>Текущее значение: {value}</p>
      <p>Предыдущее значение: {prevValue.current}</p>{" "}
      {/* Отображаем предыдущее значение */}
    </div>
  );
}

// Экспортируем компонент, чтобы использовать его в App.js
export default ValueDisplay;
