import React, { Suspense } from "react";
import { createBrowserRouter, Navigate, Outlet } from "react-router-dom";
import { ApplicationLayout } from "./components/ApplicationLayout/ApplicationLayout";
import CircularProgress from "@mui/material/CircularProgress";
import { PegTrackerPage } from "./pages/peg-tracker/PegTrackerPage";
import { CurveEcosystemPage } from "./pages/curve-ecosystem/CurveEcosystemPage";
import { MoneyPrinterPageRouter } from "./pages/money-printer/MoneyPrinterPageRouter";

const AnalyticPage = React.lazy(() => import("./pages/analytic/AnalyticPage"));
const DisclaimerPage = React.lazy(
  () => import("./pages/disclaimer/DisclaimerPage")
);
const AboutPage = React.lazy(() => import("./pages/about/AboutPage"));
const GraveYardPage = React.lazy(
  () => import("./pages/graveyard/GraveYardPage")
);
const TradeStablecoin = React.lazy(
  () => import("./pages/trade-stablecoins/TradeStablecoins")
);
const YieldPage = React.lazy(() => import("./pages/yield/YieldPage"));

export const router = createBrowserRouter([
  {
    id: "index",
    path: "/",
    element: <ApplicationLayout />,
    children: [
      {
        id: "home",
        path: "",
        element: (
          <Suspense fallback={<CircularProgress />}>
            <AnalyticPage />
          </Suspense>
        ),
      },
      {
        id: "analytics/network",
        path: ":network",
        element: (
          <Suspense fallback={<CircularProgress />}>
            <AnalyticPage />
          </Suspense>
        ),
      },
      {
        id: "yields",
        path: "stablecoin-yields",
        element: (
          <Suspense fallback={<CircularProgress />}>
            <YieldPage />
          </Suspense>
        ),
      },
      {
        id: "buy",
        path: "buy-stablecoins",
        element: (
          <Suspense fallback={<CircularProgress />}>
            <TradeStablecoin action="buy" />
          </Suspense>
        ),
      },
      {
        id: "sell",
        path: "sell-stablecoins",
        element: (
          <Suspense fallback={<CircularProgress />}>
            <TradeStablecoin action="sell" />
          </Suspense>
        ),
      },
      {
        id: "about",
        path: "about",
        element: (
          <Suspense fallback={<CircularProgress />}>
            <AboutPage />
          </Suspense>
        ),
      },
      {
        id: "graveyard",
        path: "stablecoin-graveyard",
        element: (
          <Suspense fallback={<CircularProgress />}>
            <GraveYardPage />
          </Suspense>
        ),
      },
      {
        id: "disclaimer",
        path: "disclaimer",
        element: (
          <Suspense fallback={<CircularProgress />}>
            <DisclaimerPage />
          </Suspense>
        ),
      },
      {
        id: "money-printer",
        path: "money-printer/:network",
        element: (
          <Suspense fallback={<CircularProgress />}>
            {/* <MoneyPrinterPage /> */}
            <MoneyPrinterPageRouter />
          </Suspense>
        ),
      },
      {
        id: "stablecoin-activity",
        path: "stablecoin-activity",
        element: (
          <Suspense fallback={<CircularProgress />}>
            <PegTrackerPage />
          </Suspense>
        ),
      },
      {
        id: "curve-ecosystem",
        path: "curve-ecosystem/:network",
        element: <CurveEcosystemPage />,
      },
    ],
  },
  {
    id: "404",
    path: "*",
    element: <h3>NOT FOUND</h3>,
  },
]);
