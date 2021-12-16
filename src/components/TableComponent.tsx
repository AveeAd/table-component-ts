import styled from '@emotion/styled';
import {TableData} from '../data'
import PaginationComp from './Pagination';
const TableComponent = (props:any) => {
  return (
    <>
    <Table>
      <Thead>
        <tr>
          {
            Object.keys(props.tableData[0]).map((value:any,index:number)=>(
              <Td key={index}>{value.toUpperCase()}</Td>
            ))
          }
        </tr>
      </Thead>
      <Tbody>
      {props.tableData.map((data:TableData,index:number)=>(
        <Tr key={index}>
          {
            Object.values(data).map((value:any,index:number)=>(
              <Td key={index}>{value}</Td>
            ))
          }
        </Tr>
      ))}
      </Tbody>
    </Table>
      <PaginationComp total={props.total} page={props.page} setPage={props.setPage}/>
    </>
  )
}

export default TableComponent

const Table = styled.table`
text-align: center;`

const Thead = styled.thead`
  background:#eee;
  color:#333;
  font-weight:bold;
  td {
    padding:0.5rem 2rem;
  }`

const Tbody = styled.tbody``

const Tr = styled.tr`
  background:#fff;
`

const Td = styled.td`
padding:0.5rem 2rem;`

