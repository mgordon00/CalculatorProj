import React from 'react'
import Table from 'react-bootstrap/Table'
import resources from './../data/resources.json';

export const ResourcesPage = () => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Name</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        {resources.map( (resource,index) => (
          <tr key={index}>
            <td><a href={resource.link ? resource.link : '#!'} target="_blank">{resource.name}</a></td>
            <td>{resource.description}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  )
}
