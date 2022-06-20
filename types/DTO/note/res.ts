import { TNoteDataReq } from "./req";

interface INoteDataResActionType {
  data:  {
    id: string;
    title: string;
    description: string;
  }[];
}

export type { INoteDataResActionType };
