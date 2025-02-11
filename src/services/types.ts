import { AxiosResponse } from 'axios';

export type PaginatedResponse<TItem> = AxiosResponse<PaginatorInfo<TItem>>;

export type PaginatorInfo<TItem> = {
  data: Array<TItem>;
  message: string;
  meta: {
    current_page: number;
    from: number;
    last_page: number;
    path: string;
    per_page: number;
    to: number;
    total: number;
  };
};

export type StatusResponse<TData> = AxiosResponse<{
  statusCode: number;
  message: string;
  data: TData;
}>;
