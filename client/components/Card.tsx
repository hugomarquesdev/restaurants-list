import styled from "styled-components";
import { isRestaurantOpen } from "../utils/isRestaurantOpen";

const Wrapper = styled.div<{ open?: boolean }>`
    background: #1c1c1c;
    border-radius: 10px;
    padding: 1rem;
    opacity: ${(props) => !props.open && "0.5"};

    p {
        font-weight: 200;
        display: flex;
        align-items: center;

        .dot {
            height: 10px;
            width: 10px;
            background-color: ${(props) => (props.open ? "green" : "red")};
            border-radius: 50%;
            display: inline-block;
            margin-right: 0.3rem;
        }
    }
`;

const Head = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 0.5rem;

    p {
        font-size: 0.7rem;
    }
`;

const Tags = styled.div`
    display: flex;
    flex-direction: row;

    p {
        font-size: 0.8rem;
    }
`;

const SmallerP = styled.p`
    font-weight: 400;
    margin-right: 0.3rem;
`;

type Restaurant = {
    restaurant: {
        name: string;
        address: string;
        time: {
            open: string;
            close: string;
        };
        date: string;
        tags: string[];
    };
};

const Card = ({ restaurant }: Restaurant) => {
    const isOpen = isRestaurantOpen(
        restaurant.time.open,
        restaurant.time.close
    );

    return (
        <>
            {restaurant && (
                <Wrapper open={isOpen}>
                    <Head>
                        <h2>{restaurant.name}</h2>
                        <p>
                            <span className="dot"></span>
                            {isOpen ? "Open" : "Closed"}
                        </p>
                    </Head>
                    <p
                        style={{
                            marginBottom: "1rem",
                            fontSize: "0.8rem",
                        }}
                    >
                        {restaurant.address}
                    </p>
                    <p style={{ fontWeight: "500" }}>Working Hours:</p>
                    <p style={{ marginBottom: "1rem" }}>
                        {restaurant.time.open} - {restaurant.time.close}
                    </p>

                    <hr />

                    <div
                        style={{
                            marginTop: "1rem",
                            fontSize: "0.8rem",
                            display: "flex",
                        }}
                    >
                        <SmallerP>Creation Date: </SmallerP>
                        <p> {restaurant.date}</p>
                    </div>
                    <Tags>
                        <SmallerP>Tags:</SmallerP>
                        <p>{restaurant.tags.join(", ")}</p>
                    </Tags>
                </Wrapper>
            )}
        </>
    );
};

export default Card;
