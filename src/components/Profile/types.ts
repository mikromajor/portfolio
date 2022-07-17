import {
  ABOUT_ME,
  PET_PROJECTS,
} from "./content/profileContent";

export type KeysAboutMe = keyof typeof ABOUT_ME;
export type ValueAboutMe = typeof ABOUT_ME[KeysAboutMe];
export type KeysPetProject = keyof typeof PET_PROJECTS;
export type ValuePetProject =
  typeof PET_PROJECTS[KeysPetProject];
