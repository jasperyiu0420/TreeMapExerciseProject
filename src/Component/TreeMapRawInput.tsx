import { Input, Form, Button } from 'antd';
import React from 'react';
import { InputType } from '../Screen/TreeMapScreen';

interface ITreeMapRawInputProps {
    save: (values: string) => void
    json: string
    handleRawDataChange: (e: any) => void
}

export default class TreeMapRawInput extends React.Component<ITreeMapRawInputProps> {
    render() {
        return (
            <>
                <Input.TextArea value={this.props.json} onChange={(e) => this.props.handleRawDataChange(e)} />
                <Button type={"primary"} onClick={() => { this.props.save(this.props.json) }}>Submit Raw Data</Button>
            </>
        )
    }
}