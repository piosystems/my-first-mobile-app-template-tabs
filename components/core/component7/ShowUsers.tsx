import { UsersFetched } from './type-defs'
import { View, Text, FlatList } from 'react-native';

type Props = {
    usersFetched: UsersFetched;
}

const ShowUsers: React.FC<Props> = ({ usersFetched }) => {
    const showUsers = () => {
        if (usersFetched.users) {
            const users = usersFetched.users;
            return (
                <View>
                    <FlatList
                        data={users}
                        renderItem={({ item }) => (
                            <View>
                                <Text>Id={item.id}</Text>
                                <Text>Name={item.name}</Text>
                                <Text>Username={item.username}</Text>
                                <Text>Email={item.email}</Text>
                                <Text>Street={item.address.street}</Text>
                                <Text>City={item.address.city}</Text>
                                <Text>Phone={item.phone}</Text>
                                <Text>Website={item.website}</Text>
                            </View>
                        )}
                        ListHeaderComponent={
                            () => (<View><Text style={{ fontSize: 21, fontWeight: 'bold' }}>List of Users</Text></View>)
                        }
                        ListFooterComponent={
                            () => (<View style={{ backgroundColor: '#ccc', paddingBottom: 30, paddingTop: 3, alignContent: "flex-start" }}><Text style={{ fontSize: 15, fontStyle: "italic" }}>Source: https://jsonplaceholder.typicode.com/users</Text></View>)
                        }
                        keyExtractor={item => item.id.toString()}
                        ItemSeparatorComponent={
                            //this component will be rendered in between items
                            () => {
                                return (<View style={{ backgroundColor: 'red', height: 6, width: '100%' }} />)
                            }
                        }
                    />
                </View>
            )
        } else {
            return <Text>`No user to display: ${usersFetched.error}`</Text>;
        }
    }
    return (
        <View>
            {showUsers()}
        </View>
    )
}
export default ShowUsers;
