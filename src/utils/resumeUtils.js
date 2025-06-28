import json5 from 'json5';

// --------------------------------------------------------------------------------
/**
 * Deep merges two objects, with the additional taking priority.
 */
function deepMerge(original, additional) {
    const result = {};

    // Merge original and additional objects
    for (const key in original) {
        const originalValue = original[key];
        const isObject = (typeof originalValue === 'object') && (!Array.isArray(originalValue));

        if (Object.prototype.hasOwnProperty.call(additional, key)) {
            const additionalValue = additional[key];
            if (additionalValue === null) { continue; }

            if (isObject) {
                result[key] = deepMerge(originalValue, additionalValue);
            } else {
                result[key] = additionalValue;
            }
        } else {
            if (isObject) {
                result[key] = deepMerge(originalValue, {});
            } else {
                result[key] = originalValue;
            }
        }
    }

    // Add additional keys that are not in the original
    for (const key in additional) {
        if (Object.prototype.hasOwnProperty.call(result, key)) { continue; }

        const additionalValue = additional[key];
        if (additionalValue === null) { continue; }

        result[key] = additionalValue;
    }

    return result;
}


// --------------------------------------------------------------------------------
/**
 * Loads JSON data based on the path.
 */
export async function loadJsonData(path) {
    path = path.split('/').pop();

    const defaultJson5 = await import(`@/../data/__default.json5?raw`).catch(() => null);
    const additionalJson5 = await import(`@/../data/${path}.json5?raw`).catch(() => null);

    const defaultJson5Data = defaultJson5 ? json5.parse(defaultJson5.default) : {};
    const additionalJson5Data = additionalJson5 ? json5.parse(additionalJson5.default) : {};

    return deepMerge(defaultJson5Data, additionalJson5Data);
}

/**
 * Sorts the subsections by their keys in descending order.
 */
export function sortContent(subsections) {
    return Object.entries(subsections)
        .sort(([keyA, _A], [keyB, _B]) => keyB.localeCompare(keyA))
        .map(([_, subsection]) => subsection);
}