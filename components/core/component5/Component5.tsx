
/** Here we illustrate useEffect for fetching remote data at mount time and event driven occasion */
import React, { useState, useEffect } from 'react';
import ShowUser from './ShowUser';
import { UserFetched } from './type-defs';
import { View, Text, TextInput } from 'react-native';

type Props = {
    name?: string;
}

const Component5: React.FC<Props> = ({ name = "Ife" }) => {
    //const [state, setState] = useState(initialState);
    const [userFetched, setUserFetched] = useState<UserFetched>({ user: null, error: null });
    const [userId, setUserId] = useState<string>('1');

    const setUserIdToFetch = (text: string) => {
        if (text != '') { //let us ensure that user fetch does not happen when id is wiped
            setUserId(text);
        }
    }

    const fetchData = async () => {
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
            if (response.status < 200 || response.status > 299) {
                setUserFetched({ user: null, error: `Response status = ${response.status}` });
                return;
            }
            const data = await response.json();
            setUserFetched({ user: data, error: null });
        } catch (error: any) {
            setUserFetched({ user: null, error: error.message });
        }
    };

    useEffect(() => {
        fetchData();
    }, [userId]); //fetch user whenever userUrl changes


    return (
        <View>
            <Text>Hello {name}. Greetings from HelloWorld5.</Text>
            <View>
                <TextInput placeholder="Enter UserId (1 to 10) here to fetch immediately ..." 
                onChangeText={setUserIdToFetch} autoFocus 
                keyboardType='numeric' />
            </View>
            <View>
                <TextInput onSubmitEditing={(event) => setUserIdToFetch(`${event.nativeEvent.text}`)}   
                    placeholder="Enter UserId (1 to 10) here. Press enter when done"
                    keyboardType='numeric' autoFocus />
            </View>
            <View>
                <ShowUser userFetched={userFetched} />
            </View>
        </View>
    )
}

export default Component5;
