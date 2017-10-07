import * as React from "react";

export interface IDialogTriggerProperties {
    id: string;
    buttonText: string;
}

export class DialogTrigger extends React.Component<IDialogTriggerProperties, {}> {
    render(): JSX.Element {
        const href: string = `#${this.props.id}`;

        return (
            <a className="btn btn-primary" data-toggle="modal" href={ href }>{ this.props.buttonText }</a>
        );
    }
}