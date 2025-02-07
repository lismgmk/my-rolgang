import { Process } from "@/types";
import Image from "next/image";
import Link from 'next/link';
const TablistReadySolution = ({
  list,
  onTabChange,
  tabIndex,
}: {
  list: Process["list"];
  onTabChange: (index: number) => void;
  tabIndex: number;
}) => {
  return (
    <div className="grid w-full gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {list.map(({ description, title, image, url }, i) => {
        return (
          <div key={i} data-aos="fade-up-sm">
            <div
              className={`w-full ${i === tabIndex && "active"} cursor-pointer`}
              onClick={() => onTabChange(i)}
            >
              <Link
                href={url}
              >
                <div className="h-full  rounded-xl border border-border/50 bg-white px-4 py-4 text-left group-[.active]:border-white group-[.active]:shadow-md xl:px-4 xl:py-5">
                  <h3 className="py-1 text-sm font-semibold xl:mb-3 ">
                    {title}
                  </h3>
                  <Image
                    width={840}
                    height={610}
                    src={image}
                    alt="feature image"
                    className="w-full rounded-xl"
                  />
                </div>
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TablistReadySolution;
