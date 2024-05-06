export interface Path {
  paths: {
    method: string[];
    endpoint: string;
    parameters: {
      name: string;
      in: string;
      required: boolean;
      description: string;
      type: string;
    }[];
  }[];
}
export interface Basic {
  swagger: string;
  title: string;
  description: string;
  version: string;
  license: {
    name: string;
    url: string;
  };
  tags: {
    name: string;
    desc: string;
  }[];
}

export interface SchemaState {
  setBasic: (state: Basic) => void;
  setPath: (state: Path) => void;
}

export interface ClearState {
  clearState: () => void;
}