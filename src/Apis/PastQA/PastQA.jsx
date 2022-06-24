import  axios from "axios";
import {conn} from "../../util/conn";

export const PastQAapi = async({formdata})=>{

    await axios.post(conn+"/api/v1/pastQA", formdata).then((value)=>{

       return value;

    });


}