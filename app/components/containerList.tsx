"use strict";

import * as React from "react";
import { IContainer, ContainerListItem } from "./containerListItem";

export class ContainerListProps {
    containers: IContainer[];
    title?: string;
}

export class ContainerList extends React.Component<ContainerListProps, {}> {
    render(): JSX.Element {
        return (
            <div>
                <h3>{this.props.title}</h3>
                <p>{ this.props.containers.length === 0 ? "No containers to show" : "" }</p>
                <div className="row">
                    { this.props.containers.map(c => <ContainerListItem key={c.name} {...c} />) }
                </div>
            </div>
        );
    }
}