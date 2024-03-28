export type RequestData = {
  id?: string;
}

export type ResponseData = {
  id: string;
  status: string;
  image: string;
  error: string;
}

export interface response {
  id: string;
  message: string;
  created: number;
  apiVersion: string;
  callID: string;
  finished: boolean;
  modelOutputs: modelOutput[];
}

export interface modelOutput {
  images: string[];
  parameters: any;
  info: string;
}
