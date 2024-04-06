const Line = ({
  className = "line-bg fixed left-0 top-1/2 z-10 flex h-screen w-full -translate-y-1/2 justify-between",
  color = "",
}: {
  className?: string;
  color?: string;
}) => {
  return (
    <div className={className}>
      <div className="container flex justify-between">
        <span
          className={`${color} inline-block h-full opacity-50 md:opacity-100`}
        ></span>
        <span
          className={`${color} inline-block h-full opacity-50 md:opacity-100`}
        ></span>
        <span
          className={`${color} inline-block h-full opacity-50 md:opacity-100`}
        ></span>
        <span
          className={`${color} inline-block h-full opacity-50 md:opacity-100`}
        ></span>
        <span
          className={`${color} inline-block h-full opacity-50 md:opacity-100`}
        ></span>
        <span
          className={`${color} inline-block h-full opacity-50 md:opacity-100`}
        ></span>
      </div>
    </div>
  );
};

export default Line;
