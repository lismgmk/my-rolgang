export interface VisitParameters {
  order_price?: number;
  currency?: string;
  [key: string]: any;
}

export interface UserParameters {
  UserID?: number;
  [key: string]: any;
}

export interface InitParameters {
  accurateTrackBounce?: boolean | number;
  childIframe?: boolean;
  clickmap?: boolean;
  defer?: boolean;
  ecommerce?: boolean | string | any[];
  params?: VisitParameters | VisitParameters[];
  userParams?: UserParameters;
  trackHash?: boolean;
  trackLinks?: boolean;
  trustedDomains?: string[];
  type?: number;
  webvisor?: boolean;
  triggerEvent?: boolean;
}

export interface FirstPartyParamsParameters {
  email?: string;
  phone_number?: string;
  first_name?: string;
  last_name?: string;
  home_address?: string;
  street?: string;
  city?: string;
  region?: string;
  postal_code?: string;
  country?: string;
  yandex_cid?: number;
}
