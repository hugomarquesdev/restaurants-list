import { Inter } from "next/font/google";
import { useEffect, useState } from "react";
import { useDebounce } from "../hooks/useDebounce";
import styled from "styled-components";
import Grid from "../components/Grid";
import Head from "../components/Head";

const inter = Inter({ subsets: ["latin"] });

const Wrapper = styled.div`
    max-width: 1024px;
    display: flex;
    flex-direction: column;
    margin: 50px auto 50px auto;
    gap: 50px;
    padding: 0 2rem;

    h1 {
        font-size: 4rem;

        @media (max-width: 768px) {
            font-size: 3rem;
        }
    }
`;

const Input = styled.input`
    border: 1px solid rgba(108, 108, 108, 0.3);
    border-radius: 10px;
    width: 100%;
    background-color: white;
    color: black;
    padding: 1rem;
    font-size: 1rem;
`;

const Error = styled.p`
    font-weight: 200;
    display: flex;
    align-items: center;
    background: #ff00004a;
    border-radius: 10px;
    padding: 1rem;
`;

const Home = () => {
    const [restaurants, setRestaurants] = useState([]);
    const [search, setSearch] = useState("");
    const [error, setError] = useState(false);
    const debouncedSearch = useDebounce(search, 500);

    useEffect(() => {
        fetch(`http://localhost:8000/restaurants?search=${debouncedSearch}`)
            .then((response) => response.json())
            .then((data) => {
                setRestaurants(data.restaurants);
                setError(false);
            })
            .catch((error) => {
                setError(true);
                console.log(error);
            });
    }, [debouncedSearch]);

    return (
        <>
            <Head />
            <main className={`${inter.className}`}>
                <Wrapper>
                    {error && (
                        <Error>
                            There was a network error. Please try again later.
                        </Error>
                    )}
                    <h1>resOS 🍽️</h1>

                    <Input
                        type="text"
                        value={search}
                        onChange={(e: any) => setSearch(e.target.value)}
                        placeholder="Search restaurant by name, address or tag..."
                    />
                    <Grid restaurants={restaurants} />
                </Wrapper>
            </main>
        </>
    );
};

export default Home;
