import React from 'react'
import { useRoutes } from 'react-router-dom';
import Display from '../Simpal-componets/Display';
import Counter from '../Simpal-componets/Counter';
import Postid from './Postid';

export default function RouterTaskhook() {

    let element = useRoutes([
        { path: "/dis", element: <Display /> },
        { path: "/count", element: <Counter /> },
        { path: "/post:id", element: <Postid /> },
       
      ]);
   
      return element;
}