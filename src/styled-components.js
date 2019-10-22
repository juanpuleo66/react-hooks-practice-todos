import React, { useState } from 'react';
import styled from 'styled-components'

const ButtonCompleted = styled.button`
    background: rgba(0,153,0,0.8);
    color: white;
    border: 2px solid rgba(0,153,0,0.9);
    border-radius: 3px;
    height: 30px
    width: 30px
    margin: 7px 5px 0;
    font-size: large;
    font-weight: bold;
    text-align: center;
    padding-left: 5px;
`;

const ButtonUndo = styled.button`
    background: rgba(255,255,0,0.8);
    color: black;
    border: 2px solid rgba(255,255,0,0.9);
    border-radius: 3px;
    height: 30px
    width: 30px
    margin: 7px 5px 0;
    font-size: large;
    font-weight: bold;
    text-align: center;
    padding-left: 5px;
`;

const ButtonRemove = styled.button`
    background: rgba(255,0,0,0.8);
    color: white;
    border: 2px solid rgba(255,0,0,0.9);
    border-radius: 3px;
    height: 30px
    width: 30px
    margin: 7px 5px 0;
    font-size: large;
    font-weight: bold;
    text-align: center;
`;

export { ButtonRemove, ButtonCompleted, ButtonUndo };