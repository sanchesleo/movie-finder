import React from 'react'
import Select from 'react-select'

const SelectForm = ({options,nameSelect,idSelect,placeholderSelect, ...props}) => {
    const theme = theme => ({
        ...theme,
        colors: {
          ...theme.colors,
          primary25: "#6C91C2",
          primary: "#6C91C2"
        }
      })
    
      const customStyles = {
        singleValue: (styles) => ({
          ...styles,
          color: '#C4C4C4',
        }),
        container: (styles) => ({
          ...styles,
          backgroundColor: '#6C91C2',
          color: '#C4C4C4',
          borderRadius: 0,
        }),
        control: (styles) => ({
          ...styles,
          backgroundColor: '#6C91C2',
          color: '#C4C4C4',
          borderRadius: 0,
          maxWidth: '457px',
          width: '30rem',
          padding: 10,
          "@media only screen and (max-width: 800px)": {
            ...styles["@media only screen and (max-width: 800px)"],
            maxWidth: '400px',
          },
          "@media only screen and (max-width: 600px)": {
            ...styles["@media only screen and (max-width: 600px)"],
            maxWidth: '250px',
          },
          "@media only screen and (max-width: 300px)": {
            ...styles["@media only screen and (max-width: 300px)"],
            maxWidth: '150px',
            fontSize: '0.8rem'
          },
        }),
        placeholder: (styles) => ({
          ...styles,
          color: '#C4C4C4',
          fontWeight: 'bold'
        })
      }
  return (
    <Select
            options={options}
            theme={theme}
            styles={customStyles}
            placeholder={placeholderSelect}
            name={nameSelect}
            id={idSelect}
            {...props}
          />
  )
}

export default SelectForm