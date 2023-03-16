import classes from './TablePage.module.css';
import TableInfo from './TableInfo';
import AddTable from './AddTable';
import AnotherTable from './AnotherTable';

const default_tables = [{id: 1, boardName: "Andrii's" }, 
{id: 2, boardName: "Andrii's Barbershop" }]
 
function TablePage() {

  return (
      <div className={classes["table-list"]}>
        {default_tables.map(table => (
          <div key={table.id} className={classes["table-list-item"]}>
           <TableInfo boardName={table.boardName}/>
          </div>
        ))}


        {default_tables.map(table => (
          <div key={table.id} className={classes["table-list-item"]}>
           <AnotherTable boardName={table.boardName}/>
          </div>
        ))}
        <AddTable/>
      </div>
  );
}

export default TablePage;