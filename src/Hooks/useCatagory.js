import { gql, useQuery } from "@apollo/client";

const CATAGORIES = gql`
        query Catagory {
            catagories {
            id
            cat_name
            }
        }
`;
const useCatagory = () => {

    const { loading, error, data } = useQuery(CATAGORIES);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
    const { catagories } = data;
    return {
        catagories
    }
}

export default useCatagory;