import React from 'react'
import { Stack } from '@mui/material';
import { categories } from '../utils/constants';


const Sidebar = ({selectedCategory, setSelectedCategory}) => (
    <Stack
    direction = "row"
    sx = {{
        overflowY: "auto",
        height: {sx: 'auto', md: '95%'},
        flexDirection: { md: 'column' },
    }}
  >
    {categories.map((category) => (
        <button
        key={category.name}
        className="category-btn"
        onClick={() => setSelectedCategory(category.name)}
        style={{
            background: category.name === selectedCategory && 'red',
            color: "black"
        }}>
            <span style = {{ color: category.name === selectedCategory? 'white' : 'black', marginRight: '15px'}}>{category.icon}</span>
            <span style = {{ color: category.name === selectedCategory? 'white' : 'black'}}>{category.name}</span>
        </button>
    ))}
  </Stack>
)

export default Sidebar