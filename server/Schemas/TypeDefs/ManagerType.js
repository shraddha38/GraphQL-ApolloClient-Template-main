const graphql = require("graphql")
const { GraphQLObjectType, GraphQLInt, GraphQLString } = graphql;

const ManagerType = new GraphQLObjectType({
    name: "Manager",
    fields: () => ({
        id: { type: GraphQLInt },
        firstName: { type: GraphQLString },
        lastName: { type: GraphQLString },
        email: { type: GraphQLString },
        password: { type: GraphQLString },
    }),
});

module.exports = ManagerType;
