import React, { createContext, useState, ReactNode } from 'react';

// define the type of the context value

type ImageContextValue = {
    img: [string, React.Dispatch<React.SetStateAction<string>>];
    screen: [string, React.Dispatch<React.SetStateAction<string>>];
    batting: [string, React.Dispatch<React.SetStateAction<string>>];
  };
// create the context
export const ImageContext = createContext<ImageContextValue | undefined>(undefined);

// define the type of the props for the provider component
type ImageContextProviderProps = {
  children: ReactNode; // the children of the provider component
};

// create the provider component
export const ImageContextProvider = ({ children }: ImageContextProviderProps) => {
  const [url, setUrl] = useState(''); // state for image url
  const [currentScreen, setScreen] = useState('HOME'); // state for current screen
  const [batFirst, setBatFirst] = useState(''); // state for batting first

  // define the context value
  const contextValue: ImageContextValue = {
    img: [url, setUrl],
    screen: [currentScreen, setScreen],
    batting: [batFirst, setBatFirst]
  };

  // return the provider with the context value and children
  return (
    <ImageContext.Provider value={contextValue}>
      {children}
    </ImageContext.Provider>
  )
};
