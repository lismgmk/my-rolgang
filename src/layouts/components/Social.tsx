import DynamicIcon from "@/helpers/DynamicIcon";
import { Socials } from "@/types";

const Social = ({
  source,
  className,
}: {
  source: Socials[];
  className: string;
}) => {
  return (
    <ul className={className}>
      {source?.map(({ icon, link }, i) => {
        return (
          <li key={i}>
            <a
              className="inline-block"
              aria-label={icon}
              href={link}
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              <DynamicIcon className="inline-block" icon={icon} />
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default Social;
