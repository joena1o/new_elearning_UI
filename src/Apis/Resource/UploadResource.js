
import axios from 'axios';
import { conn } from '../../util/conn';

export const UploadResource = ({formData})=>{

    axios.post(conn+'/api/v1/uploadbooks',
        formData
    ).then((value)=>{
        return value;
    });


}