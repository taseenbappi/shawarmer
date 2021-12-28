import { gql, useQuery } from "@apollo/client";

const SUB_CATAGORIES = gql`
    query SubCatagory {
        sub_catagories {
        id
        sub_cat_name
        }
    }
`;
const useSubCatagory = () => {

    const { loading, error, data } = useQuery(SUB_CATAGORIES);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
    const { sub_catagories } = data;
    return {
        sub_catagories
    }
}

export default useSubCatagory;