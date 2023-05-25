export interface Response {
  code: number;
  message: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  result: any;
  status: string;
  statusMessage: string;
}
