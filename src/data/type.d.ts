export type RightData = {
  label: string;
  name: string;
  githubs: Github[];
}

export interface Github {
  name: string;
  github: string;
  docs: string;
  icon: string;
}