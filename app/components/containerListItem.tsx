"use setrict";
import * as React from "react";
import * as classNames from "classnames";
import * as io from "socket.io-client";

const socket: SocketIOClient.Socket = io.connect();

export interface IContainer {
    id: string;
    name: string;
    image: string;
    state: string;
    status: string;
}

export class ContainerListItem extends React.Component<IContainer, {}> {

    // helper method for determining whether the container is running or not
    isRunning(): boolean {
        return this.props.state === "running";
    }
    onActionButtonClick(): void {
        const evt: string = this.isRunning() ? "container.stop" : "container.start";
        socket.emit(evt, { id: this.props.id });
    }
    render(): JSX.Element {
        const panelClass : string = this.isRunning() ? "success" : "default";
        const classes : string = classNames("panel", `panel-${panelClass}`);
        const buttonText: string = this.isRunning() ? "Stop" : "Start";

        return (
            <div className="col-sm-3">
                <div className={ classes }>
                    <div className="panel-heading">{ this.props.name }</div>
                    <div className="panel-body">
                        Status: {this.props.status}<br/>
                        Image: {this.props.image}
                    </div>
                    <div className="panel-footer">
                    <button onClick={this.onActionButtonClick.bind(this)} className="btn btn-default">{buttonText}</button>
                    </div>
                </div>
            </div>
        );
    }
}