import * as React from 'react';
import { NetInfoState } from '@react-native-community/netinfo';
import { ConnectivityArgs, ConnectivityState } from '../types';
export declare type RequiredProps = {
    children: (state: ConnectivityState) => React.ReactNode;
} & DefaultProps;
export declare type DefaultProps = ConnectivityArgs & {
    onConnectivityChange: (isConnected: boolean) => void;
};
declare class NetworkConnectivity extends React.PureComponent<RequiredProps, ConnectivityState> {
    private unsubscribe;
    static defaultProps: {
        onConnectivityChange: () => undefined;
        pingTimeout: number;
        pingServerUrl: string;
        shouldPing: boolean;
        pingInterval: number;
        pingOnlyIfOffline: boolean;
        pingInBackground: boolean;
        httpMethod: import("../types").HTTPMethod;
    };
    constructor(props: RequiredProps);
    componentDidMount(): Promise<void>;
    componentDidUpdate(prevProps: RequiredProps, prevState: ConnectivityState): void;
    componentWillUnmount(): void;
    getConnectionChangeHandler(): (connectionState: NetInfoState) => void;
    handleNetInfoChange: (connectionState: NetInfoState) => void;
    checkInternet: () => Promise<void>;
    intervalHandler: () => void;
    handleConnectivityChange: ({ isConnected }: NetInfoState) => void;
    render(): React.ReactNode;
}
export default NetworkConnectivity;
