import styled from "styled-components";
import Card from "../components/Card";

const Wrapper = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 3rem;
    padding-bottom: 20px;

    @media (max-width: 1024px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`;

const Grid = ({ restaurants }: any) => {
    return (
        <Wrapper>
            {restaurants?.map(
                (
                    restaurant: {
                        name: string;
                        address: string;
                        time: {
                            open: string;
                            close: string;
                        };
                        date: string;
                        tags: any;
                    },
                    key: number
                ) => (
                    <Card restaurant={restaurant} key={key} />
                )
            )}

            {restaurants?.length === 0 && <h2>No results</h2>}
        </Wrapper>
    );
};

export default Grid;
