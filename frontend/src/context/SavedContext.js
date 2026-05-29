import React, {
  createContext,
  useState
} from "react";

export const SavedContext =
  createContext();

export const SavedProvider = ({
  children
}) => {

  const [savedProperties,
    setSavedProperties] = useState([]);

  // SAVE PROPERTY

  const saveProperty = (property) => {

    const exists =
      savedProperties.find(
        (item) =>
          item.title === property.title
      );

    if (!exists) {

      setSavedProperties([
        ...savedProperties,
        property
      ]);

    }

  };

  // REMOVE PROPERTY

  const removeProperty = (title) => {

    const updated =
      savedProperties.filter(
        (item) => item.title !== title
      );

    setSavedProperties(updated);

  };

  return (

    <SavedContext.Provider
      value={{
        savedProperties,
        saveProperty,
        removeProperty
      }}
    >

      {children}

    </SavedContext.Provider>

  );

};