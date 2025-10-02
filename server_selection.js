"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MIN_SECONDARY_WRITE_WIRE_VERSION = void 0;
exports.writableServerSelector = writableServerSelector;
exports.sameServerSelector = sameServerSelector;
exports.secondaryWritableServerSelector = secondaryWritableServerSelector;
exports.readPreferenceServerSelector = readPreferenceServerSelector;
const error_1 = require("../error");
const read_preference_1 = require("../read_preference");
const common_1 = require("./common");

// max staleness constants
const IDLE_WRITE_PERIOD = 10000;
const SMALLEST_MAX_STALENESS_SECONDS = 90;

// Minimum version to try writes on secondaries.
exports.MIN_SECONDARY_WRITE_WIRE_VERSION = 13;

/**
 * Returns a server selector that selects for writable servers
 */
function writableServerSelector() {
    return function writableServer(topologyDescription, servers) {
        return latencyWindowReducer(topologyDescription, servers.filter((s) => s.isWritable));
    };
}

/**
 * The purpose of this selector is to select the same server,
 * only if it is in a state that it can have commands sent to it.
 */
function sameServerSelector(description) {
    return function sameServerSelector(_topologyDescription, servers) {
        if (!description)
            return [];
        // Filter the servers to match the provided description only if
        // the type is not unknown.
        return servers.filter(sd => {
            return sd.address === description.address && sd.type !== common_1.ServerType.Unknown;
        });
    };
}

/**
 * Returns a server selector that uses a read preference to select a
 * server potentially for a write on a secondary.
 */
function secondaryWritableServerSelector(wireVersion, readPreference) {
    if (!readPreference ||
        !wireVersion ||
        (wireVersion && wireVersion < exports.MIN_SECONDARY_WRITE_WIRE_VERSION)) {
        return readPreferenceServerSelector(read_preference_1.ReadPreference.primary);
    }
    return readPreferenceServerSelector(readPreference);
}

// ... rest of your code unchanged and in English ...
