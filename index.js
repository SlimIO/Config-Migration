// Require Third-party Dependencies
const { compare } = require("fast-json-patch");
const is = require("@sindresorhus/is");

/**
 * @class ConfigMigrator
 * @property {Array} actionsToApply
 */
class ConfigMigrator {

    /**
     * @constructor
     * @param {*} originalSchema origin JSON Schema
     * @param {*} migrateSchema schema to migrate
     *
     * @throws {TypeError}
     */
    constructor(originalSchema, migrateSchema) {
        if (!is.plainObject(originalSchema)) {
            throw new TypeError("originalSchema should be a plain JavaScript Object!");
        }
        if (!is.plainObject(migrateSchema)) {
            throw new TypeError("migrateSchema should be a plain JavaScript Object!");
        }

        this.actionsToApply = compare(originalSchema, migrateSchema);
    }

    /**
     * @public
     * @method migrate
     * @memberof ConfigMigrator#
     * @param {*} payload JavaScript Object payload to migrate
     * @return {void}
     *
     * @throws {TypeError}
     */
    migrate(payload) {
        if (!is.plainObject(payload)) {
            throw new TypeError("payload should be a plain JavaScript Object!");
        }

        console.log(this.actionsToApply);
    }

}

module.exports = ConfigMigrator;
