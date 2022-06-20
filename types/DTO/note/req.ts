export type TNoteDataReq = {
  id: string;
  title: string;
  description: string;
};

interface INoteDataReqActionType {
  req: TNoteDataReq;
}

export type { INoteDataReqActionType };
