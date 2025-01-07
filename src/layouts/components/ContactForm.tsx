"use client";

import { useState } from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState<string | undefined>(""); // Тип состояния изменен
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Логика отправки формы
    console.log("Form submitted:", { name, phone, message });
  };

  const handleDownloadForm = () => {
    // Логика для скачивания формы
    console.log("Form downloaded");
  };

  return (
    <section className="container mx-auto px-4 py-16">
      <div id="contact_form" className="absolute -top-20"></div>
      <h1 className="text-3xl font-semibold text-center mb-8">Контакты</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Первая колонка */}
        <div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-lg font-medium">
                Введите имя
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-2 border rounded-md"
                required
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-lg font-medium">
                Введите телефон
              </label>
              <PhoneInput
                international
                defaultCountry="BY"
                value={phone}
                onChange={(value) => setPhone(value)} // Приводим значение к нужному типу
                countries={["RU", "BY", "KZ"]} // Ограничиваем выбор странами
                className="w-full px-4 py-2 border rounded-md"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-lg font-medium">
                Введите сообщение
              </label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-4 py-2 border rounded-md"
                rows={5}
                required
              />
            </div>
            <div className="flex space-x-4">
              <button
                type="submit"
                className={`btn  btn-outline-primary xs:py-4 mt-4`}
              >
                Отправить
              </button>
            </div>
          </form>
        </div>

        <div className="flex flex-col space-y-4">
          <button
            onClick={handleDownloadForm}
            className={`btn  btn-outline-primary xs:py-4 mt-4`}
          >
            Скачать форму
          </button>
          <button
            onClick={handleDownloadForm}
            className={`btn  btn-outline-primary xs:py-4 mt-4`}
          >
            Загрузить форму
          </button>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
