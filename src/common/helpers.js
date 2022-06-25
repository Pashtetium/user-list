export const snakeToCamelCase = (string) => string.replace(/[^a-zA-Z0-9]+(.)/g, (match, chr) => chr.toUpperCase())
