
import * as React from "react";
import { View, Text, Image ,StyleSheet} from 'react-native'
// import styles from './styles'
import { Button } from "native-base";
import { totalSize } from "react-native-dimension";

export default class SwipeRightComponent extends React.Component {
    render() {
        return (
            <View style={{ flexDirection: "row",height : totalSize(13)}}>
                <Button danger style={styles.editButton} onPress={() => this.props.onEdit()}>
                    <View style={{ flexDirection: "column", justifyContent: "center", alignSelf: "center" }}>
                        {/* <Icon active name="ios-trash" /> */}
                        {/* <Image style={{ height: totalSize(1.7), width: totalSize(1.7), marginBottom: totalSize(2) }} source={this.props.editImage} /> */}
                        <Text style={styles.listStyle}>Edit</Text>
                    </View>
                </Button>
                <Button danger style={styles.deleteButton} onPress={() => alert('DELETE')}>
                    <View style={{ flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                        {/* <Image style={{ height: totalSize(1.7), width: totalSize(1.5), marginBottom: totalSize(2) }} source={this.props.deleteImage} /> */}
                        <Text style={styles.listStyle}>Delete</Text>
                    </View>
                </Button>
                {this.props.expenseImageProps &&
                    <Button danger style={styles.expenseButton} onPress={() => alert('EXPENSE')}>
                        <View style={{ flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                            <Image style={{ height: totalSize(1.7), width: totalSize(1), marginBottom: totalSize(2) }} source={this.props.expenseImage} />
                            <Text style={styles.listStyle}>Expense</Text>
                        </View>
                    </Button>}

                {this.props.cameraImageProps &&
                    <Button danger style={styles.cameraButton} onPress={() => this.props.onCamera()}>
                        <View style={{ flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                            <Image style={{ height: totalSize(1.7), width: totalSize(2), marginBottom: totalSize(2) }} source={this.props.cameraImage} />
                            <Text style={styles.listStyle}>Camera</Text>
                        </View>
                    </Button>
                }
            </View>
        )
    }
}


const styles: any = StyleSheet.create({
    valueStyle: {
        fontFamily: 'Roboto-Medium',
        fontSize: totalSize(1.5),
        color: '#000000'
    },
    editButton: {
        backgroundColor: "rgba(204,204,204,1)",
        height: totalSize(13),
    },
    deleteButton: {
        backgroundColor: "rgba(236,28,35,1)",
        height: totalSize(13),
    },
    expenseButton: {
        backgroundColor: "rgba(250,147,55,1)",
        height: totalSize(13),

    },
    cameraButton: {
        backgroundColor: "rgba(88,89,91,1)",
        width: totalSize(15),
        height: totalSize(13),
    },
    listStyle: {
        fontFamily: "Roboto-Medium",
        fontSize: totalSize(1),
        color: "white"
    },

});