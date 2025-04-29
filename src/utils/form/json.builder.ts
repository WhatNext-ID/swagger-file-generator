import { CombinedState } from '../state/types';

const validateExampleParam = (
  type: string,
  example: string
): string | number | boolean => {
  let exampleData: string | number | boolean;
  const regexInt = /^\d+$/;

  switch (true) {
    case type === 'integer' && regexInt.test(example):
      exampleData = parseInt(example, 10);
      break;

    case type === 'integer' && !regexInt.test(example):
      exampleData = 'Example is unmatched the type';
      break;

    case type === 'boolean' && example === 'true':
      exampleData = true;
      break;

    case type === 'boolean' && example === 'false':
      exampleData = false;
      break;

    case type === 'boolean':
      exampleData = 'Example is unmatched the type';
      break;

    case type === 'string':
      exampleData = example;
      break;

    default:
      exampleData = 'Type is unknown';
      break;
  }

  return exampleData;
};

const validateExampleProp = (
  type: string,
  example: string
): string | number | boolean => {
  let exampleData: string | number | boolean;
  const regexInt = /^\d+$/;

  switch (true) {
    case type === 'integer' || (type === 'number' && regexInt.test(example)):
      exampleData = parseInt(example, 10);
      break;

    case type === 'integer' || (type === 'number' && !regexInt.test(example)):
      exampleData = 'Example is unmatched the type';
      break;

    case type === 'boolean' && example === 'true':
      exampleData = true;
      break;

    case type === 'boolean' && example === 'false':
      exampleData = false;
      break;

    case type === 'boolean':
      exampleData = 'Example is unmatched the type';
      break;

    case type === 'string':
      exampleData = example;
      break;

    default:
      exampleData = 'Type is unknown';
      break;
  }

  return exampleData;
};

export const openAPI = (value: CombinedState) => {
  const swaggerDataVersion =
    value.swagger !== '2.0' ? oasThreeAbove(value) : oasTwo(value);

  return swaggerDataVersion;
};

const oasTwo = (value: CombinedState) => {
  const paths = value.paths.reduce((acc, item) => {
    const param = item.parameters.map((param) => {
      const exampleData = validateExampleParam(param.type, param.example);

      return {
        name: param.name,
        in: param.in,
        description: param.description,
        required: param.required,
        schema: {
          type: param.type,
          example: exampleData,
        },
      };
    });

    const body = value.body
      .filter((req) => req.endpoint === item.endpoint)
      .map((req) => ({
        in: 'body',
        name: 'body',
        description: 'Add your description here',
        required: true,
        schema: {
          $ref: `#/definitions/${req.ref}`,
        },
      }));

    const res = value.res
      .filter((res) => res.endpoint === item.endpoint)
      .reduce((resAcc, res) => {
        if (res.ref === '') {
          resAcc[res.status] = {
            default: {
              description: res.description,
            },
          };
        } else {
          resAcc[res.status] = {
            description: res.description,
            content: {
              'application/json': {
                schema: {
                  $ref: `#/components/schemas/${res.ref}`,
                },
              },
              'application/xml': {
                schema: {
                  $ref: `#/components/schemas/${res.ref}`,
                },
              },
            },
          };
        }
        return resAcc;
      }, {} as Record<string, any>);

    const method = item.method.reduce((methodAcc, http) => {
      if (['put', 'post', 'patch'].includes(http)) {
        methodAcc[http] = {
          tags: [item.tags],
          description: 'Add your description here',
          parameters: [...param, ...body],
          responses: res,
        };
      } else {
        methodAcc[http] = {
          tags: [item.tags],
          description: 'Add your description here',
          parameters: param,
          responses: res,
        };
      }
      return methodAcc;
    }, {} as Record<string, any>);

    acc[item.endpoint] = method;

    return acc;
  }, {} as Record<string, any>);

  const schema = value.schema.reduce((acc, item) => {
    const prop = item.properties.reduce((propAcc, prop) => {
      const exampleData = validateExampleProp(prop.type, prop.example);

      propAcc[prop.name] = {
        type: prop.type,
        example: exampleData,
      };
      return propAcc;
    }, {} as Record<string, any>);

    acc[item.name] = {
      type: 'object',
      properties: prop,
    };

    return acc;
  }, {} as Record<string, any>);

  return {
    swagger: value.swagger,
    info: {
      title: value.title,
      description: value.description,
      license: value.license,
      version: value.version,
    },
    host: value.api,
    tags: value.tags,
    paths: { ...paths },
    definitions: {
      ...schema,
    },
  };
};

const oasThreeAbove = (value: CombinedState) => {
  const paths = value.paths.reduce((acc, item) => {
    const param = item.parameters.map((param) => {
      const exampleData = validateExampleParam(param.type, param.example);

      return {
        name: param.name,
        in: param.in,
        description: param.description,
        required: param.required,
        schema: {
          type: param.type,
          example: exampleData,
        },
      };
    });

    const body = value.body
      .filter((req) => req.endpoint === item.endpoint)
      .map((req) => ({
        description: 'Add your description here',
        content: {
          'application/json': {
            schema: {
              $ref: `#/components/schemas/${req.ref}`,
            },
          },
          'application/xml': {
            schema: {
              $ref: `#/components/schemas/${req.ref}`,
            },
          },
          'application/x-www-form-urlencoded': {
            schema: {
              $ref: `#/components/schemas/${req.ref}`,
            },
          },
        },
      }));

    const res = value.res
      .filter((res) => res.endpoint === item.endpoint)
      .reduce((resAcc, res) => {
        if (res.ref === '') {
          resAcc[res.status] = {
            default: {
              description: res.description,
            },
          };
        } else {
          resAcc[res.status] = {
            description: res.description,
            content: {
              'application/json': {
                schema: {
                  $ref: `#/components/schemas/${res.ref}`,
                },
              },
              'application/xml': {
                schema: {
                  $ref: `#/components/schemas/${res.ref}`,
                },
              },
            },
          };
        }
        return resAcc;
      }, {} as Record<string, any>);

    const method = item.method.reduce((methodAcc, http) => {
      if (['put', 'post', 'patch'].includes(http)) {
        methodAcc[http] = {
          tags: [item.tags],
          description: 'Add your description here',
          parameters: param,
          requestBody: body[0], // only one body expected per endpoint
          responses: res,
        };
      } else {
        methodAcc[http] = {
          tags: [item.tags],
          description: 'Add your description here',
          parameters: param,
          responses: res,
        };
      }
      return methodAcc;
    }, {} as Record<string, any>);
    console.log(method);

    acc[item.endpoint] = method;

    return acc;
  }, {} as Record<string, any>);

  const schema = value.schema.reduce((acc, item) => {
    const prop = item.properties.reduce((propAcc, prop) => {
      const exampleData = validateExampleProp(prop.type, prop.example);

      propAcc[prop.name] = {
        type: prop.type,
        example: exampleData,
      };

      return propAcc;
    }, {} as Record<string, any>);

    acc[item.name] = {
      type: 'object',
      properties: prop,
    };

    return acc;
  }, {} as Record<string, any>);

  return {
    openapi: value.swagger,
    info: {
      title: value.title,
      description: value.description,
      license: value.license,
      version: value.version,
    },
    servers: [
      {
        url: value.api,
      },
    ],
    tags: value.tags,
    paths: { ...paths },
    components: {
      schemas: {
        ...schema,
      },
    },
  };
};
