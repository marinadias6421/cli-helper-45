// Utility functions for data handling

/**
 * Deep merges two objects recursively.
 * @param target The target object to merge into.
 * @param source The source object to merge from.
 * @returns The merged object.
 */
function deepMerge<T>(target: T, source: Partial<T>): T {
    for (const key in source) {
        if (source[key] instanceof Object) {
            // If the property is an object, recursively merge
            Object.assign(source[key], deepMerge(target[key] as T, source[key]));
        }
    }
    // Merge and return the result
    return Object.assign(target || {}, source);
}

/**
 * Filters an array of objects by a given key and value.
 * @param items The array of objects to filter.
 * @param key The key to filter by.
 * @param value The value to match against.
 * @returns The filtered array of objects.
 */
function filterByKey<T>(items: T[], key: keyof T, value: any): T[] {
    return items.filter(item => item[key] === value);
}

/**
 * Converts a camelCase string to a kebab-case string.
 * @param str The camelCase string to convert.
 * @returns The converted kebab-case string.
 */
function camelToKebab(str: string): string {
    return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
}

export { deepMerge, filterByKey, camelToKebab };