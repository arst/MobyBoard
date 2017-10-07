import * as React from "react";

interface IModalProperties {
    id: string;
    title: string;
    buttonText?: string;
    onButtonClicked?: () => boolean | undefined;
}

export default class Modal extends React.Component<IModalProperties, {}> {
        // store the HTML element id of the modal popup
        modalElementId: string;
        constructor(props: IModalProperties) {
            super(props);
            this.modalElementId = `#${this.props.id}`;
        }
        onPrimaryButtonClick(): void {
            // delegate to the generic button handler defined by the inheriting component
            if (this.props.onButtonClicked) {
                if (this.props.onButtonClicked() !== false) {
                    // use Bootstrap's jQuery API to hide the popup
                    $(this.modalElementId).modal("hide");
                }
            }
        }
        render(): JSX.Element {
            return (
                <div className="modal fade" id={ this.props.id }>
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                                <h4 className="modal-title">{ this.props.title }</h4>
                            </div>
                            <div className="modal-body">
                                { this.props.children }
                            </div>
                            <div className="modal-footer">
                                <button type="button"
                                    onClick={this.onPrimaryButtonClick.bind(this)}
                                    className="btn btn-primary">{ this.props.buttonText || "Ok" }
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
    }