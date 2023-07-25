export function buildHeaders(customHeaders: Record<string, string>) {
    const defaultHeaders = {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    };

    return {
        ...defaultHeaders,
        ...customHeaders
    };
}