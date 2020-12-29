// Node.js require:
const Ajv = require("ajv").default
const localize = require('ajv-i18n');

const schema = {
    type: 'string',
    minLength: 10,
    errorMessage: "should be an object with an integer property foo only",
}

const ajv = new Ajv({
    allErrors: true
}) // options can be passed, e.g. {allErrors: true}

require("ajv-errors")(ajv /*, {singleError: true} */ )

const validate = ajv.compile(schema)
const valid = validate('hello')

if (!valid) {
    localize.zh(validate.errors);
    console.log(validate.errors)
}