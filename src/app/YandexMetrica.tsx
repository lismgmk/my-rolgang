"use client";
import { Router } from "next/router";
import { PropsWithChildren, useCallback, useEffect } from "react";
import ym, { YMInitializer } from "react-yandex-metrika";

//Check, is it production mode
export const enableYM =
  process.env.NODE_ENV === "production" && process.env.NEXT_PUBLIC_YM_ID;

export const YandexMetrica = ({ children }: PropsWithChildren) => {
  const hit = useCallback((url: string) => {
    if (enableYM) {
      ym("hit", url);
    } else {
      console.log(`%c[YandexMetrika](HIT)`, `color: orange`, url);
    }
  }, []);

  useEffect(() => {
    hit(window.location.pathname + window.location.search);
    Router.events.on("routeChangeComplete", (url: string) => hit(url));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      {enableYM && (
        <YMInitializer
          accounts={[Number(process.env.NEXT_PUBLIC_YM_ID) || 99846466]}
          options={{ defer: true }}
          version="2"
        />
      )}
      {children}
    </>
  );
};
