import data from "../../db/db.json"

const Logo:React.FC = () => {

const {logo} = data   

    return ( <div>
          <div>
            <h1>
               {logo} 
            </h1>
        </div>
    </div> );
}
 
export default Logo;