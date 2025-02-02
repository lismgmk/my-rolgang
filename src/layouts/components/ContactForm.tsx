"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import DownloadFormModal from "./DownloadFormModal";
import axios from "axios";

const schema = yup.object().shape({
  name: yup.string().required("Имя обязательно для заполнения"),
  email: yup
    .string()
    .email("Введите корректный email")
    .required("Email обязателен для заполнения"),
  message: yup.string(),
  phone: yup.string().nullable(),
  file: yup
    .mixed()
    .nullable()
    .test("fileSize", "Файл слишком большой", (value) => {
      return !value || (value && value.size <= 5000000); // 5MB
    }),
});

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: { file: null }, // Добавляем file
  });

  const [fileName, setFileName] = useState("Файл не выбран");
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      const selectedFile = e.target.files[0];
      setValue("file", selectedFile, { shouldValidate: true }); // Принудительно валидируем
      setFile(selectedFile);
      setFileName(selectedFile.name);
    } else {
      setFile(null);
      setFileName("Файл не выбран");
    }
  };

  const onSubmit = async (data: any) => {
    console.log(data, "++++++"); // Проверь, есть ли `file`
    const formData = new FormData();

    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("message", data.message || "");
    if (data.phone) formData.append("phone", data.phone);
    if (data.file) formData.append("file", data.file);

    console.log([...formData]); // Выведи содержимое FormData

    try {
      const response = await axios.post(
        "http://localhost:4000/api/email/consultation",
        formData,
        { headers: { "Content-Type": "multipart/form-data" } },
      );
      console.log(response);
      if (response.status === 201) {
        reset({ file: null });
        setFileName("Файл не выбран"); // Сброс имени файла
        setFile(null);
        alert("Форма успешно отправлена!");
      } else {
        alert("Ошибка при отправке формы");
      }
    } catch (error) {
      alert("Ошибка при отправке формы");
    }
  };

  return (
    <section className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-semibold text-center mb-8">
        Отправить заявку
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <label className="block text-lg font-medium">Введите имя</label>
              <input
                {...register("name")}
                className="w-full px-4 py-2 border rounded-md"
              />
              {errors.name && (
                <p className="text-red-500">{errors.name.message}</p>
              )}
            </div>

            <div>
              <label className="block text-lg font-medium">Введите email</label>
              <input
                {...register("email")}
                type="email"
                className="w-full px-4 py-2 border rounded-md"
              />
              {errors.email && (
                <p className="text-red-500">{errors.email.message}</p>
              )}
            </div>

            <div>
              <label className="block text-lg font-medium">
                Введите телефон
              </label>
              <PhoneInput
                international
                defaultCountry="BY"
                onChange={(value) => setValue("phone", value)}
                className="w-full border px-4 py-2"
              />
            </div>

            <div>
              <label className="block text-lg font-medium">
                Введите сообщение
              </label>
              <textarea
                {...register("message")}
                className="w-full px-4 py-2 border rounded-md"
                rows={5}
              />
            </div>

            <button
              type="submit"
              className="btn btn-outline-primary xs:py-4 mt-4"
            >
              Отправить
            </button>
          </form>
        </div>

        <div className="flex flex-col space-y-4">
          <DownloadFormModal />

          <div className="flex flex-col gap-2">
            <div className="relative w-full">
              <input
                type="file"
                id="file"
                accept=".xlsx, .xls, .docx, .txt"
                {...register("file", { required: false })}
                ref={(e) => register("file").ref(e)}
                onChange={handleFileChange}
                className="hidden"
              />

              <label
                htmlFor="file"
                className="relative text-center w-full btn btn-outline-primary xs:py-4 mt-4 cursor-pointer"
              >
                Загрузить файл
              </label>
            </div>
            <p className="text-gray-600">{fileName}</p>
            {errors.file && (
              <p className="text-red-500">{errors.file.message}</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
