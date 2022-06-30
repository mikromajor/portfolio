import {
  ABOUT_ME,
  PET_PROJECTS,
} from "./content/profileContent";

export type KeysAboutMeType = keyof typeof ABOUT_ME;
export type KeysPetProjectType = keyof typeof PET_PROJECTS;

export type IconsAndContentType = {
  ICON: Array<string>;
  CONTENT_ICONS?: Array<string>;
  CONTENT: Array<string>;
  LINK?: string;
};
