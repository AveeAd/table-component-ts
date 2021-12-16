import styled from "@emotion/styled";
import TableComponent from "./components/TableComponent";
import {tableData} from './data'
import {useEffect,useState} from 'react'
import axios from "axios";
function App() {
  const [products,setProducts] = useState(tableData);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);

  useEffect(()=>{
    axios.get(`http://localhost:5000/products?_page=${page}&_limit=5`)
    .then(res=>setProducts(res.data))
    axios.get('http://localhost:5000/products')
    .then(res=>setTotal(res.data.length))
    
  },[page])

  return (
    <Container>
      <TableComponent tableData={products} total={total} page={page} setPage={setPage}/>
    </Container>
  );
}

export default App;

const Container = styled.div``
