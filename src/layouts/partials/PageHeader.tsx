import Breadcrumbs from "@/components/Breadcrumbs";
import Line from "@/components/line";
import { humanize, markdownify } from "@/lib/utils/textConverter";
import HeaderShape2 from "@/shapes/header-s-2";
import React from "react";

const PageHeader = ({
  title,
  breadcrumb = true,
  description,
  children,
}: {
  title: string;
  breadcrumb?: boolean;
  description?: string;
  children?: React.ReactNode;
}) => {
  return (
    <>
      <section className="section page-header relative overflow-hidden pb-96 after:z-10">
        <div className="container relative z-30">
          <div className="row items-center">
            <div className="mx-auto text-center lg:col-7">
              {title && (
                <h1
                  className="mb-6 text-[35px] sm:text-[50px] xl:text-[65px]"
                  data-aos="fade-up-sm"
                >
                  {humanize(title)}
                </h1>
              )}
              {breadcrumb && (
                <Breadcrumbs className="breadcrumb" />
              )}
              {description && (
                <>
                  <hr
                    className="mx-auto mb-6 h-[1px] w-[100px] border-0 border-b border-t border-dark border-opacity-50 bg-transparent"
                    data-aos="fade-up-sm"
                    data-aos-delay="50"
                  />
                  <p
                    className="mb-6 text-[20px]"
                    data-aos="fade-up-sm"
                    data-aos-delay="100"
                    dangerouslySetInnerHTML={markdownify(description ?? "")}
                  ></p>
                </>
              )}
            </div>
          </div>
        </div>
        {/* <!-- End Main Content --> */}
        {children ?? (
          <Line className="line-bg absolute z-20" color="bg-line-yellow" />
        )}

        {/* <!-- Start Shape background --> */}
        <div
          className="pointer-events-none absolute left-0 top-[5%] z-30 hidden select-none lg:block"
          data-aos="fade-up-sm"
        >
          <svg
            className="text-secondary"
            width="132"
            height="248"
            viewBox="0 0 132 248"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M84.8369 98.7143C73.0417 89.9416 53.0536 89.4378 49.2422 75.2285C46.8091 66.1611 53.0155 55.3164 47.5979 47.6366C45.8015 45.0799 42.9882 43.4451 40.2033 42.0289C30.29 37.001 18.9226 33.8075 8.04929 36.1076C-0.143669 37.8374 -7.80436 43.35 -11.4066 50.6971C-24.2663 54.5845 -38.3521 54.2043 -51.1263 58.6144C-66.8184 64.0225 -79.9823 77.4335 -83.2138 93.7054C-86.4359 109.987 -78.471 128.369 -63.5013 135.545C-48.6836 142.645 -29.3893 138.881 -16.7007 149.307C-9.17303 155.485 -5.82742 165.275 -0.238719 173.259C14.2463 193.941 45.0887 200.128 67.4435 188.362C89.7888 176.604 102.135 149.393 98.3619 124.424C96.8697 114.606 92.8018 104.645 84.8369 98.7143Z"
              fill="currentColor"
            />
            <path
              d="M72.338 114.254C64.7153 108.779 55.3627 106.879 47.1888 102.468C43.1493 100.292 39.4711 97.3549 37.7412 92.9828C36.135 88.9054 36.5912 84.5142 37.1329 80.2657C38.0169 73.2228 38.9293 65.7522 32.8084 60.7338C26.1456 55.2686 15.8712 52.0656 7.44057 51.0676C-1.54127 50.0126 -10.6752 51.885 -17.8321 57.6162C-19.4954 58.9564 -21.0162 60.4581 -22.3373 62.1404C-23.9816 64.2219 -24.5709 66.1989 -27.2987 66.8927C-32.3932 68.2043 -37.6112 68.9362 -42.8102 69.6681C-52.714 71.0557 -62.7223 72.5099 -71.6851 77.2527C-79.6215 81.4442 -86.5028 87.6983 -91.2646 95.3305C-100.351 109.872 -99.8568 128.825 -89.2972 142.502C-84.1742 149.126 -77.1693 153.356 -69.1189 155.476C-60.5933 157.728 -51.6875 157.985 -43.1618 160.199C-38.5426 161.397 -34.0184 163.241 -30.3116 166.282C-25.8445 169.951 -22.8505 174.979 -20.0372 179.94C-15.57 187.848 -11.0649 195.091 -3.7178 200.632C9.49359 210.593 27.4097 213.834 43.3965 209.861C77.5084 201.373 97.4396 157.529 81.8806 125.983C79.647 121.449 76.539 117.505 72.5375 114.397C71.6156 113.684 70.3135 114.967 71.2449 115.689C86.5663 127.589 87.5928 151.179 82.3463 168.383C77.3944 184.626 65.8368 199.263 49.8976 205.812C34.5002 212.142 16.0613 210.621 1.78537 202.124C-6.0084 197.486 -11.6446 190.956 -16.1213 183.153C-20.5694 175.397 -24.6659 167.176 -32.6308 162.442C-46.6215 154.135 -64.4712 158.051 -78.4714 149.754C-93.6598 140.743 -99.5051 120.527 -93.6122 104.312C-90.3332 95.2925 -83.9271 87.5367 -76.0858 82.0906C-68.1305 76.5684 -59.0535 74.0116 -49.5965 72.5004C-44.9392 71.7591 -40.2629 71.2078 -35.6057 70.4474C-33.3816 70.0862 -31.1671 69.6776 -28.981 69.1834C-27.4888 68.8507 -24.894 68.6701 -23.687 67.6721C-23.1072 67.1874 -22.708 65.9137 -22.2803 65.2389C-21.5864 64.1459 -20.788 63.1194 -19.9421 62.1404C-18.2598 60.23 -16.2829 58.5762 -14.1443 57.217C-9.9623 54.5367 -5.21002 53.092 -0.27714 52.7024C9.1039 51.9515 18.542 54.9455 26.8205 59.156C31.6203 61.5987 35.4316 64.8017 35.9734 70.4379C36.2965 73.8026 35.6882 77.2242 35.2795 80.5603C34.4526 87.2991 34.6237 93.9143 39.5756 99.1323C44.9457 104.807 53.1197 107.088 60.1436 109.93C64.107 111.536 67.9564 113.332 71.4445 115.832C72.3855 116.526 73.2884 114.938 72.338 114.254Z"
              fill="#4C4C4C"
            />
          </svg>
        </div>
        <div
          className="pointer-events-none absolute right-0 top-[25%] z-30 hidden select-none lg:block"
          data-aos="fade-up-sm"
        >
          <HeaderShape2 className="text-quinary" />
        </div>
      </section>
    </>
  );
};

export default PageHeader;
