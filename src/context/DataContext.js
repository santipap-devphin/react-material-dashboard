import { createContext , useState , useEffect , useRef } from "react";
import { createTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const DataContext = createContext({});

export const DataProvider = ({children}) => { 

    const [datas , setDatas] = useState(false);

    const scaleTablet = useMediaQuery('(min-width:768px)');
    const matches = useMediaQuery('(max-width:899px)');
        
    const theme = createTheme({
        root: {
          margin: "0px",
          padding: "0px"
        }
        , palette: {
          primary: {
            main: "#fdbe33",
          },
          action: {
            disabledBackground: '#696969',
            disabled: '#696969'
            
          }
          
        },
        typography: {
          fontFamily: "Kanit",
          fontWeightBold:100,
          fontWeightLight: 300,
        }
      });


   return (
            <DataContext.Provider value={{ datas , setDatas  , theme , scaleTablet , matches
            }}>
                {children}
            </DataContext.Provider>
       )

}



export default DataContext;