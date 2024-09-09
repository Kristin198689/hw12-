// Импортируем необходимые библиотеки из React и наш новый компонент ValueDisplay
import React, { useState } from "react";
import "./App.css"; // Импортируем стили, которые добавим позже
import ValueDisplay from "./ValueDisplay"; // Импортируем компонент, который мы создадим

// Основной компонент нашего приложения
function App() {
  // Создаем состояние для хранения значения, вводимого в текстовое поле
  const [value, setValue] = useState(""); // Изначально значение пустое

  return (
    <div className="App">
      <h1>Текущее и предыдущее значение</h1>
      {/* Текстовое поле, которое обновляет состояние при изменении значения */}
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)} // Обновляем состояние при вводе текста
        placeholder="Введите текст"
      />
      {/* Передаем текущее значение как пропс в компонент ValueDisplay */}
      <ValueDisplay value={value} />
    </div>
  );
}

// Экспортируем компонент App, чтобы его можно было использовать в других файлах
export default App;
