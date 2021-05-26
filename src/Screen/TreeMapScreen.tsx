import { Card, Col, Row, notification } from 'antd';
import React from 'react';
import TreeMapInput from '../Component/TreeMapInput'
import TreeMapRawInput from '../Component/TreeMapRawInput'


export interface InputType {
    name: string,
    weight: string,
    value: string
}


export interface TreeMapScreenState {
    rawData: string,
    dataSource: InputType[]
}

export default class TreeMapScreen extends React.Component<{}, TreeMapScreenState> {

    constructor(props: {}) {
        super(props);
        this.state = {
            rawData: "",
            dataSource: []
        }
    }
    handleAddData = (value: InputType) => {
        const errorList = this.handleValidate(value);
        if (errorList.length > 0) {
            notification.error({ message: "Create Data Failed", description: errorList.join(".") })
            return;
        }
        this.state.dataSource.push(value)
        this.setState({ rawData: JSON.stringify(this.state.dataSource) })
        notification.success({ message: "Create Data Success" })


    }

    handleSaveRawData = (value: string) => {
        try {
            const jsonData = JSON.parse(value);
            const errorList: string[] = jsonData.reduce((acc: string[], currVal: InputType) => {
                const error = this.handleValidate(currVal)
                return [...acc, ...error]
            }, [])
            if (errorList.length > 0) {
                notification.error({ message: "Save Raw Data Failed", description: Array.from(new Set(errorList)).join(".") })
                this.setState({ rawData: JSON.stringify(this.state.dataSource) })
                return;
            }
            this.setState({ dataSource: jsonData })
            notification.success({ message: "Save Raw Data Success" })

        }
        catch {
            notification.error({ message: "Save Raw Data Failed", description: "must be valid JSON" })
            this.setState({ rawData: JSON.stringify(this.state.dataSource) })
        }
    }

    handleValidate = (value: InputType): string[] => {
        const error: string[] = []
        if (value.name && value.name.length > 50) {
            error.push("data.name must be string and less than 50 characters")
        }
        if (value.weight && isNaN(Number(value.weight))) {
            error.push("data.weight must be integer")
        }
        if (this.state.dataSource.length > 50) {
            error.push("array.length <= 50")
        }
        return error;
    }

    handleRawDataChange = (e: any) => {
        this.setState({ rawData: e.target.value })
    }

    render() {
        return (
            <Row>
                <Col span={8}>
                    <Card title="Data Input">
                        <TreeMapInput add={(value) => this.handleAddData(value)} />
                    </Card>
                    <Card title="Raw Data Input">
                        <TreeMapRawInput save={(value) => this.handleSaveRawData(value)} json={this.state.rawData} handleRawDataChange={(e) => this.handleRawDataChange(e)} />
                    </Card>
                </Col>
                <Col span={16}>
                    <p>{JSON.stringify(this.state.dataSource)}</p>
                </Col>
            </Row>

        )
    }
}