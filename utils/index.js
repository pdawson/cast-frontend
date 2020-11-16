const utilUcFirst = (string) => {
    const value = string || '';

    return value
        .toLocaleString()
        .replace(/^(.)|\s+(.)/g, (char) => char.toLocaleUpperCase());
};

const utilInteropDefault = (promise) => promise.then((m) => m.default || m);

export const ucFirst = utilUcFirst;
export const interopDefault = utilInteropDefault;

export default {
    ucFirst: utilUcFirst,
    interopDefault: utilInteropDefault,
};
