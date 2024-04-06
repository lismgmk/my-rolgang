import { Process } from "@/types";

const Tablist = ({
  list,
  onTabChange,
  tabIndex,
}: {
  list: Process["list"];
  onTabChange: (index: number) => void;
  tabIndex: number;
}) => {
  return (
    <div className="flex flex-wrap gap-4 xl:col-4 lg:gap-6">
      {list.map(({ description, title }, i) => {
        return (
          <div key={i} data-aos="fade-up-sm">
            <button
              className={`group ${i === tabIndex && "active"}`}
              onClick={() => onTabChange(i)}
            >
              <div className="h-full rounded-xl border border-border/50 bg-white px-4 py-4 text-left group-[.active]:border-white group-[.active]:shadow-md xl:px-8 xl:py-10">
                <h3 className="text-sm font-semibold xl:mb-6 xl:text-2xl">
                  {title}
                </h3>
                <p className="hidden xl:block">{description}</p>
              </div>
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Tablist;
