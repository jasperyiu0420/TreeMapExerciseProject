import { Input, Form, Button } from 'antd';
import React from 'react';
import { InputType } from '../Screen/TreeMapScreen';

interface ITreeMapInputProps {
    add: (values: InputType) => void
}

export default class TreeMapInput extends React.Component<ITreeMapInputProps> {
    render() {
        return (
            <Form onFinish={(values: InputType) => this.props.add(values)}>
                <Form.Item
                    label="name"
                    name="name"
                    rules={[{ required: true}]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="weight"
                    name="weight"
                    rules={[{ required: true}]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="value"
                    name="value"
                    rules={[{ required: true}]}
                >
                    <Input />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Add Data
                    </Button>
                </Form.Item>
            </Form >
        )
    }
}