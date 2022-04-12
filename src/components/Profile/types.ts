import {
  ABOUT_ME,
  PET_PROJECTS,
} from "./content/profileContent";

type AboutMeType = typeof ABOUT_ME;
type PetProjectType = typeof PET_PROJECTS;

export type KeysAboutMeType = keyof AboutMeType;
export type KeysPetProjectType = keyof PetProjectType;

export type IconsAndContentType = {
  ICON: Array<string>;
  CONTENT_ICONS?: Array<string>;
  CONTENT: Array<string>;
  LINK?: string;
};
