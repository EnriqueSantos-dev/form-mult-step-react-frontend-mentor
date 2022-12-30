import styled from "styled-components";

export const Container = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 100%;
  background-color: var(--alabaster);
  border-radius: 0.5rem;
  padding: 1.5rem;

  @media (min-width: 1024px) {
    padding: 1.5rem 0;
    justify-content: space-between;
    height: 100%;
  }
`;

export const WrapperContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-block: 0 2rem;
`;

export const BoxCoverSummary = styled.div`
  margin-top: 1rem;
  background-color: var(--magnolia);
  border-radius: 0.5rem;
  padding: 1.5rem;
`;

export const TopContentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 1.5rem;
  border-bottom: solid 1px var(--light-gray);

  @media (min-width: 1024px) {
    align-items: center;
  }
`;

export const TopContentContainerLeftSide = styled.div`
  h2 {
    color: var(--marine-blue);
    font-weight: bold;

    &::first-letter {
      text-transform: capitalize;
    }
  }

  button {
    text-decoration: underline 2px;
    color: var(--cool-gray);
    font-size: 0.875rem;
  }

  h2,
  a {
    &::first-letter {
      text-transform: capitalize;
    }
  }

  @media (min-width: 1024px) {
    h2 {
      font-size: 1.125rem;
    }

    button {
      font-size: 1rem;
    }
  }
`;

export const TopContentContainerRightSide = styled.p`
  color: var(--marine-blue);
  font-weight: bold;
  font-size: 1.125rem;
`;

export const BottomContainer = styled.ul`
  margin-top: 1.5rem;

  li {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1rem;

    p:first-child {
      color: var(--cool-gray);

      &::first-letter {
        text-transform: uppercase;
      }
    }

    p:last-child {
      color: var(--marine-blue);
    }
  }
`;

export const TotalSummaryContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 0.5rem;
  padding-inline: 1rem;

  p {
    color: var(--cool-gray);
    font-weight: 500;

    &::first-letter {
      text-transform: uppercase;
    }
  }

  h3 {
    font-weight: bold;
    font-size: 1.25rem;
    color: var(--purplish-blue);
  }

  @media (min-width: 1024px) {
    padding-inline: 1.5rem;
  }
`;
