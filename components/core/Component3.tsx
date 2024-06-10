import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
type Props = {
    name?: string;
}
const Component3: React.FC<Props> = ({name = "Pius"}) => {
    //const [state, setState] = useState(initialState);
    const [nameToGreet, setName] = useState(name);
    const [count, setCount] = useState(0);
    const changeNameToGreet = (text: string) => {
        setName(text);
    }
    return (
        <View>
            <Text>Hello {nameToGreet}. Greetings from Component3.</Text>
            <View>
                <TextInput placeholder="Write a name here..." onChangeText={changeNameToGreet} autoFocus />
            </View>
            <View>
                <Text>You pressed {count} times</Text>
                <Button title="Press Me" onPress={() => setCount(count + 1)} />
            </View>
        </View>
    )
}

export default Component3;
