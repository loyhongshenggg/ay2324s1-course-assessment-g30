import React, { useMemo } from 'react'
import {useReactTable, getCoreRowModel, flexRender} from "@tanstack/react-table"
import { table1 } from '../../../data/data';
import './Table.css';

function Table() {

    // Question Id
    // Question Title
    // Question Category
    // Question Complexity
    const data = useMemo(() => table1, []);

    const columns = [
      {
        header:'Question Id',
        accessorKey: 'question_id'
      },
      {
        header:'Question Title',
        accessorKey: 'question_title'
      },
      {
        header:'Question Category',
        accessorKey: 'question_categories'
      },
      {
        header:'Question Complexity',
        accessorKey: 'question_complexity'
      },

    ]

    



  return (
<div class="container">
  <h2 id='title'>Leetcode Questions</h2>
  <ul class="responsive-table">
    <li class="table-header">
      <div class="col-1">Question Id</div>
      <div class="col-2">Question Title</div>
      <div class="col-3">Question Category</div>
      <div class="col-4">Question Complexity</div>
    </li>
    {table1.map(val => {
      return (
        <li class="table-row">
          <div class="col col-1" data-label="Job Id">{val.question_id}</div>
          <div class="col col-2" data-label="Customer Name">{val.question_title}</div>
          <div class="col col-3" data-label="Amount">{val.question_categories.reduce((a,b) => a + ' * ' + b, "")}</div>
          <div class="col col-4" data-label="Payment Status">{val.question_complexity}</div>
        </li>
      )
    })}
    
  </ul>
</div>
  )
}

export default Table