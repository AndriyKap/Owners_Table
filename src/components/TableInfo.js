import classes from "./TableInfo.module.css";
import { Icon } from 'react-icons-kit'
import {calendar} from 'react-icons-kit/icomoon/calendar'
import {userPlus} from 'react-icons-kit/icomoon/userPlus'
import {priceTag} from 'react-icons-kit/icomoon/priceTag'
import {circleRight} from 'react-icons-kit/icomoon/circleRight'

const TableInfo = (props) => {
  return (
    <div className={classes.table}>
      <div className={classes["table-details"]}>
      <span className={classes["calendar-icon"]}><Icon icon={calendar} size={50} style={{ color: '#1C1333' }}/></span>
        <div className={classes["table-title"]}>
          {props.boardName.slice(0, 40)}
          <div className={classes["table-info-block"]}>
            <div className={classes["table-info"]}><Icon icon={userPlus} size={16} style={{ color: 'black' }}/>
              <div className={classes["count-window"]}>18</div>
            </div>
            <div className={classes["table-info"]}><Icon icon={priceTag} size={16} style={{ color: 'black' }}/>
              <div className={classes["count-window"]}>18</div>
            </div>
        </div>
        </div>
        <span className={classes["circleRight-icon"]}><Icon icon={circleRight} size={36} style={{ color: '#717171' }}/></span>
      </div>
    </div>
  );
};

export default TableInfo;
