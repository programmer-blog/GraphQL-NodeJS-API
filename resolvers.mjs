export const resolvers = {
    Query: {
        checkApiStatus: () => {
            return { status: 'The API is orking correctly' }
        }
    },
    Mutation: {
        testMutations: async () => {
            return {
                status: "Mutations are working."
            }
        }
    }
}