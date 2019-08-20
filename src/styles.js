import styled from "styled-components";

export const Navigation = styled.div`
  font-size: 17px;
  padding: 7px 5px;
  background-color: darkcyan;
  box-shadow: 0 0 4px rgba(1, 0, 1, 0.4);

  & ul {
    list-style: none;
    display: flex;
    justify-content: flex-end;
  }

  & li {
    padding: 0px 10px;
  }

  & li a {
    text-decoration: none;
    color: white;
  }

  & .active-navlink {
    color: white;
    border-bottom: 1px solid white;
  }
`;

export const PostBlock = styled.div`
  border: 1px solid #f5f5f5;
  margin: 10px 0;
  padding: 15px 30px;

  & a {
    text-decoration: none;
    color: black;
  }

  & div {
    text-align: justify;
    color: black;
  }

  & div p {
    display: flex;
    color: #797059;
  }
`;

export const Flex = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const FlexStart = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  flex-flow: column;
`;

export const H1 = styled.h1`
  text-align: center;
  font-size: 26px;
  margin: 30px 0;
`;

export const Border = styled.button`
  display: block;
  border: 1px solid darkcyan;
  margin: auto;
  text-align: center;
  width: 180px;
  background-color: white;

  &:hover {
    background-color: darkcyan;
  }
`;

export const PostItemSection = styled.p`
  margin: 10px 0;
  padding: 15px 30px;
  min-height: -webkit-fill-available;

  & textarea {
    margin-top: 15px;
    height: 50px;
    min-width: 250px;
    max-width: 400px;
    width: 100%;
    border: 1px solid gray;
  }

  & button {
    margin: 20px 0 25px 10px;
    height: 30px;
    width: 100px;
    background-color: white;
    border: 1px solid gray;
  }

  & button:hover {
    background-color: darkcyan;
  }

  & span {
    text-align: center;
    display: block;
    margin-bottom: 10px;
    margin-top: 30px;
    font-size: 17px;
    font-weight: 600;
  }

  & a {
    text-decoration: none;
    color: gray;
    margin-top: 15px;
  }

  & a:hover {
    text-decoration: none;
    color: blue;
  }
`;

export const Comment = styled.p`
  text-align: center;
  border-bottom: 1px solid #f5f5f5;
  margin: 20px 0;
`;

export const CommentContainer = styled.div`
  width: 57%;
  border: 1px solid rgb(253, 256, 266);
  margin: auto;
  background-color: aliceblue;
`;

export const AddForm = styled.div`
  margin: 10px 0;
  padding: 15px 30px;

  & label {
    margin: 20px 0px;
    display: grid;
  }

  & input {
    margin-top: 10px;
    height: 30px;
  }

  & textarea {
    margin-top: 10px;
    margin-bottom: 15px;
  }

  & button {
    display: block;
    padding: 10px 45px;
    background-color: white;
    margin: 35px auto;
  }

  & button:hover {
    background-color: darkred;
    color: white;
  }
`;
