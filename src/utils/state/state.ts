import { create } from 'zustand';
import { Basic, ClearState, CombinedState, Path, SchemaState } from './types';

const useSwaggerState = create<CombinedState & SchemaState & ClearState>()(
  (set) => ({
    swagger: '',
    title: '',
    description: '',
    version: '',
    license: {
      name: '',
      url: '',
    },
    tags: [{ name: '', desc: '' }],
    api: '',
    paths: [
      {
        method: ['post', 'get'],
        endpoint: '',
        parameters: [
          {
            name: '',
            in: '',
            required: true,
            description: '',
            type: '',
            example: '',
          },
        ],
      },
    ],
    setBasic: (state: Basic) =>
      set(() => ({
        swagger: state.swagger,
        title: state.title,
        description: state.description,
        version: state.version,
        license: state.license,
        tags: state.tags,
        api: state.api,
      })),
    setPath: (state: Path) =>
      set(() => ({
        paths: state.paths,
      })),
    clearState: () =>
      set(() => ({
        swagger: '',
        title: '',
        description: '',
        version: '',
        license: {
          name: '',
          url: '',
        },
        tags: [{ name: '', desc: '' }],
      })),
  })
);

export default useSwaggerState;
