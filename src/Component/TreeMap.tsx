import { Input, Form, Button, Row, Col, Divider } from 'antd';
import React from 'react';
import { InputType } from '../Screen/TreeMapScreen';

interface ITreeMapProps {
    dataSource: InputType[]
    column: number
}

interface ITreeMapState {
    tree: InputType[][]
    divider: number
}



export default class TreeMap extends React.Component<ITreeMapProps, ITreeMapState> {

    constructor(props: ITreeMapProps) {
        super(props);
        this.state = { tree: [], divider: 0 }
    }

    componentDidMount = () => {
        this.TreeMapAlgorithm()
    }

    componentDidUpdate = (prevProps: ITreeMapProps) => {
        if (prevProps.column !== this.props.column || JSON.stringify(this.props.dataSource) !== JSON.stringify(prevProps.dataSource)) {
            this.TreeMapAlgorithm()
        }
    }

    TreeMapAlgorithm = () => {
        const { dataSource, column } = this.props;
        const tree: InputType[][] = []
        const totalWeight = dataSource.reduce((acc, data) => acc + data.weight, 0);


        dataSource.sort((a, b) => b.weight - a.weight)
        let minimumWeightPerRow = Math.max(Math.ceil(totalWeight / column), dataSource[0].weight);
        let cloneDataSource = dataSource;

        while (cloneDataSource.length > 0) {
            if (cloneDataSource.length + tree.length === column) {
                [...cloneDataSource].map(data => tree.push([data]))
                break;
            }
            let columnWeight = 0;
            const treeColumn: InputType[] = []
            let index = 0;
            while (index < cloneDataSource.length) {
                // console.log("hello", cloneDataSource)

                if (minimumWeightPerRow - columnWeight >= cloneDataSource[index].weight) {
                    treeColumn.push(cloneDataSource[index]);
                    columnWeight = columnWeight + cloneDataSource[index].weight;
                    cloneDataSource = cloneDataSource.slice(1)
                    console.log(columnWeight, " ", minimumWeightPerRow)
                }
                else {
                    index++;
                }

                if (cloneDataSource.length + tree.length + 1 === column) {
                    break;
                }
            }
            if (minimumWeightPerRow - columnWeight !== 0) {
                for (let index = cloneDataSource.length - 2; index > 0; index--) {
                    if (cloneDataSource[index].weight > minimumWeightPerRow - columnWeight) {
                        treeColumn.push(cloneDataSource[index + 1]);
                        cloneDataSource = cloneDataSource.filter((value, idx) => idx !== index + 1)
                        if (tree.length === 0) {
                            minimumWeightPerRow = treeColumn.reduce((acc, data) => acc + data.weight, 0);
                        }
                        break;
                    }
                }
            }
            tree.push(treeColumn)
            // console.log("treeColumn", treeColumn)
            console.log("tree", tree)
        }
        this.setState({ tree: tree, divider: minimumWeightPerRow })
    }

    render() {
        return (
            this.state.tree.map(treerow =>
                <Row>{treerow.map(element =>
                    <Col
                        style={element.value < 0 ? { backgroundColor: "red", border: "solid" } : { backgroundColor: "green", border: "solid" }}
                        flex={element.weight / this.state.divider}>
                        <p>{element.name}</p><p>{element.value}</p>
                    </Col>)}
                </Row>
            )

            // JSON.stringify(this.state.tree)
        )
    }
}