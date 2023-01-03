const path = require("path");
const tjs = require("typescript-json-schema");
const fs = require("fs");

const settings = {
  required: true,
  ref: false,
};

const compilerOptions = {
  strictNullChecks: true,
};

const program = tjs.getProgramFromFiles(
  [
    path.resolve("src/dtos/UserDto.ts"),
  ],
  compilerOptions,
  "./"
);

const schema = tjs.generateSchema(program, "*", settings);
fs.writeFileSync(
  "_schemas.ts",
  "const schema = " +
    JSON.stringify(schema, null, '\t') +
    " as const;\nexport default schema.definitions;"
);
