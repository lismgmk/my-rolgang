import CallToAction from "@/partials/CallToAction";
import Footer from "@/partials/Footer";
import Header from "@/partials/Header";
import { Call_to_action } from "@/types";

const Base = ({
  backgroundColor = "bg-quaternary/20",
  children,
  callToAction,
  isNotFoundPage,
}: {
  backgroundColor: string;
  callToAction?: Call_to_action;
  children: React.ReactNode;
  isNotFoundPage?: boolean;
}) => {
  return (
    <>
      <Header backgroundColor={backgroundColor} />
      <main>{children}</main>
      {callToAction && (
        <Footer
          hasCallToAction={isNotFoundPage ? !isNotFoundPage : !!callToAction}
        >
          {!isNotFoundPage && <CallToAction callToAction={callToAction} />}
        </Footer>
      )}
    </>
  );
};

export default Base;
