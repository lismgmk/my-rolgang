"use client";
import { useState } from "react";

const DownloadFormModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDownloadForm = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="relative contents">
      <button
        onClick={handleDownloadForm}
        className="btn  btn-outline-primary xs:py-4 mt-4"
      >
        Скачать форму
      </button>

      {isModalOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
          onClick={closeModal}
        >
          <div
            className="relative bg-white rounded-xl shadow-xl p-8 w-[90%] max-w-3xl"
            onClick={(e) => e.stopPropagation()} // Остановить событие для внутреннего контента
          >
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <h2 className="text-2xl font-bold mb-6 text-center">
              СКАЧАТЬ ОПРОСНЫЙ ЛИСТ
            </h2>
            <p className="text-base mb-6 text-center">
              Скачайте опросный лист для расчёта КП
            </p>
            <div className="flex justify-center gap-8">
              <a
                href="/doc/template.xlsx"
                download
                className="flex flex-col items-center text-green-600 hover:text-green-800"
              >
                <div className="text-5xl">📄</div>
                <span>XLS</span>
              </a>
              <a
                href="/doc/template.docx"
                download
                className="flex flex-col items-center text-blue-600 hover:text-blue-800"
              >
                <div className="text-5xl">📄</div>
                <span>DOC</span>
              </a>
            </div>
            <p className="text-sm mt-6 text-center">
              и отправьте файл на email:{" "}
              <a
                href="mailto:trayana@zavod-conveyer.ru"
                className="underline"
              >
                ing@av-al.by
              </a>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default DownloadFormModal;
