import Alert from 'react-bootstrap/Alert';

export function TextStock({ condition = true}){
    return(
        <>
        <Alert className={`${condition == true ? "alert alert-succes" :  "alert alert-danger" }`}> 
            Stock</Alert>
    </>
    )
}