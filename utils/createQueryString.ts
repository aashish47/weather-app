export const createQueryStringCallback = (name: string, value: string, searchParams: URLSearchParams) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set(name, value);
    return params.toString();
};
