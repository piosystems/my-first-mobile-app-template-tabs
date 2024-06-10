type User = {
    id: string, //this needs to be string for keyExtractor in FlatList not to complain
    name: string,
    username: string,
    email: string,
    address: {
        street: string,
        city: string,
    },
    phone: string,
    website: string,
    company: {
        name: string
    }
}

export type UsersFetched = {
    users: User[] | null,
    error: string | null
}
