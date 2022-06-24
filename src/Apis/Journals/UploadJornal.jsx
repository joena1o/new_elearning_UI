import axios from 'axios';
import { conn } from '../../util/conn';

export const UploadJournal = ({formData})=>{

    axios.post(conn+'/api/v1/uploadjournal',
        formData
    ).then((value)=>{

        return value;

    });
    

}