import { SearchOutlined } from '@mui/icons-material';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import TextField from '@mui/material/TextField';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import CustomPagination from '../../components/Pagination/CustomPagination';
import SingleContent from '../../components/SingleContent/SingleContent';

const Search = () => {

  const [type, setType] = useState(0)
  const [page, setPage] = useState(1);
  const [searchText, setSearchText] = useState('');
  const [content, setContent] = useState();
  const [numOfPages, setNumOfPages] = useState();

  const darkTheme = createTheme({
    palette: {
      mode: "dark",

    }
  });

  const handleChange = (event, newValue) => {
    setType(newValue);
    setPage(1)
  };

  const fetchSearch = async () => {
    const { data } = await axios.get(`https://api.themoviedb.org/3/search/${type ? "tv" : "movie"}?api_key=${process.env.REACT_APP_API_KEY
      }&language=en-US&query=${searchText}&page=${page}&include_adult=false`)

    setContent(data.results);
    setNumOfPages(data.total_pages)
  }

  useEffect(() => {
    window.scroll(0, 0);
    fetchSearch();
    // eslint-disable-next-line
  }, [type, page])

  return (
    <div>

      <span className='pageTitle'>
        Search
      </span>

      <ThemeProvider theme={darkTheme}>
        <div style={{ margin: '15px 0', display: 'flex' }}>
          <TextField
            className='searchBox'
            id="standard-basic"
            label="Search"
            variant="standard"
            onChange={(e) => setSearchText(e.target.value)}
          />
          <Button variant='contained' style={{ margin: '0 10px' }}
          onClick={fetchSearch}
          >
            <SearchOutlined />
          </Button>
        </div>
      </ThemeProvider>


      <Tabs
        value={type}
        onChange={handleChange}
        indicatorColor='primary'
        textColor='primary'
        style={{ paddingBottom: 5 }}
      >

        <Tab style={{ width: '50%' }} label="Search Movies" />
        <Tab style={{ width: '50%' }} label="Search TV Series" />

      </Tabs>


      <div className="trending">
        {
          content &&
          content.map((c) => (
            <SingleContent key={c.id}
              id={c.id}
              poster={c.poster_path}
              title={c.title || c.name}
              date={c.first_air_date || c.release_date}
              media_type={type ? "tv" : "movie"}
              vote_average={c.vote_average}
            />
          )
          )
        }
        {!searchText && 
        !content && 
        (type ? <h2> No Series Found </h2> : <h2> No Movies Found </h2>)
        }

        {numOfPages > 1 &&
          (<CustomPagination setPage={setPage} numberOfPages={numOfPages} />)
        }
      </div>
   

    </div>
  )
}

export default Search
