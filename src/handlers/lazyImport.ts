import { lazy } from "react";

export const Profile = lazy(
  () => import("../components/Profile")
);
export const SimpleCalc = lazy(
  () => import("../components/SimpleCalc")
);
export const StopWatch = lazy(
  () => import("../components/StopWatch")
);
export const GitHubSearcher = lazy(
  () => import("../components/GitHubSearcher")
);
export const GalleriaFilms = lazy(
  () => import("../components/GalleriaFilms")
);
export const Covid = lazy(
  () => import("../components/Covid")
);
export const DragCards = lazy(
  () => import("../components/DragCards")
);
