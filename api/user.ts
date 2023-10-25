// api/user.ts
import createFetch from './index';

const fetchInstance = createFetch();

export const loginUser = (data) => {
    return fetchInstance.post("xxxx/xxx", data);
};


