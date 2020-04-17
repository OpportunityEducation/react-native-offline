import * as React from 'react';
import { Dispatch } from 'redux';
import { NetworkState, ConnectivityArgs } from '../types';
interface AppState {
    network: NetworkState;
}
declare type OwnProps = ConnectivityArgs;
interface StateProps {
    isConnected: boolean;
    dispatch: Dispatch;
}
declare type Props = OwnProps & StateProps;
declare class ReduxNetworkProvider extends React.Component<Props> {
    static defaultProps: ConnectivityArgs;
    handleConnectivityChange: (isConnected: boolean) => void;
    render(): JSX.Element;
}
declare const mapStateToProps: (state: AppState) => {
    isConnected: boolean;
};
declare const ConnectedReduxNetworkProvider: import("react-redux").ConnectedComponent<typeof ReduxNetworkProvider, Pick<Props, "pingTimeout" | "pingServerUrl" | "shouldPing" | "pingInterval" | "pingOnlyIfOffline" | "pingInBackground" | "httpMethod">>;
export { ConnectedReduxNetworkProvider as default, ReduxNetworkProvider, mapStateToProps, };
