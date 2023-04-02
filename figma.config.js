require("dotenv").config();
const svgo = require('@figma-export/transform-svg-with-svgo')

const fileId = process.env.FILE_ID;
const outputters = [
  require("@figma-export/output-components-as-svg")({ output: "./" })
];

const SVGOConfig = [];

module.exports = {
  commands: [
    ["components", {
        fileId,
        onlyFromPages: ["icons"],
        transformers: [svgo({ multipass: true, plugins: SVGOConfig })],
        outputters,
      },
    ]
  ],
};