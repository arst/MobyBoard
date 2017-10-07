import * as React from "react";
import Modal from "./modal";
import * as classNames from "classnames";

interface IModalProperties {
    id: string;
    onRunImage?: (name: string) => void;
}

interface IModalState {
    imageName: string;
    isValid: boolean;
}

export class NewContainerDialog extends React.Component<IModalProperties, IModalState> {
        constructor(props: IModalProperties) {
            super(props);
            this.state = {
                imageName: "",
                isValid: false
            };
        }
        onImageNameChange(e: any): void {
            const name: string = e.target.value;
            this.setState({
                imageName: name,
                isValid: name.length > 0
            });
        }
        runImage(): boolean {
            if (this.state.isValid && this.props.onRunImage) {
                this.props.onRunImage(this.state.imageName);
            }
            return this.state.isValid;
        }
        render(): JSX.Element {
            let inputClass: string = classNames({
                "form-group": true,
                "has-error": !this.state.isValid
            });
            return (
                <Modal id="newContainerModal" buttonText="Run" title="Create a new container" onButtonClicked={this.runImage.bind(this)}>
                    <form className="form-horizontal">
                        <div className={inputClass}>
                            <label htmlFor="imageName" className="col-sm-3 control-label">Image name</label>
                            <div className="col-sm-9">
                                <input type="text"
                                    className="form-control"
                                    onChange={this.onImageNameChange.bind(this)}
                                    id="imageName"
                                    placeholder="e.g mongodb:latest"/>
                            </div>
                        </div>
                    </form>
                </Modal>
            );
        }
    }
