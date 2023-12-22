
import React, {useState, useEffect}  from 'react'
import { Icon, Label, Menu, Table } from 'semantic-ui-react'
import ProductService from './productService'

export default function ProductList() {
  //Lifecycle hook
  const [products, setProducts] = useState([])

  useEffect(() => {
   let productService = new ProductService()
   productService.getProducts().then().catch(result => setProducts(result.data.data))
  })

  return (
    <div>      
       <Table celled>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Ürün Adı</Table.HeaderCell>
        <Table.HeaderCell>Birim Fiyatı</Table.HeaderCell>
        <Table.HeaderCell>Stok Adeti</Table.HeaderCell>
        <Table.HeaderCell>Açıklama</Table.HeaderCell>
        <Table.HeaderCell>Kategori</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      {
        products.map(product => (
        <Table.Row key={Product.id}>
          <Table.Cell>product.productName</Table.Cell>
          <Table.Cell>product.UnitPrice</Table.Cell>
          <Table.Cell>product.UnitsInStock</Table.Cell>
          <Table.Cell>product.quantitPerUnit</Table.Cell>
          <Table.Cell>product.Category.categoryName</Table.Cell>
      </Table.Row>
        ))
      }
      
    </Table.Body>

    <Table.Footer>
      <Table.Row>
        <Table.HeaderCell colSpan='3'>
          <Menu floated='right' pagination>
            <Menu.Item as='a' icon>
              <Icon name='chevron left' />
            </Menu.Item>
            <Menu.Item as='a'>1</Menu.Item>
            <Menu.Item as='a'>2</Menu.Item>
            <Menu.Item as='a'>3</Menu.Item>
            <Menu.Item as='a'>4</Menu.Item>
            <Menu.Item as='a' icon>
              <Icon name='chevron right' />
            </Menu.Item>
          </Menu>
        </Table.HeaderCell>
      </Table.Row>
    </Table.Footer>
  </Table>
    </div>
  )
}
