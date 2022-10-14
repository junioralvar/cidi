import Table from 'react-bootstrap/Table';

export function TableCatalogue() {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Mes</th>
          <th>Titulo</th>
          <th>Autor</th>
          <th>Descarga</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td> </td>
          <td> </td>
          <td> </td>
        </tr>
        <tr>
          <td>2</td>
          <td> </td>
          <td> </td>
          <td> </td>
        </tr>
        
      </tbody>
    </Table>
  );
}

export function TableAlert() {
    return (
      <Table striped bordered hover>
        <thead>
          <tr>
            
            <th>Mes</th>
            <th>Descarga</th>
          </tr>
        </thead>
        <tbody>
          <tr>            
            <td>Enero</td>
            <td> </td>
          </tr>
          <tr>            
            <td>Febrero </td>
            <td> </td>
          </tr>
          
        </tbody>
      </Table>
    );
  }
