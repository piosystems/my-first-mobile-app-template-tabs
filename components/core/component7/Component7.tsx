
/** Here we illustrate useEffect for fetching remote data at mount time and event driven occasion */
import React, { useState, useEffect } from 'react';
import ShowUsers from './ShowUsers';
import { UsersFetched } from './type-defs';
import { View, Text } from 'react-native';

type Props = {
    name?: string;
}
const Component7: React.FC<Props> = ({ name = "Ife" }) => {
    //const [state, setState] = useState(initialState);
    const [usersFetched, setUsersFetched] = useState<UsersFetched>({ users: [], error: null });
    const fetchData = async () => {
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
            if (response.status < 200 || response.status > 299) {
                setUsersFetched({ users: null, error: `Response status = ${response.status}` });
                return;
            }
            const data = await response.json();
            setUsersFetched({ users: data, error: null });
        } catch (error: any) {
            setUsersFetched({ users: null, error: error.message });
        }
    };
    useEffect(() => {
        fetchData();
    }, []); //fetch users once
    return (
        <View>
            <Text>Hello {name}. Greetings from HelloWorld7.</Text>
            <View>
                <ShowUsers usersFetched={usersFetched} />
            </View>
        </View>
    )
}

export default Component7;
