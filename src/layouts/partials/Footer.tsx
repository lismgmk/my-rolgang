"use client";

import config from "@/config/config.json";
import menu from "@/config/menu.json";

const Footer = ({
  children,
  hasCallToAction,
}: {
  children?: React.ReactNode;
  hasCallToAction: boolean;
}) => {
  const { copyright } = config.params;
  const { email, phone, address } = config.contact;
  const { company, resources } = menu.footer;

  return (
    <footer className="bg-gray-200 py-8 md:py-12">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start space-y-4 md:space-y-0">
        <div className="container mx-auto max-w-screen-xl px-4 md:px-8 flex flex-col md:flex-row justify-between items-start space-y-6 md:space-y-0">
          <div className="w-full md:w-[45%] lg:w-[30%]">
            <h4 className="text-lg font-bold mb-2">Контакты</h4>
            <ul className="text-lg font-medium space-y-3">
              <li>
                <span>Телефон: </span>
                <span className="font-extrabold">{phone}</span>
              </li>
              <li>
                <span>Email: </span>
                <span className="font-extrabold">{email}</span>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-[45%] lg:w-[35%]">
            <h4 className="text-lg font-bold mb-2">{company.name}</h4>
            {company.children.length > 0 && (
              <ul className="text-lg font-medium">
                {company.children.map((child, i) => (
                  <li key={i}>{child.name}</li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
