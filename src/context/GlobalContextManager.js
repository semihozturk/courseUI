import React, { createContext, useContext, useState } from 'react';
import HorizontalCircles from "../components/HorizontalDiscussion";
import HorizontalDiscussion from "../components/HorizontalDiscussion";


export const GlobalContext = createContext();

function GlobalContextManager(props) {

  const GetUsers = () => {
    const returnFromService = {
      "errorCode": -1,
      "data": {
        "colors": [
          {
            colorFirst: "red",
            colorSecond: "black",
          },
          {
            colorFirst: "pink",
            colorSecond: "gray",
          }
        ]
      }
    };

    if (returnFromService.errorCode === -1) {
      const returnFromGlobal = returnFromService.data.colors;
      return returnFromGlobal;
    } else {
      return returnFromService.errorCode;
    }
  }

  const GetDiscussion = () => {
    const returnFromService = {
      "errorCode": -1,
      "data": {
        "cards": [
          {
            "isLive": true,
            "type": "Topic",
            "title": "Human Resources Analysis",
            "author": "Emran Emon",
            "attendees": 12,
            "color": "blue",
            "circles": [
              "black",
              "yellow",
              "red",
              "gray"
            ],
            "attendeesColor": "pink"
          },
          {
            "isLive": false,
            "type": "Topic",
            "title": "React Native Course UI",
            "author": "Matias Delgado",
            "attendees": 12,
            "color": "pink",
            "circles": [
              "black",
              "yellow",
              "red",
              "gray"
            ],
            "attendeesColor": "pink"
          }
        ]
      }
    }


    if (returnFromService.errorCode === -1) {
      const returnFromGlobal = returnFromService.data.cards;
      return returnFromGlobal;
    } else {
      return returnFromService.errorCode;
    }
  }


    return (
      <GlobalContext.Provider value={{ GetUsers, GetDiscussion }}>
        {props.children}
      </GlobalContext.Provider>
    );
  }

  export default GlobalContextManager;