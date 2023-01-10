import styled from "styled-components";

export const MovieDetailsPage = styled.div`
max-width:1920px;
margin:auto;
`;

export const PopularMoviesBox = styled.div`
    max-width: 1368px;
    margin: auto;
    margin-top: 60px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: center;
    justify-content: center;
    align-items: center;
    @media (max-width: 756px) {
        align-self:center;
        margin: 0 16px;
    }
`;

export const PopularMoviesName = styled.h1`
    align-self:flex-start;
    font-weight: 600;
    font-size: 36px;
    line-height: 120%;
    color: ${({ theme }) => theme.color.woodsmoke};
    @media (max-width: 1349px) {
        align-self:center;
    }
    @media (max-width: 756px) {
        align-self:center;
        font-size: 18px;
    }
`;

export const MoviesList = styled.div`
    display: flex;
    gap: 24px;
    align-content: center;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
`;