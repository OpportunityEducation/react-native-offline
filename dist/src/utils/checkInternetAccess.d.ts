import { HTTPMethod, AddUndefined } from '../types';
declare type Arguments = {
    url: string;
    timeout: number;
    method?: HTTPMethod;
};
export default function checkInternetAccess(args?: AddUndefined<Arguments>): Promise<boolean>;
export {};
