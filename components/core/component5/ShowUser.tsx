import { UserFetched } from './type-defs'
import { View, Text } from 'react-native';

type Props = {
    userFetched: UserFetched;
}

const ShowUser: React.FC<Props> = ({ userFetched }) => {

    const showUser = () => {
        if (userFetched.user) {
            const user = userFetched.user;
            return (
                <View>
                    <Text>User data fetched from remote source:</Text>
                    <Text>id: {user.id}</Text>
                    <Text>name: {user.name}</Text>
                    <Text>username: {user.username}</Text>
                    <Text>email: {user.email}</Text>
                    <Text>street address: {user.address.street}</Text>
                    <Text>phone: {user.phone}</Text>
                    <Text>website: {user.website}</Text>
                    <Text>company name: {user.company.name}</Text>
                </View>

            )
        } else {
            return <Text>`No user to display: ${userFetched.error}`</Text>;
        }
    }
    return (
        <View>
            {showUser()}
        </View>
    )
}

export default ShowUser;
